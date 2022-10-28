import React, { useState } from 'react';
import { ImageContainer, SmallImage, SmallImagesContainer, Wrapper } from './ProductGallery.style';
import Modal from 'components/atoms/Modal/Modal';
import PopUpGallery from 'components/atoms/PopUpGallery/PopUpGallery';

const ProductGallery = ({ images, addServerPrefix }) => {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState([false]);
    const [chosenImage, setChoseImage] = useState(0);

    const handleChosenImage = (index) => {
        setChoseImage(index);
        setIsOpen([true]);
    };
    return (
        <Wrapper>
            <ImageContainer>
                <img src={images[index]} alt="Show product" key={index} onClick={() => handleChosenImage(index)} />
            </ImageContainer>
            <SmallImagesContainer>
                {images.map((item, i) => (
                    <SmallImage
                        key={i}
                        src={addServerPrefix ? `http://localhost:5000/${item}` : item}
                        alt="products gallery"
                        onMouseEnter={() => setIndex(i)}
                        border={i === index ? true : false}
                    />
                ))}
            </SmallImagesContainer>
            <Modal position={[25, -86]} open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpGallery images={images} addServerPrefix={false} initIndex={chosenImage} />
            </Modal>
        </Wrapper>
    );
};

export default ProductGallery;
