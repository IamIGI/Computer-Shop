import BasketPreview from 'components/organisms/BasketPreview/BasketPreview';
import DeliveryOptions from 'components/organisms/DeliveryOptions/DeliveryOptions';
import OrderForm from 'components/organisms/OderForm/OderForm';
import DeliveryPreview from 'components/organisms/DeliveryPreview/DeliveryPreview';
import PaymentOptions from 'components/organisms/PaymentOptions/PaymentOptions';
import React from 'react';
import { Wrapper, Main, Prev, PrevWrapper } from './Basket.styles';
import PaymentPreview from 'components/organisms/PaymentPreview/PaymentPreview';

const Basket = () => {
    return (
        <Wrapper>
            <Main>
                <DeliveryOptions />
                <PaymentOptions />
                <OrderForm />
            </Main>
            <Prev>
                <PrevWrapper>
                    <BasketPreview />
                    <DeliveryPreview />
                    <PaymentPreview />
                </PrevWrapper>
            </Prev>
        </Wrapper>
    );
};

export default Basket;
