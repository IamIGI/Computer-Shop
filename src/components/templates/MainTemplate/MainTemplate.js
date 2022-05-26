import NavBar from 'components/organisms/NavBar/NavBar';
import React from 'react';
import Footer from '../Footer/Footer';

import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
    return (
        <>
            <Wrapper>
                {/* <Header /> */}
                <NavBar />
                {children}
                <Footer />
            </Wrapper>
        </>
    );
};

export default MainTemplate;
