import About from 'components/templates/About/About';
import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import AllProducts from 'components/templates/AllProducts/AllProducts';
import Basket from 'components/templates/Basket/Basket';
import Home from 'components/templates/Home/Home';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import React from 'react';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components'; //use styles/theme.js everywhere you want
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import { products } from 'data/Products';
import Product from 'components/templates/Product/Product';
import AccountSettingsSettings from 'components/organisms/AccountSettingsSettings/AccountSettingsSettings';
import AccountSettingsOrders from 'components/organisms/AccountSettingsOrders/AccountSettingsOrders';

const Root = () => {
    return (
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
                                <Route path={`/product/${item.code}`} element={<Product product={item} />} />
                            ))}
                        </Routes>
                    </Wrapper>
                </MainTemplate>
            </ThemeProvider>
        </BrowserRouter>
    );
};
export default Root;
