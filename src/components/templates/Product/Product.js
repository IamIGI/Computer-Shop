import React from 'react';
import { Wrapper, TopWrapper, BottomWrapper } from './Product.styles';
import ProductTopContent from 'components/organisms/ProductTopContent/ProductTopContent';
import ProductBottomContent from 'components/organisms/ProductBottomContent/ProductBottomContent';

const Product = ({ product }) => {
    return (
        <Wrapper>
            <TopWrapper id="Top">
                <ProductTopContent product={product} />
            </TopWrapper>
            <BottomWrapper>
                <ProductBottomContent product={product} />
            </BottomWrapper>
        </Wrapper>
    );
};

export default Product;
