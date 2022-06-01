import HomeBottomContent from 'components/organisms/HomeBottomContent/HomeBottomContent';
import HomeTopContent from 'components/organisms/HomeTopContent/HomeTopContent';
import React from 'react';
import { BottomWrapper, MidWrapper, TopWrapper, Wrapper } from './Home.styles';
const Home = () => {
    return (
        <>
            <Wrapper>
                <TopWrapper>
                    <HomeTopContent />
                </TopWrapper>
                <MidWrapper>2</MidWrapper>
                <BottomWrapper>
                    <HomeBottomContent />
                </BottomWrapper>
            </Wrapper>
        </>
    );
};

export default Home;
