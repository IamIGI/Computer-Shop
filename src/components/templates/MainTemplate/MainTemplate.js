import AccountPreviewSection from 'components/organisms/AccountPreviewSection/AccountPreviewSection';
import NavBar from 'components/organisms/NavBar/NavBar';
import UserProvider from 'context/UserContext';
import React from 'react';
import Footer from '../Footer/Footer';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
    return (
        <>
            <Wrapper>
                <UserProvider>
                    <NavBar />
                    {children}
                    <AccountPreviewSection />
                    <Footer />
                </UserProvider>
            </Wrapper>
        </>
    );
};

export default MainTemplate;
