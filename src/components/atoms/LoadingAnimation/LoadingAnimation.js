import React from 'react';
import { Spinner, Wrapper } from './LoadingAnimation.style';

const LoadingAnimation = ({ loadingSize }) => {
    return (
        <Wrapper size={`${loadingSize}px`}>
            <Spinner>Ładowanie</Spinner>
        </Wrapper>
    );
};

export default LoadingAnimation;
