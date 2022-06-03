import React from 'react';
import { ButtonWrapper, Description, Section, Title, Wrapper, SectionTitle } from './AccountDangerSection.style';
import { Button } from 'components/atoms/Button/Button';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { FiAlertCircle } from 'react-icons/fi';

const AccountDangerSection = () => {
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
                        <Button>Wyloguj się wszędzie</Button>
                    </ButtonWrapper>
                </Section>
                <Section>
                    <Title>
                        <h3>Usuwanie konta</h3>
                    </Title>
                    <Description>
                        <p>
                            DJeśli klikniesz w ten przycisk, usuniesz swoje konto w naszym sklepie. Upewnij się, że na
                            pewno chcesz to zrobić – Twojego konta nie będziemy mogli przywrócić.
                        </p>
                        <p>
                            Jeśli chcesz zachować swoje konto, ale nie chcesz dostawać od nas wiadomości – odznacz zgody
                            w ustawieniach powiadomień. Usuń konto
                        </p>
                    </Description>
                    <ButtonWrapper>
                        <Button>Usuń konto</Button>
                    </ButtonWrapper>
                </Section>
            </Wrapper>
        </>
    );
};

export default AccountDangerSection;
