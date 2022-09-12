import HomeBottomContent from 'components/organisms/HomeBottomContent/HomeBottomContent';
import HomeTopContent from 'components/organisms/HomeTopContent/HomeTopContent';
import React from 'react';
import { BottomWrapper, TopWrapper, Wrapper } from './Home.styles';
const Home = () => {
    console.log('huj');
    return (
        <>
            <Wrapper>
                <TopWrapper>
                    <HomeTopContent />
                </TopWrapper>
                <BottomWrapper>
                    <HomeBottomContent />
                </BottomWrapper>
            </Wrapper>
        </>
    );
};

export default Home;
