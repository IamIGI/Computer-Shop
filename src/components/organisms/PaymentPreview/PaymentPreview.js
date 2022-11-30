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

const PaymentPreview = ({
    priceToPay,
    finishHandler,
    priceForDelivery,
    isUserLogIn,
    handlePromoCode,
    promoCode,
    handlePromoCodeSubmit,
    promoCodeInputDisabled,
    promoCodeAlert,
}) => {
    const { auth } = useAuth();
    return (
        <Wrapper>
            <Section>
                {Boolean(auth.id) && (
                    <PromoSectionComponent
                        handlePromoCodeSubmit={handlePromoCodeSubmit}
                        promoCode={promoCode}
                        handlePromoCode={handlePromoCode}
                        promoCodeInputDisabled={promoCodeInputDisabled}
                        promoCodeAlert={promoCodeAlert}
                    />
                )}

                <List>
                    <li>
                        <ListSection>
                            <Name>Wartość koszyka:</Name>
                            <Price>{priceToPay.toFixed(2)} zł</Price>
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
                            <Name>Podsumowanie:</Name>
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
