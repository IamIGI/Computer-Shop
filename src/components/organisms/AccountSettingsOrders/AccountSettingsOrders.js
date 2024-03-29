import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import {
    BodySection,
    DateDecorator,
    FooterSection,
    OrderContent,
    OrderDescription,
    OrderProducts,
    ProductDescription,
    ProductImage,
    Line,
    TitleSection,
    Wrapper,
    ProductImageSmall,
    NoOrders,
    NoOrderIcon,
    NoOrderDescription,
    Quantity,
    GetPDF,
    HandyMenu,
    DescriptionPDF,
    IconPDF,
    InsideWrapper,
} from './AccountSettingsOrders.style';

import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { BsBox } from 'react-icons/bs';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BsLaptop } from 'react-icons/bs';
import { getStatus, getDate } from './AccountSettingsOrders.logic';
import { HiDotsVertical } from 'react-icons/hi';
import { GrDocumentPdf } from 'react-icons/gr';
import { BASE_URL } from 'data/URL';

import PageMenu from 'components/molecules/PageMenu/PageMenu';
import formatPrices from 'helpers/formatPrices';

const AccountSettingsOrders = () => {
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    //You finished There #JWT Authentication
    const [orderHistory, setOrderHistory] = useState([]);
    const [countOrders, setCountOrders] = useState(0);
    const [pageNr, setPageNr] = useState(1);
    const [waitForFetch, setWaitForFetch] = useState(true);
    const [showHandyOptions, setShowHandyOptions] = useState('');
    const [isActiveLink, setIsActiveLink] = useState(true);

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

    return (
        <AccountSettings>
            <Wrapper onClick={() => setShowHandyOptions('')}>
                <TitleSection>
                    <SectionDescription title={'Zamówienia'} icon={<BsBox />} />
                </TitleSection>
                <BodySection>
                    {waitForFetch ? (
                        <LoadingAnimation loadingSize={15} />
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
                                <InsideWrapper key={item._id}>
                                    <OrderContent
                                        to={isActiveLink ? `/accountSettings/orders/history/${item._id}` : ''}
                                    >
                                        <OrderDescription>
                                            <h4>{getStatus(item.status)}</h4>
                                            <DateDecorator>
                                                {getDate(item.transactionInfo.date.split(':')[0])}
                                            </DateDecorator>
                                            nr {item._id}
                                            <br />
                                            <h4>{formatPrices(item.transactionInfo.price.toFixed(2))} zł</h4>
                                        </OrderDescription>
                                        <OrderProducts>
                                            {item.products.map((product, index) => (
                                                <>
                                                    {item.products.length > 1 ? (
                                                        <ProductImageSmall key={index}>
                                                            <Quantity height={30} width={30}>
                                                                {product.quantity}
                                                            </Quantity>
                                                            <img src={product.prevImg} alt="images of product" />
                                                        </ProductImageSmall>
                                                    ) : (
                                                        <>
                                                            <ProductImage key={index}>
                                                                <Quantity height={30} width={30}>
                                                                    {product.quantity}
                                                                </Quantity>
                                                                <img src={product.prevImg} alt="images of product" />
                                                            </ProductImage>
                                                            <ProductDescription>
                                                                <p>{product.name}</p>
                                                            </ProductDescription>
                                                        </>
                                                    )}
                                                </>
                                            ))}
                                        </OrderProducts>
                                        <GetPDF
                                            onMouseOver={() => {
                                                setShowHandyOptions(item._id);
                                                setIsActiveLink(false);
                                            }}
                                        >
                                            <HiDotsVertical />
                                        </GetPDF>
                                    </OrderContent>
                                    {showHandyOptions === item._id ? (
                                        <>
                                            <a href={`${BASE_URL}/order/pdf/${item._id}`}>
                                                <HandyMenu>
                                                    <IconPDF>
                                                        <GrDocumentPdf />
                                                    </IconPDF>
                                                    <DescriptionPDF>Dokument faktury</DescriptionPDF>
                                                </HandyMenu>
                                            </a>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </InsideWrapper>
                            ))}
                        </>
                    )}
                </BodySection>
                <Line />
                <FooterSection>
                    <PageMenu countPageButtons={countPageButtons} pageNr={pageNr} buttonClicked={buttonClicked} />
                </FooterSection>
            </Wrapper>
        </AccountSettings>
    );
};

export default AccountSettingsOrders;
