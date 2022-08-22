import { ProductsSection, Wrapper, Image, TitleSection, Quantity, Link, ProductQuantity } from './CartHint.style';
import { Button } from 'components/atoms/Button/Button';

import useBasket from 'hooks/useBasket';

const CartHint = () => {
    const { basketItems } = useBasket();
    console.log(basketItems);

    const getQuantityOfItems = () => {
        let temp = 0;
        basketItems.map((item) => {
            temp += item.quantity;
        });
        return temp;
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
                                <Image key={item._id}>
                                    <ProductQuantity>{item.quantity}</ProductQuantity>
                                    <Link to={`/product/${item._id}`} key={item._id}>
                                        <img src={item.prevImg} alt="images of product" />
                                    </Link>
                                </Image>
                            ))}
                        </ProductsSection>
                        <Link to={`/basket`}>
                            <Button>Do koszyka</Button>
                        </Link>
                    </Wrapper>
                </>
            )}
        </>
    );
};

export default CartHint;