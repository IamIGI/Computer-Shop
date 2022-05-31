import React from 'react';
import { Wrapper } from './TitleContent.style';

const TitleContent = ({ product }) => {
    return (
        <Wrapper>
            <h1>{product.name}</h1>
            <p>
                od: <span>{product.brand}</span> | kod producenta: {product.specification.producent_code.description} |{' '}
                {product.specification.Xigi_code.description}{' '}
            </p>
        </Wrapper>
    );
};

export default TitleContent;
