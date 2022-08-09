import React, { useState, useEffect } from 'react';
import { Wrapper, TopWrapper, BottomWrapper } from './Product.styles';
import ProductTopContent from 'components/organisms/ProductTopContent/ProductTopContent';
import ProductBottomContent from 'components/organisms/ProductBottomContent/ProductBottomContent';
import ProductsApi from 'api/products';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

const Product = ({ code }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
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
        };

        setTimeout(() => {
            fetchProduct();
        }, 1000);
    }, []);

    return (
        <Wrapper>
            <>
                {!product ? (
                    <>
                        <LoadingAnimation />
                    </>
                ) : (
                    <>
                        <TopWrapper id="Top">
                            <ProductTopContent product={product} />
                        </TopWrapper>
                        <BottomWrapper>
                            <ProductBottomContent product={product} />
                        </BottomWrapper>
                    </>
                )}
            </>
        </Wrapper>
    );
};

export default Product;
