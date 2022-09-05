import React, { useState, useEffect } from 'react';
import { Wrapper, TopWrapper, MidWrapper, BottomWrapper } from './Product.styles';
import ProductTopContent from 'components/organisms/ProductTopContent/ProductTopContent';
import ProductMiddleContent from 'components/organisms/ProductMiddleContent/ProductMiddleContent';
import useProduct from 'hooks/useProduct';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import CommentsSection from 'components/templates/CommentsSection/CommentsSection';
import { getProduct } from 'api/products';

const Product = ({ code }) => {
    console.log(code);
    const [waitForFetchProduct, setWaitForFetchProduct] = useState(true);
    const [product2, setProduct2] = useState({});
    const { setProduct } = useProduct();

    useEffect(() => {
        const fetchProduct = async (code) => {
            const response = await getProduct(code);
            setProduct2(response);
            setProduct(response);
            setWaitForFetchProduct(false);
        };

        fetchProduct(code);
    }, [code]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [code]);

    useEffect(() => {
        console.log(product2);
    }, [product2]);

    //Work when element is rendered
    document.getElementById('Top') && document.getElementById('Top').scrollIntoView({ behavior: 'smooth' });

    return (
        <Wrapper>
            <>
                {waitForFetchProduct ? (
                    <>
                        <LoadingAnimation />
                    </>
                ) : (
                    <>
                        <TopWrapper id="Top">
                            <ProductTopContent product={product2} />
                        </TopWrapper>
                        <MidWrapper>
                            <ProductMiddleContent product={product2} />
                        </MidWrapper>
                        <BottomWrapper>
                            <CommentsSection product={product2} />
                        </BottomWrapper>
                    </>
                )}
            </>
        </Wrapper>
    );
};

export default Product;
