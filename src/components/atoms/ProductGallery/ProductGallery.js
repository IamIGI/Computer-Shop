import React, { useState } from 'react';
import { ImageContainer, SmallImage, SmallImagesContainer, Wrapper } from './ProductGallery.style';
import Modal from 'components/atoms/Modal/Modal';
import PopUpGallery from '../PopUpGallery/PopUpGallery';

const ProductGallery = ({ images }) => {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState([false]);

    return (
        <Wrapper>
            <ImageContainer>
                <img src={images[index]} alt="Show product" key={index} onClick={() => setIsOpen([true])} />
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
            <Modal position={[25, -86]} open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpGallery images={images} />
            </Modal>
        </Wrapper>
    );
};

export default ProductGallery;
