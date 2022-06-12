import BasketPreview from 'components/organisms/BasketPreview/BasketPreview';
import DeliveryOptions from 'components/organisms/DeliveryOptions/DeliveryOptions';
import OrderForm from 'components/organisms/OderForm/OderForm';
import DeliveryPreview from 'components/organisms/DeliveryPreview/DeliveryPreview';
import PaymentOptions from 'components/organisms/PaymentOptions/PaymentOptions';
import React, { useState } from 'react';
import { Wrapper, Main, Prev, PrevWrapper } from './Basket.styles';
import PaymentPreview from 'components/organisms/PaymentPreview/PaymentPreview';

const initDeliveryCheckboxesOpt = { deliveryMan: false, atTheSalon: false, locker: false };
const initDeliveryCheckboxesPay = { online: false, card: false, cash: false, uponReceipt: false, installment: false };
const initRecipientDetails = {
    name: ``,
    street: '',
    zipCode: '',
    place: '',
    email: '',
    phone: '',
};
const Basket = () => {
    const [deliveryCheckboxesOpt, setDeliveryCheckboxesOpt] = useState(initDeliveryCheckboxesOpt);
    const [deliveryCheckboxesPay, setDeliveryCheckboxesPay] = useState(initDeliveryCheckboxesPay);
    const [orderData, setOrderData] = useState(initRecipientDetails);
    const [priceToPay, setPriceToPay] = useState(0);
    const { street } = orderData;

    return (
        <Wrapper>
            <Main>
                <DeliveryOptions
                    initDeliveryCheckboxesOpt={initDeliveryCheckboxesOpt}
                    deliveryCheckboxesOpt={deliveryCheckboxesOpt}
                    setDeliveryCheckboxesOpt={setDeliveryCheckboxesOpt}
                />
                <PaymentOptions
                    initDeliveryCheckboxesPay={initDeliveryCheckboxesPay}
                    deliveryCheckboxesPay={deliveryCheckboxesPay}
                    setDeliveryCheckboxesPay={setDeliveryCheckboxesPay}
                />
                <OrderForm initRecipientDetails={initRecipientDetails} orderData={orderData} setOrderData={setOrderData} />
            </Main>
            <Prev>
                <PrevWrapper>
                    <BasketPreview setPriceToPay={setPriceToPay} />
                    <DeliveryPreview
                        deliveryCheckboxesPay={deliveryCheckboxesPay}
                        deliveryCheckboxesOpt={deliveryCheckboxesOpt}
                        orderStreet={street}
                    />
                    <PaymentPreview priceToPay={priceToPay} />
                </PrevWrapper>
            </Prev>
        </Wrapper>
    );
};

export default Basket;
