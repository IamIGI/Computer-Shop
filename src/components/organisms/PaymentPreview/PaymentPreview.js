import React from 'react';
import { FinishSection, List, ListSection, LocalButton, Name, Price, Section, Wrapper } from './PaymentPreview.style';

const PaymentPreview = ({ priceToPay, finishHandler, priceForDelivery }) => {
    return (
        <>
            <Wrapper>
                <Section>
                    <List>
                        <li>
                            <ListSection>
                                <Name>Wartość koszyka</Name>
                                <Price>{priceToPay},00 zł</Price>
                            </ListSection>
                        </li>
                        <li>
                            <ListSection>
                                <Name>Dostawa</Name>
                                <Price>{priceForDelivery} zł</Price>
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
                                <Price>{priceToPay + priceForDelivery} zł</Price>
                            </ListSection>
                        </li>
                    </List>
                </Section>
                <FinishSection>
                    <LocalButton onClick={() => finishHandler()}>Zakończ</LocalButton>
                </FinishSection>
            </Wrapper>
        </>
    );
};

export default PaymentPreview;
