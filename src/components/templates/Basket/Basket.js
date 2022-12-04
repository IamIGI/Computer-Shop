import BasketPreview from 'components/organisms/BasketPreview/BasketPreview';
import DeliveryOptions from 'components/organisms/DeliveryOptions/DeliveryOptions';
import DeliveryPreview from 'components/organisms/DeliveryPreview/DeliveryPreview';
import PaymentOptions from 'components/organisms/PaymentOptions/PaymentOptions';
import { useEffect, useState } from 'react';
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
import { initDeliveryCheckboxesOpt, initDeliveryCheckboxesPay, initRecipientDetails } from './Basket.logic';
import useLocalStorage from 'hooks/useLocalStorage';

const Basket = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = useLogout();

    const { priceToPay, basketItems, setBasketItems, promoCodeDisabled, promoCodeEnabled } = useBasket();
    const { auth } = useAuth();
    const [deliveryCheckboxesOpt, setDeliveryCheckboxesOpt] = useMultiCheckboxMemory(
        'deliveryMethod',
        initDeliveryCheckboxesOpt
    );
    const [deliveryCheckboxesPay, setDeliveryCheckboxesPay] = useMultiCheckboxMemory(
        'paymentMethod',
        initDeliveryCheckboxesPay
    );
    const [orderData, setOrderData] = useMultiCheckboxMemory('orderForm', initRecipientDetails);
    const { street } = orderData;
    const [finishOrder, setFinishOrder] = useState(false);
    const [priceForDelivery, setPriceForDelivery] = useState();
    const [isOpen, setIsOpen] = useState([false]);
    const [orderId, setOrderId] = useState('');
    const [orderTemplateData, setOrderTemplateData] = useLocalStorage('orderData', '');
    const [promoCode, setPromoCode] = useState('');
    const [successfullyUsedPromoCode, setSuccessfullyUsedPromoCode] = useState(false);
    const [orderReady, setOrderReady] = useState(false);
    const [promoCodeAlert, setPromoCodeAlert] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setPromoCodeAlert('');
        }, 4000);
    }, [promoCodeAlert]);

    const handlePromoCodeSubmit = async (e) => {
        e.preventDefault();

        const data = { code: promoCode, products: basketItems, auth: auth.id };
        const response = await axiosPrivate.post('/promocodes/checkproducts', data);

        const promoCodesResponse = response.data;
        if (promoCodesResponse?.errCode === '001') {
            setPromoCodeAlert('Podano zły kod');
            return;
        }
        if (promoCodesResponse?.errCode === '002') {
            setPromoCodeAlert('Podany kod nie przecenia żadnego z produktów');
            return;
        }
        if (promoCodesResponse?.errCode === '003') {
            setPromoCodeAlert('Podany kod został już użyty');
            return;
        }

        promoCodeDisabled();
        setSuccessfullyUsedPromoCode(true);
        setPromoCodeAlert('Przeceniono produkt');

        const discountProduct_Id = promoCodesResponse[0]._id;

        const newBasketItems = basketItems.filter((item) => {
            return item._id !== discountProduct_Id;
        });
        promoCodesResponse.map((item) => newBasketItems.push(item));
        setBasketItems(newBasketItems);
    };

    const handlePromoCode = (value) => {
        setPromoCode(value);
    };

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get('success')) {
            try {
                async function saveOrder() {
                    const response = await axiosPrivate.post(`order/make`, orderTemplateData);
                    setOrderId(response.data.OrderId);
                }
                saveOrder();
            } catch (err) {
                console.log(err);
            }
            setIsOpen([true]);
            let stateObj = { foo: 'bar' };
            window.history.replaceState(stateObj, 'page 3', 'basket.html');
        }
        // eslint-disable-next-line
    }, []);

    const resetAllData = () => {
        setBasketItems([]);
        setOrderData(initRecipientDetails);
        setFinishOrder(false);
        promoCodeEnabled();
        setSuccessfullyUsedPromoCode(false);
        setPromoCode('');
        setDeliveryCheckboxesOpt(initDeliveryCheckboxesOpt);
        setDeliveryCheckboxesPay(initDeliveryCheckboxesPay);
        localStorage.removeItem('basketItems');
        localStorage.removeItem('orderData');
        localStorage.removeItem('deliveryMethod');
        localStorage.removeItem('paymentMethod');
    };

    const onPopUpClose = () => {
        resetAllData();
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
                return (tempOpt = Object.keys(deliveryCheckboxesOpt)[index]);
            }
            return undefined;
        });

        Object.values(deliveryCheckboxesPay).map((x, index) => {
            if (x) {
                return (tempPay = Object.keys(deliveryCheckboxesPay)[index]);
            }
            return undefined;
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

        const finalPrice = (priceToPay + priceForDelivery).toFixed(2);
        orderTemplateDocument = {
            status: 1, //all orders have to start from "In realization" status // for now
            products: basketItems,
            transactionInfo: {
                deliveryMethod: tempOpt,
                paymentMethod: tempPay,
                price: finalPrice,
                recipientDetails: orderData,
            },
            user: auth.id,
            usedPromoCode: { isUsed: successfullyUsedPromoCode, code: promoCode },
        };

        const { transactionInfo } = orderTemplateDocument;
        const { deliveryMethod, paymentMethod, price, recipientDetails } = transactionInfo;
        const { email } = recipientDetails;

        if (price !== 0 && deliveryMethod !== '' && paymentMethod !== '' && email !== '') {
            setOrderReady(true);
        } else {
            setOrderReady(false);
        }

        //main statement
        if (price !== 0 && deliveryMethod !== '' && paymentMethod !== '' && email !== '') {
            if (finishOrder === true) {
                const sendUserOrder = async () => {
                    try {
                        if (orderTemplateDocument.transactionInfo.paymentMethod === 'card') {
                            const products = [];
                            orderTemplateDocument.products.map((product) =>
                                products.push({ id: product._id, quantity: product.quantity })
                            );

                            const stripeObj = {
                                products: basketItems,
                                delivery: orderTemplateDocument.transactionInfo.deliveryMethod,
                            };

                            const response = await axiosPrivate.post(`stripe/checkout`, stripeObj);
                            setOrderTemplateData(orderTemplateDocument);
                            window.location = response.data.url;
                        } else {
                            const response = await axiosPrivate.post(`order/make`, orderTemplateDocument);
                            setOrderId(response.data.OrderId);
                        }
                    } catch (err) {
                        console.log(err);
                        await logout();
                        navigate('/', { state: { from: location }, replace: true });
                    }
                };
                isMounted && sendUserOrder();
                //clearData
                if (orderTemplateDocument.transactionInfo.paymentMethod !== 'card') {
                    setIsOpen([true]);
                }
            }
        } else {
            setFinishOrder(false);
        }
        return () => {
            isMounted = false;
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deliveryCheckboxesOpt, deliveryCheckboxesPay, orderData, priceToPay, basketItems, finishOrder]);

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
                    <BasketPreview />
                    <DeliveryPreview
                        deliveryCheckboxesPay={deliveryCheckboxesPay}
                        deliveryCheckboxesOpt={deliveryCheckboxesOpt}
                        orderStreet={street}
                    />
                    <PaymentPreview
                        orderReady={orderReady}
                        promoCodeAlert={promoCodeAlert}
                        handlePromoCodeSubmit={handlePromoCodeSubmit}
                        handlePromoCode={handlePromoCode}
                        promoCode={promoCode}
                        isUserLogIn={Boolean(auth.id)}
                        finishHandler={finishHandler}
                        priceForDelivery={priceForDelivery}
                    />
                </PrevWrapper>
            </Prev>
            <Modal position={[30, -80]} width={600} open={isOpen} onClose={onPopUpClose}>
                <BoughtPopUp onClose={onPopUpClose} orderId={orderId} isUserLogIn={Boolean(auth.id)} />
            </Modal>
        </Wrapper>
    );
};

export default Basket;
