import React from 'react';
import { Spinner, Wrapper } from './LoadingAnimation.style';

const LoadingAnimation = () => {
    return (
        <>
            <Wrapper>
                <Spinner>Loading</Spinner>
            </Wrapper>
        </>
    );
};

export default LoadingAnimation;
