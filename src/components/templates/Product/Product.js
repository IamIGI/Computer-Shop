import React, { useState, useEffect } from 'react';
import { Wrapper, TopWrapper, MidWrapper, BottomWrapper } from './Product.styles';
import ProductTopContent from 'components/organisms/ProductTopContent/ProductTopContent';
import ProductBottomContent from 'components/organisms/ProductBottomContent/ProductBottomContent';
import ProductsApi from 'api/products';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import Comments from 'components/organisms/Comments/Comments';

let waitForFetch = false;

const Product = ({ code }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        waitForFetch = true;

        const fetchProduct = async () => {
            try {
                const response = await ProductsApi.get(`/${code}`);
                setProduct(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
            waitForFetch = false;
        };

        fetchProduct();
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
                            <ProductTopContent product={product} />
                        </TopWrapper>
                        <MidWrapper>
                            <ProductBottomContent product={product} />
                        </MidWrapper>
                        <BottomWrapper>
                            <Comments productId={product._id} />
                        </BottomWrapper>
                    </>
                )}
            </>
        </Wrapper>
    );
};

export default Product;
