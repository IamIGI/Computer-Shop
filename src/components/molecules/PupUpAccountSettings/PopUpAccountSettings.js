import { useState, useEffect } from 'react';
import { ButtonLocal, InputLocal, Title, Wrapper, FormSection } from './PopUpAccountSettiings.style';
import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { testEmailRegex, testNameRegex, testPasswordRegex } from 'data/Regex';
import toast from 'react-hot-toast';

const PopUpAccountSettings = ({ name, value, onClose, handleRefresh }) => {
    const { auth, setAuth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const [pwd, setPwd] = useState('');
    const [editedField, setEditedField] = useState('');
    const [validateEditedField, setValidateEditedField] = useState(false);
    const [fieldFocus, setFieldFocus] = useState(false);
    const [pwdFieldFocus, setPwdFieldFocus] = useState(false);
    const [matchFiledFocus, setMatchFieldFocus] = useState(false);
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    const [badPassword, setBadPassword] = useState(false);
    const [isMatch, setIsMatch] = useState(true);
    const [repeatPassword, setRepeatPassword] = useState('');

    const notify = () =>
        toast.success('Dane konta zmienione', {
            duration: 2000,
        });

    const checkCapsLock = (event) => {
        if (event.getModifierState('CapsLock')) {
            setIsCapsLockOn(true);
        } else {
            setIsCapsLockOn(false);
        }
    };

    useEffect(() => {
        if (name === 'email') {
            setValidateEditedField(testEmailRegex(editedField));
            return;
        } else if (name === 'hashedPassword') {
            setValidateEditedField(testPasswordRegex(editedField));
            return;
        } else if (name === 'firstName' || name === 'lastName') {
            setValidateEditedField(testNameRegex(editedField));
            return;
        } else {
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editedField]);

    let viewedName = '';
    switch (name) {
        case 'firstName':
            viewedName = 'Imie';
            break;

        case 'lastName':
            viewedName = 'Nazwisko';
            break;

        case 'email':
            viewedName = 'E-mail';
            break;

        case 'hashedPassword':
            viewedName = 'Hasło';
            break;

        default:
            break;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            _id: auth.id,
            fieldName: name,
            edited: editedField,
            password: pwd,
        };

        if (name === 'hashedPassword' && editedField !== repeatPassword) {
            setIsMatch(false);
            return;
        }

        try {
            const response = await axiosPrivate.put('user/accountData', data);
            console.log(response);
            if (name === 'firstName') {
                setAuth((prevValue) => {
                    return {
                        ...prevValue,
                        userName: editedField,
                    };
                });
            }

            handleRefresh();
            onClose();
            notify();
        } catch (err) {
            console.log(err);
            if (err.response.status === 406) setBadPassword(true);
        }
    };

    return (
        <>
            <Wrapper>
                <Title>
                    <h3>
                        <span> Edytuj:</span> {viewedName}
                    </h3>
                </Title>
                <FormSection>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <InputLocal
                                name="name"
                                type={name === 'hashedPassword' && 'password'}
                                placeholder={`Zmieniasz: ${value}`}
                                value={editedField}
                                onChange={(e) => setEditedField(e.target.value)}
                                onFocus={() => setFieldFocus(true)}
                                onBlur={() => setFieldFocus(false)}
                                onKeyUp={name === 'hashedPassword' ? checkCapsLock : undefined}
                            />
                        </div>
                        {fieldFocus && isCapsLockOn && name === 'hashedPassword' ? (
                            <p>Caps Lock jest wciśnięty</p>
                        ) : (
                            <></>
                        )}
                        {fieldFocus &&
                            editedField &&
                            !validateEditedField &&
                            (name === 'email' ? (
                                <p>Email jest nie poprawny.</p>
                            ) : name === 'hashedPassword' ? (
                                <>
                                    <p>
                                        8-24 znaków. <br />
                                        Muszą zawierać małe i duże litery, <br />
                                        liczby oraz znaki specjalne.
                                    </p>
                                </>
                            ) : name === 'firstName' || name === 'lastName' ? (
                                <p>Tylko litery</p>
                            ) : (
                                <></>
                            ))}
                        {name === 'hashedPassword' && (
                            <div>
                                <InputLocal
                                    name="repeat_password"
                                    type="password"
                                    placeholder={`Powtórz hasło`}
                                    value={repeatPassword}
                                    onFocus={() => setMatchFieldFocus(true)}
                                    onBlur={() => setMatchFieldFocus(false)}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                    onKeyUp={checkCapsLock}
                                />
                            </div>
                        )}
                        {matchFiledFocus && isCapsLockOn && name === 'hashedPassword' ? (
                            <p>Caps Lock jest wciśnięty</p>
                        ) : (
                            <></>
                        )}

                        <div>
                            <InputLocal
                                name="password"
                                placeholder="Podaj hasło aby zatwierdzić"
                                type="password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                onFocus={() => setPwdFieldFocus(true)}
                                onBlur={() => setPwdFieldFocus(false)}
                                onKeyUp={checkCapsLock}
                            />
                        </div>
                        {pwdFieldFocus && isCapsLockOn ? <p>Caps Lock jest wciśnięty</p> : <></>}

                        {badPassword ? <p>Złe hasło</p> : <></>}
                        {!isMatch ? <p>Hasła muszą być takie same</p> : <></>}
                        <div>
                            <ButtonLocal type="submit">Zapisz</ButtonLocal>
                        </div>
                    </form>
                </FormSection>
            </Wrapper>
        </>
    );
};

export default PopUpAccountSettings;
