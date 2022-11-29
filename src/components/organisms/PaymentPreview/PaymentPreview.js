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
    PromoInput,
    PromoSection,
    PromoButton,
    CustomPromoForm,
    PromoDescription,
    PromoCodeAlert,
    PromoCodeAlertSection,
    PromoCodeIcon,
} from './PaymentPreview.style';
import { FiAlertCircle } from 'react-icons/fi';
import { TbShoppingCartDiscount } from 'react-icons/tb';

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
    return (
        <Wrapper>
            <Section>
                <PromoSection>
                    <PromoDescription>Posiadasz kod promocyjny?</PromoDescription>
                    <CustomPromoForm onSubmit={handlePromoCodeSubmit}>
                        <PromoInput
                            placeholder="..."
                            type="text"
                            id="promoCode"
                            value={promoCode}
                            onChange={(e) => handlePromoCode(e.target.value)}
                            disabled={promoCodeInputDisabled}
                        />
                        <PromoButton>Aktywuj</PromoButton>
                    </CustomPromoForm>
                    {promoCodeAlert !== '' && (
                        <PromoCodeAlertSection>
                            <PromoCodeIcon>
                                <TbShoppingCartDiscount />
                            </PromoCodeIcon>
                            <PromoCodeAlert>{promoCodeAlert}</PromoCodeAlert>
                        </PromoCodeAlertSection>
                    )}
                </PromoSection>

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
