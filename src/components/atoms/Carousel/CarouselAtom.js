import React from 'react';
import { CarouselComponent } from './CarouselAtom.style';

const CarouselAtom = ({ images }) => {
    return (
        <>
            <CarouselComponent>
                {images.map((image, index) => (
                    <img src={image} alt="carousel" key={index} />
                ))}
            </CarouselComponent>
        </>
    );
};

export default CarouselAtom;
