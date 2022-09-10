import React from 'react';
import { Spinner, Wrapper } from './LoadingAnimation.style';

const LoadingAnimation = () => {
    return (
        <>
            <Wrapper>
                <Spinner>Ładowanie</Spinner>
            </Wrapper>
        </>
    );
};

export default LoadingAnimation;
