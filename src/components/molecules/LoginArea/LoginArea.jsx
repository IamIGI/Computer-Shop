import React, { useState, useRef, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { WrapButton, ErrMsg, Instructions, Wrapper, BottomLogin } from './LoginArea.style';
import useAuth from '../../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../../../api/axios';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';

const EMAIL_REGEX =
    /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

function LoginArea() {
    //#Added
    const { setAuth, persist, setPersist } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [expanded, setExpanded] = useState('false');
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    //clearErrors
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/auth', JSON.stringify({ email, hashedPassword: pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            const userName = response?.data?.userName;
            const id = response?.data?.id;
            //delete That pwd later
            setAuth({ id, userName, email, roles, accessToken });
            setEmail('');
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

    //#Added
    const togglePersist = () => {
        setPersist((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem('persist', persist);
    }, [persist]);
    //--
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
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            required
                        />
                        {emailFocus && email && !validEmail && <Instructions>Email jest nie poprawny.</Instructions>}
                        <Input
                            placeholder="Hasło (wymagane)"
                            type="password"
                            id="pwd"
                            autoComplete="off"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <BottomLogin>
                            <Checkbox type="checkbox" id="persist" onChange={togglePersist} checked={persist} />
                            {/* <label htmlFor="persist">Zaufaj temu urządzeniu</label> */}
                            <p>Zaufaj temu urządzeniu</p>
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
