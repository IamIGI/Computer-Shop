import { useState } from 'react';
import { ButtonLocal, InputLocal, Title, Wrapper, FormSection } from './PopUpAccountDelete.style';
import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import toast from 'react-hot-toast';

let viewedName = '';

const PopUpAccountDelete = ({ name, signOut }) => {
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuth();
    const [pwd, setPwd] = useState('');
    const [pwdFieldFocus, setPwdFieldFocus] = useState(false);
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);
    const [isMatch, setIsMatch] = useState(true);
    const [matchFiledFocus, setMatchFieldFocus] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState('');

    const notify = () =>
        toast.success('Konto zostało usunięte', {
            icon: '🔨',
            duration: 2000,
        });

    const checkCapsLock = (event) => {
        if (event.getModifierState('CapsLock')) {
            setIsCapsLockOn(true);
        } else {
            setIsCapsLockOn(false);
        }
    };

    switch (name) {
        case 'DeleteAccount':
            viewedName = 'Usuwanie konta';
            break;
        default:
            console.log('server error');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            _id: auth.id,
            password: pwd,
        };

        if (pwd !== repeatPassword) {
            setIsMatch(false);
            return;
        }

        try {
            const response = await axiosPrivate.post('user/delete', data);
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
                <FormSection>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <InputLocal
                                name="name"
                                placeholder="hasło"
                                type="password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                onFocus={() => setPwdFieldFocus(true)}
                                onBlur={() => setPwdFieldFocus(false)}
                                onKeyUp={checkCapsLock}
                            />
                        </div>
                        {pwdFieldFocus && isCapsLockOn ? <p>Caps Lock jest wciśnięty</p> : <></>}
                        <div>
                            <InputLocal
                                name="password"
                                placeholder="Podaj hasło ponownie"
                                type="password"
                                value={repeatPassword}
                                onFocus={() => setMatchFieldFocus(true)}
                                onBlur={() => setMatchFieldFocus(false)}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                onKeyUp={checkCapsLock}
                            />
                        </div>
                        {matchFiledFocus && isCapsLockOn ? <p>Caps Lock jest wciśnięty</p> : <></>}
                        {!isMatch ? <p>Hasła muszą być takie same</p> : <></>}
                        <div>
                            <ButtonLocal type="submit">Usuń</ButtonLocal>
                        </div>
                    </form>
                </FormSection>
            </Wrapper>
        </>
    );
};

export default PopUpAccountDelete;
