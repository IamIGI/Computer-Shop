import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import {
    BodySection,
    DateDecorator,
    FooterSection,
    OrderContent,
    OrderDescription,
    OrderProducts,
    PageButton,
    ProductDescription,
    ProductImage,
    Line,
    TitleSection,
    Wrapper,
    ProductImageSmall,
} from './AccountSettingsOrders.style';

import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { BsBox } from 'react-icons/bs';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { SectionTitle } from 'components/molecules/AccountData/AccountData.style';

const AccountSettingsOrders = () => {
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    //You finished There #JWT Authentication
    const [orderHistory, setOrderHistory] = useState([]);
    const [countOrders, setCountOrders] = useState(0);
    const [pageNr, setPageNr] = useState(1);

    useEffect(() => {
        let data = {};
        const getUserOrderHistory = async () => {
            data = {
                userId: auth.id,
                pageNr,
            };
            try {
                //Start for loadingAnimation
                const response = await axiosPrivate.post('order/history', data);
                setOrderHistory(response.data.orderData);
                setCountOrders(response.data.orderCount);
                //end for loadingAnimation
            } catch (err) {
                console.log('OrderHistory: Fail');
                console.log(err);
                console.log(auth);
                navigate('/', { state: { from: location }, replace: true });
            }
        };
        getUserOrderHistory();
    }, [pageNr]);

    //set right status name
    const getStatus = (number) => {
        switch (number) {
            case 1:
                return 'W realizacji';
            case 2:
                return 'Wysłane';
            case 3:
                return 'Zakończone';
            default:
                console.log('Bad number status given');
                break;
        }
    };
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

    //set right number of page buttons
    const buttonClicked = (number) => {
        setPageNr(number);
    };

    const countPageButtons = [];
    for (let i = 1; i <= Math.ceil(countOrders / 5.01); i++) {
        countPageButtons.push(i);
    }

    return (
        <AccountSettings>
            <Wrapper>
                <TitleSection>
                    <SectionTitle>
                        <SectionDescription title={'Zamówienia'} icon={<BsBox />} />
                    </SectionTitle>
                </TitleSection>
                <BodySection>
                    <>
                        {orderHistory.length === 0 ? (
                            <p>Koszyk pusty</p>
                        ) : (
                            <>
                                {orderHistory.map((item, index) => (
                                    <>
                                        <OrderContent>
                                            <OrderDescription>
                                                <h4>{getStatus(item.status)}</h4>
                                                {/* <br /> */}
                                                <DateDecorator>{getDate(item.transactionInfo.date)}</DateDecorator>
                                                nr {item._id}
                                                <br />
                                                <h4>{item.transactionInfo.price} zł</h4>
                                                {/* <br /> */}
                                            </OrderDescription>
                                            <OrderProducts>
                                                {item.products.map((product, index) => (
                                                    <>
                                                        {item.products.length > 1 ? (
                                                            <ProductImageSmall>
                                                                <img src={product.prevImg} alt="images of product" />
                                                            </ProductImageSmall>
                                                        ) : (
                                                            <>
                                                                <ProductImage>
                                                                    <img
                                                                        src={product.prevImg}
                                                                        alt="images of product"
                                                                    />
                                                                </ProductImage>
                                                                <ProductDescription>
                                                                    <p>{product.name}</p>
                                                                </ProductDescription>
                                                            </>
                                                        )}
                                                    </>
                                                ))}
                                            </OrderProducts>
                                        </OrderContent>
                                    </>
                                ))}
                            </>
                        )}
                    </>
                </BodySection>
                <Line />
                <FooterSection>
                    <>
                        {countPageButtons.map((item, index) => (
                            <PageButton key={index} onClick={() => buttonClicked(item)}>
                                {item}
                            </PageButton>
                        ))}
                    </>
                </FooterSection>
            </Wrapper>
        </AccountSettings>
    );
};

export default AccountSettingsOrders;
