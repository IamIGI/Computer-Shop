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
    Link,
    TitleSection,
    Wrapper,
    InsideWrapper,
    ProductImageSmall,
    NoOrders,
    NoOrderIcon,
    NoOrderDescription,
    Quantity,
} from './AccountSettingsOrders.style';

import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { BsBox } from 'react-icons/bs';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { SectionTitle } from 'components/molecules/AccountData/AccountData.style';
import useOrder from 'hooks/useOrder';
import { BsLaptop } from 'react-icons/bs';
import { getStatus, getDate } from './AccountSettingsOrders.logic';

const AccountSettingsOrders = () => {
    const { auth } = useAuth();
    const { setOrderItem } = useOrder();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    //You finished There #JWT Authentication
    const [orderHistory, setOrderHistory] = useState([]);
    const [countOrders, setCountOrders] = useState(0);
    const [pageNr, setPageNr] = useState(1);
    const [waitForFetch, setWaitForFetch] = useState(true);

    useEffect(() => {
        let data = {};
        const getUserOrderHistory = async () => {
            data = {
                userId: auth.id,
                pageNr,
            };
            try {
                const response = await axiosPrivate.post('user/orderhistory', data);
                setOrderHistory(response.data.orderData);
                setCountOrders(response.data.orderCount);
            } catch (err) {
                console.log(err);
                navigate('/', { state: { from: location }, replace: true });
            }
        };
        setWaitForFetch(true);
        getUserOrderHistory();
        setWaitForFetch(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNr]);

    //set right number of page buttons
    const buttonClicked = (number) => {
        setPageNr(number);
    };

    //setNumberOfButtons
    const countPageButtons = [];
    for (let i = 1; i <= Math.ceil(countOrders / 5.01); i++) {
        countPageButtons.push(i);
    }

    const goToOrderItem = (order) => {
        setOrderItem(order);
    };

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
                        {waitForFetch ? (
                            <LoadingAnimation loadingSize={10} />
                        ) : orderHistory.length === 0 ? (
                            <NoOrders>
                                <NoOrderIcon>
                                    <BsLaptop />
                                </NoOrderIcon>
                                <NoOrderDescription>Zamień ten wirtualny laptop na coś lepszego !!!</NoOrderDescription>
                            </NoOrders>
                        ) : (
                            <>
                                {orderHistory.map((item, index) => (
                                    <InsideWrapper key={index}>
                                        <Link
                                            onClick={() => goToOrderItem(item)}
                                            to={`/accountSettings/orders/history/${item._id}`}
                                        >
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
                                                                    <Quantity height={30} width={30}>
                                                                        {product.quantity}
                                                                    </Quantity>
                                                                    <img
                                                                        src={product.prevImg}
                                                                        alt="images of product"
                                                                    />
                                                                </ProductImageSmall>
                                                            ) : (
                                                                <>
                                                                    <ProductImage>
                                                                        <Quantity height={30} width={30}>
                                                                            {product.quantity}
                                                                        </Quantity>
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
                                        </Link>
                                    </InsideWrapper>
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
