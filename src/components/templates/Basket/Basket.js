import BasketPreview from 'components/organisms/BasketPreview/BasketPreview';
import DeliveryOptions from 'components/organisms/DeliveryOptions/DeliveryOptions';
import OrderForm from 'components/organisms/OderForm/OderForm';
import DeliveryPreview from 'components/organisms/DeliveryPreview/DeliveryPreview';
import PaymentOptions from 'components/organisms/PaymentOptions/PaymentOptions';
import React, { useEffect, useState } from 'react';
import { Wrapper, Main, Prev, PrevWrapper } from './Basket.styles';
import PaymentPreview from 'components/organisms/PaymentPreview/PaymentPreview';
import axios from 'axios';

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
let basketInit = null;

const baseURL = `http://localhost:5000/order`;

const Basket = () => {
    const [deliveryCheckboxesOpt, setDeliveryCheckboxesOpt] = useState(initDeliveryCheckboxesOpt);
    const [deliveryCheckboxesPay, setDeliveryCheckboxesPay] = useState(initDeliveryCheckboxesPay);
    const [orderData, setOrderData] = useState(initRecipientDetails);
    const [priceToPay, setPriceToPay] = useState(0);
    const { street } = orderData;
    const [theProducts, setProducts] = useState([]);
    const [productsInBasket, setProductsInBasket] = useState(null);
    const [orderDocument, setOrderDocument] = useState(null);
    const [finishOrder, setFinishOrder] = useState(false);

    if (JSON.parse(localStorage.getItem('productsInBasket')) !== null) {
        basketInit = JSON.parse(localStorage.getItem('productsInBasket')).products;
    }
    const [basket, setBasket] = useState(basketInit);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
        //make orderDocument
        //temp variables
        let tempOpt = '';
        let tempPay = '';
        let orderDocument = '';
        let orderTemplateDocument = {};
        //logic---------------------------
        Object.values(deliveryCheckboxesOpt).map((x, index) => {
            if (x === true) {
                tempOpt = Object.keys(deliveryCheckboxesOpt)[index];
            }
        });

        Object.values(deliveryCheckboxesPay).map((x, index) => {
            if (x === true) {
                tempPay = Object.keys(deliveryCheckboxesPay)[index];
            }
        });

        const orderCode = getRandomInt(0, 1000000);

        orderTemplateDocument = {
            orderCode: orderCode,
            products: productsInBasket,
            transactionInfo: {
                deliveryMethod: tempOpt,
                paymentMethod: tempPay,
                price: priceToPay,
                recipientDetails: orderData,
            },
        };

        //check is it document ready to send

        const { transactionInfo } = orderTemplateDocument;
        const { deliveryMethod, paymentMethod, price, recipientDetails } = transactionInfo;
        const { email } = recipientDetails;

        //main statement
        if (price !== 0 && deliveryMethod !== '' && paymentMethod !== '' && email !== '') {
            if (finishOrder === true) {
                axios
                    .post(baseURL, {
                        orderTemplateDocument,
                    })
                    .then(({ data }) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));

                // let userExists = JSON.parse(localStorage.getItem('user'));
                // if (userExists !== null) {
                //     console.log(userExists.userLogged);
                // }

                //clearData

                localStorage.removeItem('productsInBasket');
                setBasket(null);
                setProducts([]);
                setDeliveryCheckboxesOpt(initDeliveryCheckboxesOpt);
                setDeliveryCheckboxesPay(initDeliveryCheckboxesPay);
                setOrderData(initRecipientDetails);

                setFinishOrder(false);
            }
        } else {
            setFinishOrder(false);
        }
    }, [deliveryCheckboxesOpt, deliveryCheckboxesPay, orderData, priceToPay, productsInBasket, finishOrder]);

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
                    <BasketPreview
                        setPriceToPay={setPriceToPay}
                        setProductsInBasket={setProductsInBasket}
                        theProducts={theProducts}
                        setProducts={setProducts}
                        basket={basket}
                        setBasket={setBasket}
                    />
                    <DeliveryPreview
                        deliveryCheckboxesPay={deliveryCheckboxesPay}
                        deliveryCheckboxesOpt={deliveryCheckboxesOpt}
                        orderStreet={street}
                    />
                    <PaymentPreview priceToPay={priceToPay} setFinishOrder={setFinishOrder} />
                </PrevWrapper>
            </Prev>
        </Wrapper>
    );
};

export default Basket;
