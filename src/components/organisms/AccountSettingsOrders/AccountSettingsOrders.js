import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import { Wrapper } from './AccountSettingsOrders.style';

import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import order from 'api/order';

const AccountSettingsOrders = () => {
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    //You finished There #JWT Authentication
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        let data = {};
        console.log('OrderHistory: Begin Searching');
        const getUserOrderHistory = async () => {
            data = {
                userId: auth.id,
                pageNr: 1,
            };
            console.log(`Data send: ${data.userId}, ${data.pageNr}`);
            try {
                //Start for loadingAnimation
                const response = await axiosPrivate.post('order/history', data);
                setOrderHistory(response.data);
                console.log(response.data);
                console.log('OrderHistory: Success ');
                //end for loadingAnimation
            } catch (err) {
                console.log('OrderHistory: Fail');
                console.log(err);
                console.log(auth);
                navigate('/', { state: { from: location }, replace: true });
            }
        };
        getUserOrderHistory();
        console.log('OrderHistory: Finish');
    }, []);

    return (
        <AccountSettings>
            <Wrapper>
                <>
                    <p> Zamowienia</p>
                    {orderHistory.length === 0 ? (
                        <p>Koszyk pusty</p>
                    ) : (
                        <>
                            {orderHistory.length}
                            {console.log(orderHistory.length)}
                            <br />
                            <ul>
                                {orderHistory.map((item, index) => (
                                    <>
                                        <br />
                                        {console.log(item)}
                                        <li>{item.transactionInfo.date}</li>
                                        <li>{item._id}</li>
                                        <li>{item.transactionInfo.price}</li>
                                        <li>
                                            {item.products.map((product, index) => (
                                                <>
                                                    <img src={product.prevImg} alt="images of product" />
                                                    {console.log(product.name)}
                                                    {product.name}
                                                </>
                                            ))}
                                        </li>
                                    </>
                                ))}
                            </ul>
                            <br />
                        </>
                    )}
                </>
            </Wrapper>
        </AccountSettings>
    );
};

export default AccountSettingsOrders;
