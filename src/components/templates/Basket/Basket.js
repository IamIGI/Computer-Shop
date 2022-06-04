import BasketPreview from 'components/organisms/BasketPreview/BasetPreview';
import DeliveryOptions from 'components/organisms/DeliveryOptions/DeliveryOptions';
import OrderForm from 'components/organisms/OderForm/OderForm';
import PaymentOptions from 'components/organisms/PaymentOptions/PaymentOptions';
import React from 'react';
import { Wrapper, Main, Prev, PrevWrapper } from './Basket.styles';

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
                </PrevWrapper>
            </Prev>
        </Wrapper>
    );
};

export default Basket;
