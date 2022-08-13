import React from 'react';
import { FinishSection, List, ListSection, LocalButton, Name, Price, Section, Wrapper } from './PaymentPreview.style';

const PaymentPreview = ({ priceToPay, setFinishOrder }) => {
    const finishHandler = () => {
        setFinishOrder(() => {
            return true;
        });
    };

    return (
        <>
            <Wrapper>
                <Section>
                    <List>
                        <li>
                            <ListSection>
                                <Name>Wartość koszyka</Name>
                                <Price>{priceToPay},00zł</Price>
                            </ListSection>
                        </li>
                        <li>
                            <ListSection>
                                <Name>Dostawa</Name>
                                <Price>9,99zł</Price>
                            </ListSection>
                        </li>
                        <li>
                            <ListSection>
                                <Name>Płatność</Name>
                                <Price>0zł</Price>
                            </ListSection>
                        </li>
                        <li>
                            <ListSection>
                                <Name>Podsumowanie </Name>
                                <Price>{priceToPay + 9.99} zł</Price>
                            </ListSection>
                        </li>
                    </List>
                </Section>
                <FinishSection>
                    <LocalButton onClick={finishHandler}>Zakończ</LocalButton>
                </FinishSection>
            </Wrapper>
        </>
    );
};

export default PaymentPreview;
