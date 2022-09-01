import AccountPreviewSection from 'components/organisms/AccountPreviewSection/AccountPreviewSection';
import NavBar from 'components/organisms/NavBar/NavBar';

import React from 'react';
import Footer from '../Footer/Footer';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components'; //use styles/theme.js everywhere you want
import { AuthProvider } from 'context/AuthProvider';
import { Wrapper } from './MainTemplate.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { OrderProvider } from 'context/OrderItemProvider';
import { BasketProvider } from 'context/BasketProvider';
import { ProductProvider } from 'context/ProductProvider';
import { BrowserRouter } from 'react-router-dom';

const MainTemplate = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <BasketProvider>
                            <ProductProvider>
                                <OrderProvider>
                                    <AuthProvider>
                                        <NavBar />
                                        {children}
                                        <AccountPreviewSection />
                                        <Footer />
                                    </AuthProvider>
                                </OrderProvider>
                            </ProductProvider>
                        </BasketProvider>
                    </ThemeProvider>
                </BrowserRouter>
            </Wrapper>
        </>
    );
};

export default MainTemplate;
