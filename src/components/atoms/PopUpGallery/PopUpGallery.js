import React from 'react';
import ProductGallery from '../ProductGallery/ProductGallery';
import { Wrapper } from './PopUpGallery.style';

const PopUpGallery = ({ images }) => {
    return (
        <Wrapper>
            <ProductGallery images={images} />
        </Wrapper>
    );
};

export default PopUpGallery;
