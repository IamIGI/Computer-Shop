import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import { WrapButton, Wrapper, BottomRegister, ErrMsg, Instructions } from './RegisterArea.style';
import { BsFillCaretUpFill } from 'react-icons/bs';
import axios from '../../../api/axios';
import useInput from 'hooks/useInput';
import useToggle from 'hooks/useToggle';

const NAME_REGEX = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
    /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const REGISTER_URL = '/register';

function RegisterArea() {
    const [expanded, setExpanded] = useState('false');

    const errRef = useRef();

    const [firstName, resetFirstName, firstNameAttribs] = useInput('firstName', '');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, resetLastName, lastNameAttribs] = useInput('lastName', '');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, resetEmail, emailAttribs] = useInput('email', '');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    const [shopRules, setAgreeToShopRules] = useToggle('ShopRulesRegister', false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setValidFirstName(NAME_REGEX.test(firstName));
    }, [firstName]);

    useEffect(() => {
        setValidLastName(NAME_REGEX.test(lastName));
    }, [lastName]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatchPwd(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = NAME_REGEX.test(firstName);
        const v2 = NAME_REGEX.test(lastName);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PWD_REGEX.test(pwd);
        const v5 = shopRules;

        if (!v1 || !v2 || !v3 || !v4) {
            setErrMsg('Niepoprawne dane');
            console.log(v1, v2, v3, v4);
            return;
        } else if (!v5) {
            setErrMsg('Zaakceptuj regulamin sklepu');
            return;
        }

        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    hashedPassword: pwd,
                    shopRules,
                    emailEnlistments: false,
                    smsEnlistments: false,
                    phoneEnlistments: false,
                    adjustedOffersEnlistments: false,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            console.log(response?.data);

            //clear
            resetFirstName('');
            resetLastName('');
            resetEmail('');
            setPwd('');
            setMatchPwd('');
            setAgreeToShopRules('false');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Brak łączyności z serwerem');
            } else if (err.response?.status === 409) {
                setErrMsg('Email jest już używany');
            } else {
                console.log(err);
                setErrMsg('Nieznany błąd');
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
            <form onSubmit={handleSubmit}>
                {expanded && <Button onClick={() => setExpanded(!expanded)}> Rejestracja </Button>}
                {!expanded && (
                    <section>
                        <div ref={errRef}>
                            {' '}
                            {errMsg && (
                                <>
                                    <ErrMsg aria-live="assertive">{errMsg}</ErrMsg>
                                </>
                            )}
                        </div>
                        <Input
                            style={validFirstName || !firstName ? {} : { border: '1px solid red' }}
                            type="text"
                            id="firstName"
                            placeholder="Imie (wymagane)"
                            autoComplete="off"
                            {...firstNameAttribs}
                            required
                            aria-invalid={validFirstName ? 'false' : 'true'}
                            aria-describedby="firstNameField"
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}
                        />
                        {firstNameFocus && firstName && !validFirstName && <Instructions>Tylko litery</Instructions>}
                        <Input
                            style={validLastName || !lastName ? {} : { border: '1px solid red' }}
                            type="text"
                            id="lastName"
                            placeholder="Nazwisko (wymagane)"
                            autoComplete="off"
                            {...lastNameAttribs}
                            required
                            aria-invalid={validLastName ? 'false' : 'true'}
                            aria-describedby="lastNameField"
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}
                        />
                        {lastNameFocus && lastName && !validLastName && <Instructions>Tylko litery</Instructions>}
                        <Input
                            style={validEmail || !email ? {} : { border: '1px solid red' }}
                            type="text"
                            id="email"
                            placeholder="Email (wymagane)"
                            autoComplete="off"
                            {...emailAttribs}
                            required
                            aria-invalid={validEmail ? 'false' : 'true'}
                            aria-describedby="EmailField"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        {emailFocus && email && !validEmail && <Instructions>Email jest nie poprawny.</Instructions>}
                        <Input
                            style={validPwd || !pwd ? {} : { border: '1px solid red' }}
                            type="password"
                            id="password"
                            placeholder="Haslo (wymagane)"
                            autoComplete="off"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? 'false' : 'true'}
                            aria-describedby="PwdField"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            onKeyUp={checkCapsLock}
                        />
                        {pwdFocus && pwd && !validPwd && (
                            <Instructions>
                                8-24 znaków. <br />
                                Muszą zawierać małe i duże litery, <br />
                                liczby oraz znaki specjalne.
                            </Instructions>
                        )}
                        <Input
                            style={validMatchPwd || !matchPwd ? {} : { border: '1px solid red' }}
                            type="password"
                            id="passwordMatch"
                            placeholder="Powtórz hasło (wymagane)"
                            autoComplete="off"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatchPwd ? 'false' : 'true'}
                            aria-describedby="MatchPwdField"
                            onFocus={() => setMatchPwdFocus(true)}
                            onBlur={() => setMatchPwdFocus(false)}
                            onKeyUp={checkCapsLock}
                        />
                        {matchPwdFocus && !validMatchPwd && <Instructions>Hasła muszą być takie same</Instructions>}
                        {(matchPwdFocus || pwdFocus) && isCapsLockOn && (
                            <Instructions>Caps Lock jest wciśnięty</Instructions>
                        )}
                        <BottomRegister>
                            <Checkbox type="checkbox" onChange={setAgreeToShopRules} checked={shopRules} />
                            <p>Akceptuj regulamin sklepu</p>
                        </BottomRegister>
                        <Button
                            disabled={
                                !validFirstName || !validLastName || !validEmail || !validPwd || !validMatchPwd
                                    ? true
                                    : false
                            }
                        >
                            {' '}
                            Załóż konto!{' '}
                        </Button>
                        <WrapButton onClick={() => setExpanded(!expanded)}>
                            <BsFillCaretUpFill />
                        </WrapButton>
                    </section>
                )}
            </form>
        </Wrapper>
    );
}

export default RegisterArea;
