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
import useAuth from 'hooks/useAuth';
import PromoSectionComponent from 'components/molecules/PromoSection/PromoSection';
import { useSelector } from 'react-redux';
import { getPriceToPay } from 'features/basket/basketSlice';
import formatPrices from 'helpers/formatPrices';

const PaymentPreview = ({ orderReady, finishHandler, priceForDelivery, isUserLogIn }) => {
    const priceToPay = useSelector(getPriceToPay);

    const { auth } = useAuth();
    return (
        <Wrapper>
            <Section>
                {Boolean(auth.id) && <PromoSectionComponent />}

                <List>
                    <li>
                        <ListSection>
                            <Name>Wartość koszyka:</Name>
                            <Price>{formatPrices(priceToPay.toFixed(2))} zł</Price>
                        </ListSection>
                    </li>
                    <li>
                        <ListSection>
                            <Name>Dostawa:</Name>
                            <Price>{formatPrices(priceForDelivery)} zł</Price>
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
                            <Name>Podsumowanie:</Name>
                            <Price>{formatPrices((priceToPay + priceForDelivery).toFixed(2))} zł</Price>
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
                <LocalButton disabled={!orderReady} onClick={() => finishHandler()}>
                    Zakończ
                </LocalButton>
            </FinishSection>
        </Wrapper>
    );
};

export default PaymentPreview;
