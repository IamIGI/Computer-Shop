import React, { useState, useRef, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { WrapButton, ErrMsg, Instructions } from './LoginArea.style';
import useAuth from '../../../hooks/useAuth';

import axios from '../../../api/axios';
const LOGIN_URL = '/auth';

const EMAIL_REGEX =
    /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

function LoginArea() {
    const { setAuth } = useAuth();

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
            const response = await axios.post(LOGIN_URL, JSON.stringify({ email, hashedPassword: pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.role;
            const userName = response?.data?.userName;
            console.log(response.data);
            setAuth({ userName, email, pwd, roles, accessToken });
            setEmail('');
            setPwd('');
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

    return (
        <section>
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
                        <Button> Zaloguj sie </Button>
                        <WrapButton onClick={() => setExpanded(!expanded)}>
                            <BsFillCaretUpFill />
                        </WrapButton>
                    </>
                )}
            </form>
        </section>
    );
}

export default LoginArea;
