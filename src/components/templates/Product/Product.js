import React, { useState, useEffect } from 'react';
import { Wrapper, TopWrapper, BottomWrapper } from './Product.styles';
import ProductTopContent from 'components/organisms/ProductTopContent/ProductTopContent';
import ProductBottomContent from 'components/organisms/ProductBottomContent/ProductBottomContent';
import axios from 'axios';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

// const productCode = 734914;

const Product = ({ code }) => {
    const [product, setProducts] = useState(null);
    const baseURL = `http://localhost:5000/product/${code}`;

    useEffect(() => {
        axios
            .get(baseURL)
            .then(({ data }) => {
                setProducts(data);
            })
            .catch((err) => console.log(err));
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
