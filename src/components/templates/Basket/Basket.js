import BasketPreview from 'components/organisms/BasketPreview/BasketPreview';
import DeliveryOptions from 'components/organisms/DeliveryOptions/DeliveryOptions';
import DeliveryPreview from 'components/organisms/DeliveryPreview/DeliveryPreview';
import PaymentOptions from 'components/organisms/PaymentOptions/PaymentOptions';
import React, { useEffect, useState } from 'react';
import { Wrapper, Main, Prev, PrevWrapper } from './Basket.styles';
import PaymentPreview from 'components/organisms/PaymentPreview/PaymentPreview';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import useAuth from '../../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import useLogout from 'hooks/useLogout';
import useMultiCheckboxMemory from 'hooks/useMultiCheckboxMemory';
import { Prices } from 'data/Prices';
import useBasket from 'hooks/useBasket';
import Modal from 'components/atoms/Modal/Modal';
import BoughtPopUp from 'components/molecules/BoughtPopUp/BoughtPopUp';
import RecipientDetails from 'components/organisms/RecipientDetails/RecipientDetails';

const initDeliveryCheckboxesOpt = { deliveryMan: false, atTheSalon: false, locker: false };
const initDeliveryCheckboxesPay = { online: false, card: false, cash: false, uponReceipt: false, installment: false };
const initRecipientDetails = {
    name: ``,
    street: '',
    zipCode: '',
    place: '',
    email: '',
    phone: '',
    comment: '',
};
let basketInit = null;

const Basket = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = useLogout();

    const { setBasketItems } = useBasket();
    const { auth } = useAuth();
    // const [deliveryCheckboxesOpt, setDeliveryCheckboxesOpt] = useState(initDeliveryCheckboxesOpt);
    const [deliveryCheckboxesOpt, setDeliveryCheckboxesOpt] = useMultiCheckboxMemory(
        'deliveryMethod',
        initDeliveryCheckboxesOpt
    );
    const [deliveryCheckboxesPay, setDeliveryCheckboxesPay] = useMultiCheckboxMemory(
        'paymentMethod',
        initDeliveryCheckboxesPay
    );
    const [orderData, setOrderData] = useMultiCheckboxMemory('orderForm', initRecipientDetails);
    const [priceToPay, setPriceToPay] = useState(0);
    const { street } = orderData;
    const [theProducts, setProducts] = useState([]);
    const [productsInBasket, setProductsInBasket] = useState(null);
    const [finishOrder, setFinishOrder] = useState(false);
    const [priceForDelivery, setPriceForDelivery] = useState();
    const [isOpen, setIsOpen] = useState([false]);
    const [orderId, setOrderId] = useState('');

    const clearLocalStorage = () => {
        localStorage.removeItem('productsInBasket');
        localStorage.removeItem('basketItems');
        setBasketItems([]);
        setIsOpen([false]);
    };

    const handleOrderData = (name, street, zipCode, place, email, phone, comment) => {
        setOrderData({
            name,
            street,
            zipCode,
            place,
            email,
            phone,
            comment,
        });
    };

    const finishHandler = () => {
        setFinishOrder(() => {
            return true;
        });
    };

    if (JSON.parse(localStorage.getItem('productsInBasket')) !== null) {
        basketInit = JSON.parse(localStorage.getItem('productsInBasket')).products;
    } else {
        basketInit = null;
    }

    useEffect(() => {
        let isMounted = true;
        //make orderDocument
        //temp variables
        let tempOpt = '';
        let tempPay = '';
        let orderTemplateDocument = {};
        //logic---------------------------
        Object.values(deliveryCheckboxesOpt).map((x, index) => {
            if (x) {
                tempOpt = Object.keys(deliveryCheckboxesOpt)[index];
            }
        });

        Object.values(deliveryCheckboxesPay).map((x, index) => {
            if (x) {
                tempPay = Object.keys(deliveryCheckboxesPay)[index];
            }
        });

        switch (tempOpt) {
            case 'deliveryMan':
                setPriceForDelivery(Prices.deliveryMan);
                break;
            case 'atTheSalon':
                setPriceForDelivery(Prices.atTheSalon);
                break;
            case 'locker':
                setPriceForDelivery(Prices.locker);
                break;

            default:
                setPriceForDelivery(0.0);
                break;
        }

        const finalPrice = priceToPay + priceForDelivery;
        orderTemplateDocument = {
            status: 1, //all orders have to start from "In realization" status
            products: productsInBasket,
            transactionInfo: {
                deliveryMethod: tempOpt,
                paymentMethod: tempPay,
                price: finalPrice,
                recipientDetails: orderData,
            },
            user: auth.id,
        };

        const { transactionInfo } = orderTemplateDocument;
        const { deliveryMethod, paymentMethod, price, recipientDetails } = transactionInfo;
        const { email } = recipientDetails;

        //main statement
        if (price !== 0 && deliveryMethod !== '' && paymentMethod !== '' && email !== '') {
            if (finishOrder === true) {
                const sendUserOrder = async () => {
                    try {
                        const response = await axiosPrivate.post(`order/make`, orderTemplateDocument);
                        setOrderId(response.data.OrderId);
                    } catch (err) {
                        console.log(err);
                        await logout();
                        console.log(auth);
                        navigate('/', { state: { from: location }, replace: true });
                    }
                };
                isMounted && sendUserOrder();
                //clearData

                setProducts([]);
                setDeliveryCheckboxesOpt(initDeliveryCheckboxesOpt);
                setDeliveryCheckboxesPay(initDeliveryCheckboxesPay);
                setOrderData(initRecipientDetails);
                setFinishOrder(false);
                setIsOpen([true]);
            }
        } else {
            setFinishOrder(false);
        }
        return () => {
            isMounted = false;
        };
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
                <RecipientDetails handleOrderData={handleOrderData} />
            </Main>
            <Prev>
                <PrevWrapper>
                    <BasketPreview
                        setPriceToPay={setPriceToPay}
                        setProductsInBasket={setProductsInBasket}
                        theProducts={theProducts}
                        setProducts={setProducts}
                    />
                    <DeliveryPreview
                        deliveryCheckboxesPay={deliveryCheckboxesPay}
                        deliveryCheckboxesOpt={deliveryCheckboxesOpt}
                        orderStreet={street}
                    />
                    <PaymentPreview
                        isUserLogIn={Boolean(auth.id)}
                        priceToPay={priceToPay}
                        finishHandler={finishHandler}
                        priceForDelivery={priceForDelivery}
                    />
                </PrevWrapper>
            </Prev>
            <Modal position={[30, -80]} width={600} open={isOpen} onClose={() => clearLocalStorage()}>
                <BoughtPopUp onClose={() => clearLocalStorage()} orderId={orderId} isUserLogIn={Boolean(auth.id)} />
            </Modal>
        </Wrapper>
    );
};

export default Basket;
