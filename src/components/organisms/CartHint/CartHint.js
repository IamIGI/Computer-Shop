import {
    ProductsSection,
    Wrapper,
    Image,
    TitleSection,
    Quantity,
    Link,
    ProductQuantity,
    RemoveBasket,
    BottomWrapper,
} from './CartHint.style';
import { Button } from 'components/atoms/Button/Button';
import { IoTrashBinOutline } from 'react-icons/io5';
import useBasket from 'hooks/useBasket';
import useProduct from 'hooks/useProduct';

const CartHint = () => {
    const { setProduct } = useProduct();
    const { basketItems, setBasketItems } = useBasket();

    const getQuantityOfItems = () => {
        let temp = 0;
        basketItems.map((item) => {
            temp += item.quantity;
        });
        return temp;
    };

    const removeBasket = () => {
        localStorage.removeItem('basketItems');
        setBasketItems([]);
    };

    return (
        <>
            {basketItems.length === 0 ? (
                <></>
            ) : (
                <>
                    <Wrapper>
                        <TitleSection>
                            <Quantity>{getQuantityOfItems()}</Quantity>
                            Koszyk
                        </TitleSection>

                        <ProductsSection>
                            {basketItems.map((item) => (
                                <>
                                    <Image key={item._id}>
                                        <ProductQuantity>{item.quantity}</ProductQuantity>
                                        <Link
                                            onClick={() => setProduct(item)}
                                            to={`/product/${item._id}`}
                                            key={item._id}
                                        >
                                            <img src={item.prevImg} alt="images of product" />
                                        </Link>
                                    </Image>
                                </>
                            ))}
                        </ProductsSection>
                        <BottomWrapper>
                            <Link to={`/basket`}>
                                <Button>Do koszyka</Button>
                            </Link>
                            <RemoveBasket onClick={() => removeBasket()}>
                                <IoTrashBinOutline />
                            </RemoveBasket>
                        </BottomWrapper>
                    </Wrapper>
                </>
            )}
        </>
    );
};

export default CartHint;
