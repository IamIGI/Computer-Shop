import React from 'react';
import {
    FinishSection,
    List,
    ListSection,
    LocalButton,
    Name,
    Price,
    Section,
    Wrapper,
    NoUserAlert,
    AlertIcon,
    AlertDescription,
} from './PaymentPreview.style';
import { FiAlertCircle } from 'react-icons/fi';

const PaymentPreview = ({ priceToPay, finishHandler, priceForDelivery, isUserLogIn }) => {
    return (
        <Wrapper>
            <Section>
                <List>
                    <li>
                        <ListSection>
                            <Name>Wartość koszyka:</Name>
                            <Price>{priceToPay} zł</Price>
                        </ListSection>
                    </li>
                    <li>
                        <ListSection>
                            <Name>Dostawa:</Name>
                            <Price>{priceForDelivery} zł</Price>
                        </ListSection>
                    </li>
                    <li>
                        <ListSection>
                            <Name>Płatność:</Name>
                            <Price>0 zł</Price>
                        </ListSection>
                    </li>
                    <li>
                        <ListSection>
                            <Name>Podsumowanie: </Name>
                            <Price>{(priceToPay + priceForDelivery).toFixed(2)} zł</Price>
                        </ListSection>
                    </li>
                </List>
            </Section>
            <FinishSection>
                {!isUserLogIn ? (
                    <NoUserAlert>
                        <AlertIcon>
                            <FiAlertCircle />
                        </AlertIcon>
                        <AlertDescription>
                            Będąc nie zalogowanym twoje zamówienie nie zostanie przypisane do twojego konta
                        </AlertDescription>
                    </NoUserAlert>
                ) : (
                    <></>
                )}
                <LocalButton onClick={() => finishHandler()}>Zakończ</LocalButton>
            </FinishSection>
        </Wrapper>
    );
};

export default PaymentPreview;
