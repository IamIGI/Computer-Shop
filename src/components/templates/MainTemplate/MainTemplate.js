import AccountPreviewSection from 'components/organisms/AccountPreviewSection/AccountPreviewSection';
import NavBar from 'components/organisms/NavBar/NavBar';

import React from 'react';
import Footer from '../Footer/Footer';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'context/AuthProvider';
import { InsideWrapper, Wrapper } from './MainTemplate.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { OrderProvider } from 'context/OrderItemProvider';
import { BasketProvider } from 'context/BasketProvider';
import { ProductProvider } from 'context/ProductProvider';
import { RefreshProvider } from 'context/refreshProvider';
import { BrowserRouter } from 'react-router-dom';
import ChangeHotShootTimer from 'data/ChangeHotShootTimer';
import { Toaster } from 'react-hot-toast';

const MainTemplate = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Toaster position="bottom-left" />
            <Wrapper>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <BasketProvider>
                            <ProductProvider>
                                <OrderProvider>
                                    <RefreshProvider>
                                        <ChangeHotShootTimer />
                                        <AuthProvider>
                                            <NavBar />
                                            <InsideWrapper>
                                                {children}
                                                <AccountPreviewSection />
                                            </InsideWrapper>
                                            <Footer />
                                        </AuthProvider>
                                    </RefreshProvider>
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
