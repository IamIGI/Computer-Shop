import React, { useEffect, useState } from 'react';
import { DescriptionArea, ImageArea, PriceArea, Section, Wrapper, List, Icon, DescriptionAreaMissing } from './BasketPreview.style';
import axios from 'axios';
import { BsBasket3 } from 'react-icons/bs';

let array = [];

const BasketPreview = () => {
    const [theProducts, setProducts] = useState([]);

    //pobieranie listy produktow
    const basket = JSON.parse(localStorage.getItem('productsInBasket'));

    useEffect(() => {
        if (basket !== null) {
            Promise.all(
                basket.products.map((code) => {
                    console.log(code);
                    const baseURL = `http://localhost:5000/product/${code}`;
                    axios
                        .get(baseURL)
                        .then(({ data }) => {
                            // array.push({ name: data.name, prevImg: data.prevImg, price: data.price, code: data.code });
                            const item = { name: data.name, prevImg: data.prevImg, price: data.price, code: data.code };
                            setProducts((prevItems) => {
                                return [...prevItems, item];
                            });
                        })
                        .catch((err) => console.log(err));
                })
            );
        }
    }, []);

    if (theProducts !== []) {
        console.log(theProducts);
    }

    return (
        <>
            <Wrapper>
                <List>
                    {basket === null ? (
                        <>
                            {console.log('Brak produktow')}
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
                            {console.log('Produkty w koszyku')}
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
                                        {theProducts.map((item) => (
                                            <>
                                                <li key={item.code}>
                                                    <Section>
                                                        <ImageArea>
                                                            <img src={item.prevImg} alt="Product img" />
                                                        </ImageArea>
                                                        <DescriptionArea>
                                                            <h4>{item.name}</h4>
                                                            <p>1 szt.</p>
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
