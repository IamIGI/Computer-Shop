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
import ProductsApi from 'api/products';

import { BsBasket3 } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

const BasketPreview = ({ setPriceToPay, setProductsInBasket, theProducts, setProducts, basket, setBasket }) => {
    useEffect(() => {
        if (basket !== null) {
            basket.map(async (product_Id) => {
                try {
                    const response = await ProductsApi.get(`/${product_Id}`);

                    const { name, prevImg, price, _id } = response.data;
                    setProducts((prevItems) => {
                        return [...prevItems, { name, prevImg, price, _id }];
                    });
                } catch (err) {
                    if (err.response) {
                        console.log(err.response.data);
                        console.log(err.response.status);
                        console.log(err.response.headers);
                    } else {
                        console.log(`Error: ${err.message}`);
                    }
                }
            });
        }
    }, []);

    const deleteProduct = (_id) => {
        let oldBasket = JSON.parse(localStorage.getItem('productsInBasket')).products;

        if (oldBasket.length === 1) {
            localStorage.removeItem('productsInBasket');
            setBasket(null);
            setPriceToPay(() => {
                return 0;
            });
        } else {
            let temp = oldBasket.filter((item) => {
                return item !== _id;
            });
            let newBasket = { products: temp };
            localStorage.setItem('productsInBasket', JSON.stringify(newBasket));
        }

        setProducts((prevItems) => {
            return prevItems.filter((item) => {
                return item._id !== _id;
            });
        });
    };

    useEffect(() => {
        let temp = 0;
        theProducts.map((item) => {
            temp += item.price;
        });
        setPriceToPay(() => {
            return temp;
        });

        setProductsInBasket(() => {
            return theProducts;
        });
    }, [theProducts]);

    return (
        <>
            <Wrapper>
                <List>
                    {basket === null ? (
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
                            <>
                                {theProducts === [] ? (
                                    <>
                                        <Section>
                                            <Icon>
                                                <BsBasket3 />
                                            </Icon>
                                            <DescriptionAreaMissing>
                                                <h4>Ładowanie </h4>
                                            </DescriptionAreaMissing>
                                        </Section>
                                    </>
                                ) : (
                                    <>
                                        {theProducts.map((item, index) => (
                                            <>
                                                <li key={index} id={index}>
                                                    <Section>
                                                        <ImageArea>
                                                            <img src={item.prevImg} alt="Product img" />
                                                        </ImageArea>
                                                        <DescriptionArea>
                                                            <h4>{item.name}</h4>
                                                            <DescriptionBottom>
                                                                <div>1 szt.</div>
                                                                <div>
                                                                    <StyledButton
                                                                        onClick={() => deleteProduct(item._id)}
                                                                    >
                                                                        {/* you give all the props, f.e: onClick given in UsersListItem */}
                                                                        <AiOutlineDelete />
                                                                    </StyledButton>
                                                                </div>
                                                            </DescriptionBottom>
                                                        </DescriptionArea>
                                                        <PriceArea>
                                                            <p>{item.price},00 zł</p>
                                                        </PriceArea>
                                                    </Section>
                                                </li>
                                            </>
                                        ))}
                                    </>
                                )}
                            </>
                        </>
                    )}
                </List>
            </Wrapper>
        </>
    );
};

export default BasketPreview;
