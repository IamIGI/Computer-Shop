import AccountPreviewSection from 'components/organisms/AccountPreviewSection/AccountPreviewSection';
import NavBar from 'components/organisms/NavBar/NavBar';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components'; //use styles/theme.js everywhere you want
import { AuthProvider } from 'context/AuthProvider';
import React from 'react';
import Footer from '../Footer/Footer';
import { Wrapper } from './MainTemplate.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const MainTemplate = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ThemeProvider theme={theme}>
                    <AuthProvider>
                        <NavBar />
                        {children}
                        <AccountPreviewSection />
                        <Footer />
                    </AuthProvider>
                </ThemeProvider>
            </Wrapper>
        </>
    );
};

export default MainTemplate;
