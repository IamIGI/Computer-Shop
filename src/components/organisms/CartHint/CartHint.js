import { ProductsSection, Wrapper, Image, TitleSection, Number, Link } from './CartHint.style';
import { Button } from 'components/atoms/Button/Button';

import useBasket from 'hooks/useBasket';

const CartHint = () => {
    const { basketItems } = useBasket();

    return (
        <>
            {basketItems.length === 0 ? (
                <></>
            ) : (
                <>
                    <Wrapper>
                        <TitleSection>
                            <Number>{basketItems.length}</Number>
                            Koszyk
                        </TitleSection>

                        <ProductsSection>
                            {basketItems.map((item) => (
                                <Image key={item._id}>
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
