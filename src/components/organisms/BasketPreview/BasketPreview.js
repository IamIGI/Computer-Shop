import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { BsBasket3 } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdDataSaverOff, MdImportExport } from 'react-icons/md';

let basketInit = null;
const BasketPreview = () => {
    if (JSON.parse(localStorage.getItem('productsInBasket')) !== null) {
        basketInit = JSON.parse(localStorage.getItem('productsInBasket')).products;
    }
    const [theProducts, setProducts] = useState([]);
    const [basket, setBasket] = useState(basketInit);

    useEffect(() => {
        if (basket !== null) {
            Promise.all(
                basket.map((code) => {
                    const baseURL = `http://localhost:5000/product/${code}`;
                    axios
                        .get(baseURL)
                        .then(({ data }) => {
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

    const deleteProduct = (code) => {
        console.log('Usuwanie');

        let oldBasket = JSON.parse(localStorage.getItem('productsInBasket')).products;
        console.log(oldBasket.length);

        if (oldBasket.length === 1) {
            console.log('here');
            localStorage.removeItem('productsInBasket');
            setBasket(null);
        } else {
            let temp = oldBasket.filter((item) => {
                return item !== code;
            });
            let newBasket = { products: temp };
            localStorage.setItem('productsInBasket', JSON.stringify(newBasket));
        }

        setProducts((prevItems) => {
            return prevItems.filter((item) => {
                return item.code !== code;
            });
        });
    };

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
                                                                    <StyledButton onClick={() => deleteProduct(item.code)}>
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
