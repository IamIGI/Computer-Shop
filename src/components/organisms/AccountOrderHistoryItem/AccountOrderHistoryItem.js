import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import {
    DeliveryData,
    OrderSectionDescription,
    OrderSection,
    OrderSectionTitle,
    HistorySection,
    Icon,
    OrderTitleSection,
    ProductSection,
    SummarySection,
    UserData,
    UserDataSection,
    Wrapper,
    Desc,
    Line,
    UserDataDescription,
    ProductElement,
    ProductImage,
    ProductDescription,
    ProductQuantity,
} from './AccountOrderHistoryItem.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BsBox } from 'react-icons/bs';
import CheckController from 'components/atoms/CheckController/CheckController';
import { SectionTitle } from '../DeliveryOptions/DeliveryOptions.style';
import { useState, useEffect } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';
import { getDate } from '../AccountSettingsOrders/AccountSettingsOrders.logic';
import {
    getDeliveryMethodDescription,
    getPaymentMethodDescription,
    getDeliveryPrice,
} from './AccountOrderHistoryItem.logic';
import { BASE_URL } from 'data/GlobalVariables';

const AccountOrderHistoryItem = () => {
    const orderId = useParams().orderId;
    const axiosPrivate = useAxiosPrivate();
    const [waitForFetch, setWaitForFetch] = useState(true);
    const [orderItem, setOrderItem] = useState({});

    useEffect(() => {
        const fetchOrder = async (orderId) => {
            try {
                // const response = await axiosPrivate.get(`/orderhistory/${orderId}`);
                const response = await axiosPrivate.get(`user/orderhistory/${orderId}`);
                setOrderItem(response.data);
                setWaitForFetch(false);
            } catch (err) {
                console.log('OrderHistoryItem: Fail');
                console.log(err);
            }
        };

        fetchOrder(orderId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderId]);

    return (
        <AccountSettings>
            <Wrapper>
                {waitForFetch ? (
                    <LoadingAnimation loadingSize={15} />
                ) : (
                    <>
                        <OrderTitleSection>
                            <SectionTitle>
                                <SectionDescription
                                    title={`Zamówienie `}
                                    description={`nr. ${orderItem._id} | ${getDate(orderItem.transactionInfo.date)}`}
                                    icon={<BsBox />}
                                />
                            </SectionTitle>
                        </OrderTitleSection>
                        <HistorySection>
                            <CheckController status={orderItem.status} />
                        </HistorySection>
                        <OrderSection>
                            <OrderSectionTitle>Dostawa</OrderSectionTitle>

                            <OrderSectionDescription>
                                <Icon>
                                    {getDeliveryMethodDescription(orderItem.transactionInfo.deliveryMethod).icon}
                                </Icon>
                                <Desc>
                                    {getDeliveryMethodDescription(orderItem.transactionInfo.deliveryMethod).desc}
                                </Desc>
                            </OrderSectionDescription>
                        </OrderSection>
                        <UserDataSection>
                            <DeliveryData>
                                <OrderSectionTitle>Adres odbioru</OrderSectionTitle>

                                <UserDataDescription>
                                    <ul>
                                        <li>{orderItem.transactionInfo.recipientDetails.street}</li>
                                        <li>
                                            {orderItem.transactionInfo.recipientDetails.zipCode}{' '}
                                            {orderItem.transactionInfo.recipientDetails.place}{' '}
                                        </li>
                                    </ul>
                                </UserDataDescription>
                            </DeliveryData>
                            <UserData>
                                <OrderSectionTitle>Dane odbiorcy</OrderSectionTitle>

                                <UserDataDescription>
                                    <ul>
                                        <li>
                                            <b>{orderItem.transactionInfo.recipientDetails.name}</b>
                                        </li>
                                        <li>tel. {orderItem.transactionInfo.recipientDetails.phone}</li>
                                        <li>e-mail: {orderItem.transactionInfo.recipientDetails.email}</li>
                                    </ul>
                                </UserDataDescription>
                            </UserData>
                        </UserDataSection>
                        <OrderSection>
                            <OrderSectionTitle>Płatność</OrderSectionTitle>

                            <OrderSectionDescription>
                                <Icon>{getPaymentMethodDescription(orderItem.transactionInfo.paymentMethod).icon}</Icon>
                                <Desc>{getPaymentMethodDescription(orderItem.transactionInfo.paymentMethod).desc}</Desc>
                            </OrderSectionDescription>
                        </OrderSection>
                        <OrderSection>
                            <OrderSectionTitle>Dane do faktury</OrderSectionTitle>
                            <UserDataDescription>
                                <ul>
                                    <li>
                                        <b>{orderItem.transactionInfo.recipientDetails.name}</b>
                                    </li>
                                    <li>tel. {orderItem.transactionInfo.recipientDetails.phone}</li>
                                    <li>e-mail: {orderItem.transactionInfo.recipientDetails.email}</li>
                                    <li>
                                        {' '}
                                        <a href={`${BASE_URL}/order/pdf/${orderItem._id}`}>Pobierz dokument faktury </a>
                                    </li>
                                </ul>
                            </UserDataDescription>
                        </OrderSection>
                        <ProductSection>
                            <OrderSectionTitle>Zamówienie</OrderSectionTitle>
                            {orderItem.products.map((product, index) => (
                                <ProductElement key={index}>
                                    <ProductImage>
                                        <img src={product.prevImg} alt="images of product" />
                                    </ProductImage>
                                    <ProductDescription>
                                        <p>{product.name}</p>
                                        <p>
                                            {product.price} zł &emsp;
                                            {product.isDiscount ? <span>{product.priceBeforeDiscount} zł</span> : <></>}
                                        </p>
                                    </ProductDescription>
                                    <ProductQuantity>{product.quantity} szt.</ProductQuantity>
                                </ProductElement>
                            ))}
                        </ProductSection>
                        <Line />
                        <SummarySection>
                            <ul>
                                <li>
                                    <div> Wartość koszyka:</div>
                                    <div>
                                        {orderItem.transactionInfo.price -
                                            getDeliveryPrice(orderItem.transactionInfo.deliveryMethod)}{' '}
                                        zł
                                    </div>
                                </li>
                                <li>
                                    <div>Koszt dostawy: </div>
                                    <div>{getDeliveryPrice(orderItem.transactionInfo.deliveryMethod)} zł</div>
                                </li>
                                <Line />
                                <li>
                                    <div>Razem: </div>
                                    <div>{orderItem.transactionInfo.price} zł</div>
                                </li>
                            </ul>
                        </SummarySection>
                    </>
                )}
            </Wrapper>
        </AccountSettings>
    );
};

export default AccountOrderHistoryItem;
