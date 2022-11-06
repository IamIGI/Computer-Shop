import { Button } from 'components/atoms/Button/Button';
import {
    BottomSection,
    ListOfProducts,
    Product,
    Quantity,
    TitleSection,
    Wrapper,
    Description,
    TitleDescription,
    Link,
    InsideWrapper,
} from './BoughtPopUp.style';
import { RiCake3Line } from 'react-icons/ri';
import useBasket from 'hooks/useBasket';
import useOrder from 'hooks/useOrder';
import { BASE_URL } from 'data/GlobalVariables';

const BoughtPopUp = ({ onClose, orderId, isUserLogIn, isSuccess = true }) => {
    const { basketItems } = useBasket();
    const { setOrderItem } = useOrder();

    const goToOrderItem = (order) => {
        setOrderItem(order);
    };

    return (
        <Wrapper>
            <TitleSection>
                <div>
                    <RiCake3Line />
                </div>
                <TitleDescription> {isSuccess.isTrue ? 'Gratulacje !' : 'Przerwano zamówienie'}</TitleDescription>
            </TitleSection>
            <InsideWrapper>
                {isSuccess.isTrue ? (
                    <ListOfProducts>
                        <p>Zakupione produkty:</p>
                        {basketItems.map((product) => (
                            <Product key={product._id}>
                                <Description>
                                    <span>&#x2022;</span>
                                    {product.name.substring(0, 30)} ...
                                </Description>
                                <Quantity> {product.quantity} szt.</Quantity>
                            </Product>
                        ))}
                    </ListOfProducts>
                ) : (
                    <p>{isSuccess.message}</p>
                )}

                <BottomSection>
                    {isSuccess.isTrue ? (
                        <>
                            {' '}
                            {isUserLogIn ? (
                                <>
                                    <Link
                                        onClick={() => {
                                            onClose();
                                            goToOrderItem({ _id: orderId });
                                        }}
                                        to={`/accountSettings/orders/history/${orderId}`}
                                    >
                                        <Button>Status zamówienia</Button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <a href={`${BASE_URL}/order/pdf/${orderId}`}>
                                        <Button>Pobierz fakturę</Button>
                                    </a>
                                </>
                            )}
                        </>
                    ) : (
                        <></>
                    )}

                    <Button onClick={() => onClose()}>Wyjdź</Button>
                </BottomSection>
            </InsideWrapper>
        </Wrapper>
    );
};

export default BoughtPopUp;
