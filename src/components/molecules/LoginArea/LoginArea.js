import { useState, useRef, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { WrapButton, ErrMsg, Instructions, Wrapper, BottomLogin } from './LoginArea.style';
import useAuth from 'hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'api/axios';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import useInput from 'hooks/useInput';
import useToggle from 'hooks/useToggle';
import { testEmailRegex } from 'data/Regex';

function LoginArea() {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.pathname || '/';

    const [expanded, setExpanded] = useState('false');
    const errRef = useRef();

    const [email, resetEmail, emailAttribs] = useInput('email', '');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    const [check, toggleCheck] = useToggle('persist', false);

    //clearErrors
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    useEffect(() => {
        setValidEmail(testEmailRegex(email));
    }, [email]);

    //send Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            resetEmail(); //working - fix, cuz get reset everytime...
            const response = await axios.post('/auth', JSON.stringify({ email, hashedPassword: pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            //resetEmail(); //don't work
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            const userName = response?.data?.userName;
            const id = response?.data?.id;
            setAuth({ id, userName, email, roles, accessToken });
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Brak łącznośći z serwerem');
            } else if (err.response?.status === 400) {
                setErrMsg('Wpisz Email i Hasło');
            } else if (err.response?.status === 401) {
                setErrMsg('Do podanego email-u nie ma przypisanego konta');
            } else if (err.response?.status === 406) {
                setErrMsg('Błędne hasło');
            } else {
                console.log(err);
                setErrMsg('Nieznany bład');
            }
            errRef.current.focus();
        }
    };

    //Check if capsLock is up
    const checkCapsLock = (event) => {
        if (event.getModifierState('CapsLock')) {
            setIsCapsLockOn(true);
        } else {
            setIsCapsLockOn(false);
        }
    };

    return (
        <Wrapper>
            <div ref={errRef}>
                {' '}
                {errMsg && (
                    <>
                        <ErrMsg aria-live="assertive">{errMsg}</ErrMsg>
                    </>
                )}
            </div>
            <form onSubmit={handleSubmit}>
                {expanded && <Button onClick={() => setExpanded(!expanded)}>Logowanie</Button>}
                {!expanded && (
                    <>
                        <Input
                            placeholder="E-mail (wymagane)"
                            style={validEmail || !email ? {} : { border: '1px solid red' }}
                            type="text"
                            id="email"
                            autoComplete="off"
                            {...emailAttribs}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            required
                        />
                        {emailFocus && email && !validEmail && <Instructions>Email jest nie poprawny.</Instructions>}
                        <Input
                            placeholder="Hasło (wymagane)"
                            type="password"
                            name="pwd"
                            id="pwd"
                            autoComplete="off"
                            onChange={(e) => setPwd(e.target.value)}
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            value={pwd}
                            onKeyUp={checkCapsLock}
                            required
                        />
                        {isCapsLockOn && pwdFocus && pwd && <Instructions>Caps Lock jest wciśnięty</Instructions>}
                        <BottomLogin onClick={() => toggleCheck()}>
                            <Checkbox type="checkbox" checked={check} readOnly={true} />
                            <div>Zaufaj temu urządzeniu</div>
                        </BottomLogin>
                        <Button> Zaloguj sie </Button>
                        <WrapButton onClick={() => setExpanded(!expanded)}>
                            <BsFillCaretUpFill />
                        </WrapButton>
                    </>
                )}
            </form>
        </Wrapper>
    );
}

export default LoginArea;
