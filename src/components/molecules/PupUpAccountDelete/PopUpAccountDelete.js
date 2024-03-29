import { useState } from 'react';
import { ButtonLocal, InputLocal, Title, Wrapper, FormSection, OuterFormWrapper } from './PopUpAccountDelete.style';
import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import toast from 'react-hot-toast';
import { ACTIONS, INITIAL_STATE, popUpAccountDeleteReducer } from './PopUpAccountDelete.reducer';
import { useReducer } from 'react';

let viewedName = '';

const PopUpAccountDelete = ({ name, signOut }) => {
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuth();

    const [state, dispatch] = useReducer(popUpAccountDeleteReducer, INITIAL_STATE);
    const [isMatchPwd, setIsMatchPwd] = useState(true);

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

    const handleCapsLock = (e) => {
        dispatch({
            type: ACTIONS.CAPS_LOCK,
            payload: e,
        });
    };

    const notify = () =>
        toast.success('Konto zostało usunięte', {
            icon: '🔨',
            duration: 2000,
        });

    switch (name) {
        case 'DeleteAccount':
            viewedName = 'Usuwanie konta';
            break;
        default:
            console.log('server error');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (state.input.pwd1 !== state.input.pwd2) {
            setIsMatchPwd(false);
            return;
        }

        const data = {
            _id: auth.id,
            password: state.input.pwd1,
        };

        try {
            const response = await axiosPrivate.delete('user/delete', { headers: {}, data });
            console.log(response);
            signOut();
            notify();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Wrapper>
                <Title>
                    <h3>{viewedName}</h3>
                </Title>
                <OuterFormWrapper>
                    <form onSubmit={handleSubmit}>
                        <FormSection>
                            <div>
                                <InputLocal
                                    name="pwd1"
                                    placeholder="hasło"
                                    type="password"
                                    value={state.input.pwd1}
                                    onChange={(e) => handleInput(e)}
                                    onFocus={(e) => handleFocus(e, true)}
                                    onBlur={(e) => handleFocus(e, false)}
                                    onKeyUp={(e) => handleCapsLock(e)}
                                />
                            </div>
                            {state.focus.pwd1 && state.isCapsLockOn ? <p>Caps Lock jest wciśnięty</p> : <></>}
                            <div>
                                <InputLocal
                                    name="pwd2"
                                    placeholder="Podaj hasło ponownie"
                                    type="password"
                                    value={state.input.pwd2}
                                    onChange={(e) => handleInput(e)}
                                    onFocus={(e) => handleFocus(e, true)}
                                    onBlur={(e) => handleFocus(e, false)}
                                    onKeyUp={(e) => handleCapsLock(e)}
                                />
                            </div>
                            {state.focus.pwd2 && state.isCapsLockOn ? <p>Caps Lock jest wciśnięty</p> : <></>}
                            {!isMatchPwd ? <p>Hasła muszą być takie same</p> : <></>}
                            <div>
                                <ButtonLocal type="submit">Usuń</ButtonLocal>
                            </div>
                        </FormSection>
                    </form>
                </OuterFormWrapper>
            </Wrapper>
        </>
    );
};

export default PopUpAccountDelete;
