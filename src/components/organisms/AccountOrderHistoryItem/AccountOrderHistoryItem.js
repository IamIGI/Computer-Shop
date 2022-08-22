import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import useOrder from 'hooks/useOrder';
import { Prices } from 'data/Prices';
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
import { BsTruck, BsInboxes } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import { SectionTitle } from '../DeliveryOptions/DeliveryOptions.style';
import { HiStatusOnline } from 'react-icons/hi';
import { RiVisaLine } from 'react-icons/ri';
import { BsCashCoin, BsWallet2, BsPiggyBank } from 'react-icons/bs';

const AccountOrderHistoryItem = ({ orderId }) => {
    const { orderItem } = useOrder();

    //set right month name
    const getDate = (date) => {
        let day = date.split('.')[2];
        let month = date.split('.')[1];
        let year = date.split('.')[0];
        let monthName = '';
        switch (month) {
            case '01':
                monthName = 'Styczeń';
                break;
            case '02':
                monthName = 'Luty';
                break;
            case '03':
                monthName = 'Marzec';
                break;
            case '04':
                monthName = 'Kwiecień';
                break;
            case '05':
                monthName = 'Maj';
                break;
            case '06':
                monthName = 'Czerwiec';
                break;
            case '07':
                monthName = 'Lipiec';
                break;
            case '08':
                monthName = 'Sierpień';
                break;
            case '09':
                monthName = 'Wrzesień';
                break;
            case '10':
                monthName = 'Październik';
                break;
            case '11':
                monthName = 'Listopad';
                break;
            case '12':
                monthName = 'Grudzień';
                break;

            default:
                console.log('Bad date given');
                break;
        }
        return `${day} ${monthName} ${year}`;
    };

    const getDeliveryMethodDescription = (method) => {
        switch (method) {
            case 'deliveryMan':
                return { desc: 'Kurier – InPost, UPS, FedEx, DTS bezpłatnie', icon: <BsTruck /> };
            case 'atTheSalon':
                return { desc: 'Odbiór w salonie HotShoot', icon: <FaRegBuilding /> };
            case 'locker':
                return { desc: 'Paczkomat 24/7', icon: <BsInboxes /> };

            default:
                console.log({ Err: 'Missing Order Method' });
                break;
        }
    };

    const getPaymentMethodDescription = (method) => {
        switch (method) {
            case 'online':
                return { desc: 'Płatność online', icon: <HiStatusOnline /> };
            case 'card':
                return { desc: 'Karta płatnicza online', icon: <RiVisaLine /> };
            case 'cash':
                return { desc: 'Przelew gotówkowy', icon: <BsCashCoin /> };
            case 'uponReceipt':
                return { desc: 'Przy odbiorze', icon: <BsWallet2 /> };
            case 'installment':
                return { desc: 'Raty', icon: <BsPiggyBank /> };

            default:
                console.log({ Err: 'Missing Payment Method' });
                break;
        }
    };

    const getDeliveryPrice = (method) => {
        switch (method) {
            case 'deliveryMan':
                return Prices.deliveryMan;

            case 'atTheSalon':
                return Prices.atTheSalon;

            case 'locker':
                return Prices.locker;

            default:
                console.log(`Bad payment method ${method} `);
                break;
        }
    };

    return (
        <AccountSettings>
            <Wrapper>
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
                        <Icon>{getDeliveryMethodDescription(orderItem.transactionInfo.deliveryMethod).icon}</Icon>
                        <Desc>{getDeliveryMethodDescription(orderItem.transactionInfo.deliveryMethod).desc}</Desc>
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
                                <li>{orderItem.transactionInfo.recipientDetails.name}</li>
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
                <ProductSection>
                    <OrderSectionTitle>Zamówienie</OrderSectionTitle>
                    {orderItem.products.map((product, index) => (
                        <ProductElement>
                            <ProductImage>
                                <img src={product.prevImg} alt="images of product" />
                            </ProductImage>
                            <ProductDescription>
                                <p>{product.name}</p>
                                <p>{product.price} zł</p>
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
            </Wrapper>
        </AccountSettings>
    );
};

export default AccountOrderHistoryItem;
