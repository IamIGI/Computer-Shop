import { useEffect, useReducer } from 'react';
import { ButtonLocal, InputLocal, Title, Wrapper, FormSection, OuterFormWrapper } from './PopUpAccountSettiings.style';
import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { popUpAccountSettingsReducer, ACTIONS, INITIAL_STATE } from './PopUpAccountSettings.reducer';
import toast from 'react-hot-toast';

const PopUpAccountSettings = ({ name, value, onClose, handleRefresh }) => {
    const { auth, setAuth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const [state, dispatch] = useReducer(popUpAccountSettingsReducer, INITIAL_STATE);

    const notify = () =>
        toast.success('Dane konta zmienione', {
            duration: 2000,
        });

    const handleInput = (e) => {
        dispatch({
            type: ACTIONS.INPUT,
            payload: { name: e.target.name, value: e.target.value },
        });
    };

    const handleFocus = (e, value) => {
        dispatch({
            type: ACTIONS.FOCUS,
            payload: { name: e.target.name, value },
        });
    };
    /** In edited field we can have name type like: email, password, name */
    const handleValidation = (name, value) => {
        dispatch({
            type: ACTIONS.VALID_EDITED_FIELD,
            payload: { name, value },
        });
    };

    const handleCapsLock = (e) => {
        dispatch({
            type: ACTIONS.CAPS_LOCK,
            payload: e,
        });
    };

    const handleIsMatchPassword = (pwd1, pwd2) => {
        dispatch({
            type: ACTIONS.IS_MATCH,
            payload: { pwd1, pwd2 },
        });
    };

    useEffect(() => {
        handleValidation(name, state.input.editedField);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.input.editedField]);

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

        if (name === 'hashedPassword') {
            handleIsMatchPassword(state.input.editedField, state.input.repeatPassword);
            return;
        }

        const data = {
            _id: auth.id,
            fieldName: name,
            edited: state.input.editedField,
            password: state.input.password,
        };

        try {
            const response = await axiosPrivate.put('user/accountData', data);
            console.log(response);
            if (name === 'firstName') {
                setAuth((prevValue) => {
                    return {
                        ...prevValue,
                        userName: state.input.editedField,
                    };
                });
            }

            handleRefresh();
            onClose();
            notify();
        } catch (err) {
            console.log(err);
            // if (err.response.status === 406) setBadPassword(true);
            if (err.response.status === 406) dispatch({ type: ACTIONS.BAD_PASSWORD, payload: true });
        }
    };

    return (
        <Wrapper>
            <Title>
                <h3>
                    <span> Edytuj:</span> {viewedName}
                </h3>
            </Title>
            <OuterFormWrapper>
                <form onSubmit={handleSubmit}>
                    <FormSection>
                        <InputLocal
                            name="editedField"
                            type={name === 'hashedPassword' && 'password'}
                            placeholder={name === 'hashedPassword' ? 'Nowe hasło' : `Zmieniasz: ${value}`}
                            value={state.input.editedField}
                            onChange={(e) => handleInput(e)}
                            onFocus={(e) => handleFocus(e, true)}
                            onBlur={(e) => handleFocus(e, false)}
                            onKeyUp={name === 'hashedPassword' ? (e) => handleCapsLock(e) : undefined}
                        />

                        {state.focus.editedField && state.isCapsLock && name === 'hashedPassword' ? (
                            <p>Caps Lock jest wciśnięty</p>
                        ) : (
                            <></>
                        )}
                        {state.focus.editedField &&
                            state.input.editedField &&
                            !state.validEditedField &&
                            (name === 'email' ? (
                                <p>Email jest nie poprawny.</p>
                            ) : name === 'hashedPassword' ? (
                                <p>
                                    8-24 znaków. <br />
                                    Muszą zawierać małe i duże litery, <br />
                                    liczby oraz znaki specjalne.
                                </p>
                            ) : name === 'firstName' || name === 'lastName' ? (
                                <p>Tylko litery</p>
                            ) : (
                                <></>
                            ))}
                        {name === 'hashedPassword' && (
                            <InputLocal
                                name="repeat_password"
                                type="password"
                                placeholder={`Powtórz hasło`}
                                value={state.input.repeatPassword}
                                onFocus={(e) => handleFocus(e, true)}
                                onBlur={(e) => handleFocus(e, false)}
                                onChange={(e) => handleInput(e)}
                                onKeyUp={(e) => handleCapsLock(e)}
                            />
                        )}
                        {state.focus.repeat_password && state.isCapsLock && name === 'hashedPassword' ? (
                            <p>Caps Lock jest wciśnięty</p>
                        ) : (
                            <></>
                        )}

                        <InputLocal
                            name="password"
                            placeholder="Podaj hasło aby zatwierdzić"
                            type="password"
                            value={state.input.pwd}
                            onChange={(e) => handleInput(e)}
                            onFocus={(e) => handleFocus(e, true)}
                            onBlur={(e) => handleFocus(e, false)}
                            onKeyUp={(e) => handleCapsLock(e)}
                        />

                        {state.focus.password && state.isCapsLock ? <p>Caps Lock jest wciśnięty</p> : <></>}

                        {state.badPassword && <p>Złe hasło</p>}
                        {!state.isMatch && <p>Hasła muszą być takie same</p>}

                        <ButtonLocal type="submit">Zapisz</ButtonLocal>
                    </FormSection>
                </form>
            </OuterFormWrapper>
        </Wrapper>
    );
};

export default PopUpAccountSettings;
