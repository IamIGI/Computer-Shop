import React, { useState } from 'react';
import { ImageContainer, SmallImage, SmallImagesContainer, Wrapper } from './ProductGallery.style';

const ProductGallery = ({ images }) => {
    const [index, setIndex] = useState(0);

    return (
        <Wrapper>
            <ImageContainer>
                <img src={images[index]} alt="Show product" key={index} />
            </ImageContainer>
            <SmallImagesContainer>
                {images.map((item, i) => (
                    <SmallImage
                        key={i}
                        src={item}
                        alt="products gallery"
                        onMouseEnter={() => setIndex(i)}
                        border={i === index ? true : false}
                    />
                ))}
            </SmallImagesContainer>
        </Wrapper>
    );
};

export default ProductGallery;
