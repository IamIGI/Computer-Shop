// https://www.npmjs.com/package/react-responsive-carousel
import React from 'react';
import { Carousel_ } from './CarouselAtom.style';

const CarouselAtom = ({ images }) => {
    // console.log(images);
    return (
        <>
            <Carousel_>
                {images.map((image) => (
                    <img src={image} />
                ))}
            </Carousel_>
        </>
    );
};

export default CarouselAtom;
