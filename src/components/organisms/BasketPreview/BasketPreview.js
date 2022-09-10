import React, { useEffect } from 'react';
import {
    DescriptionArea,
    ImageArea,
    PriceArea,
    Section,
    Wrapper,
    List,
    Icon,
    DescriptionAreaMissing,
    DescriptionBottom,
    StyledButton,
} from './BasketPreview.style';
import useBasket from 'hooks/useBasket';
import { BsBasket3 } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from '../CartHint/CartHint.style';

const BasketPreview = ({ setPriceToPay, setProductsInBasket, setProducts }) => {
    const { basketItems, setBasketItems } = useBasket();

    const deleteProduct = (_id) => {
        let oldBasket = JSON.parse(localStorage.getItem('basketItems'));

        if (oldBasket.length === 1) {
            localStorage.removeItem('basketItems');
            setPriceToPay(() => {
                return 0;
            });
        } else {
            let newBasket = oldBasket.filter((item) => {
                return item._id !== _id;
            });
            localStorage.setItem('productsInBasket', JSON.stringify(newBasket));
        }

        setBasketItems((prevItems) => {
            return prevItems.filter((item) => {
                return item._id !== _id;
            });
        });

        setProducts((prevItems) => {
            return prevItems.filter((item) => {
                return item._id !== _id;
            });
        });
    };

    useEffect(() => {
        let temp = 0;
        basketItems.map((item) => {
            temp += item.price * item.quantity;
        });
        setPriceToPay(() => {
            return temp;
        });

        setProductsInBasket(() => {
            console.log(basketItems);
            return basketItems;
        });
    }, [basketItems]);

    return (
        <>
            <Wrapper>
                <List>
                    {basketItems.length === 0 ? (
                        <>
                            <Section>
                                <Icon>
                                    <BsBasket3 />
                                </Icon>
                                <DescriptionAreaMissing>
                                    <h4>Brak produktów w koszyku </h4>
                                </DescriptionAreaMissing>
                            </Section>
                        </>
                    ) : (
                        <>
                            {basketItems.map((item, index) => (
                                <>
                                    <li key={index} id={index}>
                                        <Section>
                                            <ImageArea>
                                                <img src={item.prevImg} alt="Product img" />
                                            </ImageArea>
                                            <DescriptionArea>
                                                <Link to={`/product/${item._id}`} key={item._id}>
                                                    <h4>{item.name}</h4>
                                                </Link>
                                                <DescriptionBottom>
                                                    <div>{item.quantity} szt.</div>
                                                    <div>
                                                        <StyledButton onClick={() => deleteProduct(item._id)}>
                                                            {/* you give all the props, f.e: onClick given in UsersListItem */}
                                                            <AiOutlineDelete />
                                                        </StyledButton>
                                                    </div>
                                                </DescriptionBottom>
                                            </DescriptionArea>
                                            <PriceArea>
                                                {item.isDiscount ? (
                                                    <>
                                                        <p>
                                                            <span>{item.priceBeforeDiscount},00 zł</span>
                                                        </p>
                                                        <p>{item.price}</p>
                                                    </>
                                                ) : (
                                                    <p>{item.price},00 zł</p>
                                                )}
                                            </PriceArea>
                                        </Section>
                                    </li>
                                </>
                            ))}
                        </>
                    )}
                </List>
            </Wrapper>
        </>
    );
};

export default BasketPreview;
