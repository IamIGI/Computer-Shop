import React, { useState, useEffect } from 'react';
import { Wrapper, TopWrapper, MidWrapper, BottomWrapper } from './Product.styles';
import ProductTopContent from 'components/organisms/ProductTopContent/ProductTopContent';
import ProductMiddleContent from 'components/organisms/ProductMiddleContent/ProductMiddleContent';
import useProduct from 'hooks/useProduct';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import Comments from 'components/organisms/Comments/Comments';

let waitForFetch = false;

const Product = ({ code }) => {
    const { product } = useProduct();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [code]);

    //Work when element is rendered
    document.getElementById('Top') && document.getElementById('Top').scrollIntoView({ behavior: 'smooth' });

    return (
        <Wrapper>
            <>
                {waitForFetch || !product ? (
                    <>
                        <LoadingAnimation />
                    </>
                ) : (
                    <>
                        <TopWrapper id="Top">
                            <ProductTopContent />
                        </TopWrapper>
                        <MidWrapper>
                            <ProductMiddleContent />
                        </MidWrapper>
                        <BottomWrapper>
                            <Comments />
                        </BottomWrapper>
                    </>
                )}
            </>
        </Wrapper>
    );
};

export default Product;
