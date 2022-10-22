import { useState } from 'react';
import useLogout from 'hooks/useLogout';
import useBasket from 'hooks/useBasket';
import { ButtonWrapper, Description, Section, Title, Wrapper, SectionTitle } from './AccountDangerSection.style';
import { Button } from 'components/atoms/Button/Button';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { FiAlertCircle } from 'react-icons/fi';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAccountDelete from '../PupUpAccountDelete/PopUpAccountDelete';
import toast from 'react-hot-toast';

const AccountDangerSection = () => {
    const logout = useLogout();
    const { setBasketItems } = useBasket();
    const [isOpen, setIsOpen] = useState([false, { DataName: '', value: '' }]);
    const notify = () =>
        toast.success('Wylogowano', {
            icon: '🔐',
            duration: 2000,
        });

    const signOut = async () => {
        notify();
        setBasketItems([]);
        await logout();
    };

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'UWAGA!'} icon={<FiAlertCircle />} />
            </SectionTitle>
            <Wrapper>
                <Section>
                    <Title>
                        <h3>Wylogowanie ze wszystkich urządzeń</h3>
                    </Title>
                    <Description>
                        <p>
                            Dzięki tej opcji możesz wylogować się z naszej strony i aplikacji na wszystkich
                            przeglądarkach i urządzeniach jednocześnie – również na tym, którego teraz używasz.
                        </p>
                    </Description>
                    <ButtonWrapper>
                        <Button onClick={signOut} to="">
                            Wyloguj się wszędzie
                        </Button>
                    </ButtonWrapper>
                </Section>
                <Section>
                    <Title>
                        <h3>Usuwanie konta</h3>
                    </Title>
                    <Description>
                        <p>
                            Jeśli klikniesz w ten przycisk, usuniesz swoje konto w naszym sklepie. Upewnij się, że na
                            pewno chcesz to zrobić – Twojego konta nie będziemy mogli przywrócić.
                        </p>
                        <p>
                            Jeśli chcesz zachować swoje konto, ale nie chcesz dostawać od nas wiadomości – odznacz zgody
                            w ustawieniach powiadomień.
                        </p>
                    </Description>
                    <ButtonWrapper>
                        <Button onClick={() => setIsOpen([true, { DataName: 'DeleteAccount', value: 'password' }])}>
                            Usuń konto
                        </Button>
                    </ButtonWrapper>
                </Section>
            </Wrapper>
            <Modal position={[40, -80]} width={300} open={isOpen} onClose={() => setIsOpen([false, {}])}>
                <PopUpAccountDelete signOut={signOut} name={isOpen[1].DataName} />
            </Modal>
        </>
    );
};

export default AccountDangerSection;
