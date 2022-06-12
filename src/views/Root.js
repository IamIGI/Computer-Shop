import About from 'components/templates/About/About';
import AllProducts from 'components/templates/AllProducts/AllProducts';
import Basket from 'components/templates/Basket/Basket';
import Home from 'components/templates/Home/Home';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import React, { useState, useEffect } from 'react';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components'; //use styles/theme.js everywhere you want
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import Product from 'components/templates/Product/Product';
import AccountSettingsSettings from 'components/organisms/AccountSettingsSettings/AccountSettingsSettings';
import AccountSettingsOrders from 'components/organisms/AccountSettingsOrders/AccountSettingsOrders';
import axios from 'axios';
import UserProvider from 'context/UserContext';

const baseURL = 'http://localhost:5000/products';

const Root = () => {
    //API section---------------------
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios
            .get(baseURL)
            .then(({ data }) => {
                setProducts(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            {products === null ? (
                <h1>Loading</h1>
            ) : (
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <MainTemplate>
                            <Wrapper>
                                <Routes>
                                    <Route path="" element={<Home />} />
                                    <Route path="allProducts" element={<AllProducts />} />
                                    <Route path="/accountSettings/Settings" element={<AccountSettingsSettings />} />
                                    <Route path="/accountSettings/Orders" element={<AccountSettingsOrders />} />
                                    <Route path="basket" element={<Basket />} />
                                    <Route path="about" element={<About />} />
                                    {products.map((item) => (
                                        <Route path={`/product/${item.code}`} element={<Product code={item.code} />} />
                                    ))}
                                </Routes>
                            </Wrapper>
                        </MainTemplate>
                    </ThemeProvider>
                </BrowserRouter>
            )}
        </>
    );
};
export default Root;
