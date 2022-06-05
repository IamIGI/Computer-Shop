import React from 'react';
import { FinishSection, List, ListSection, LocalButton, Name, Price, Section, Wrapper } from './PaymentPreview.style';

const PaymentPreview = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <List>
                        <li>
                            <ListSection>
                                <Name>Wartość koszyka</Name>
                                <Price>5 799,00zł</Price>
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
                                <Price>5 808,99zł</Price>
                            </ListSection>
                        </li>
                    </List>
                </Section>
                <FinishSection>
                    <LocalButton>Zakończ</LocalButton>
                </FinishSection>
            </Wrapper>
        </>
    );
};

export default PaymentPreview;
