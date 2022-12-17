import React, { useEffect, useState } from 'react';
import { ImageContainer, SmallImage, SmallImagesContainer, SmallImageWrapper, Wrapper } from './ProductGallery.style';
import Modal from 'components/atoms/Modal/Modal';
import PopUpGallery from 'components/atoms/PopUpGallery/PopUpGallery';
import { ScrollButton } from 'components/atoms/ScrollButton/ScrollButton.style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';
import { BASE_URL } from 'data/URL';

const ProductGallery = ({ addServerPrefix = false }) => {
    const product = useSelector(getProductById);
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState([false]);
    const [chosenImage, setChoseImage] = useState(0);
    const sumOfElementsWidth = product.img.length * 70 + (product.img.length - 1) * 20;

    const [divWidth, setDivWidth] = useState(10000);
    useEffect(() => {
        setInterval(async () => {
            setDivWidth(
                document.getElementById('containerProductGallery') !== null &&
                    document.getElementById('containerProductGallery').offsetWidth
            );
        }, 2000);
    }, []);

    const handleChosenImage = (index) => {
        setChoseImage(index);
        setIsOpen([true]);
    };

    const scrollCommentImages = (direction) => {
        switch (direction) {
            case 'left':
                document.getElementById('containerProductGallery').scrollLeft -= 90;
                break;
            case 'right':
                document.getElementById('containerProductGallery').scrollLeft += 90;
                break;

            default:
                console.log('bad case value');
                break;
        }
    };

    return (
        <Wrapper>
            <ImageContainer>
                <img src={product.img[index]} alt="Show product" key={index} onClick={() => handleChosenImage(index)} />
            </ImageContainer>
            <SmallImageWrapper>
                <SmallImagesContainer id="containerProductGallery">
                    {product.img.map((item, i) => (
                        <SmallImage
                            key={i}
                            src={addServerPrefix ? `${BASE_URL}/${item}` : item}
                            alt="products gallery"
                            onMouseEnter={() => setIndex(i)}
                            border={i === index ? true : false}
                        />
                    ))}
                </SmallImagesContainer>

                <ScrollButton
                    childWidth={sumOfElementsWidth}
                    parentWidth={divWidth}
                    direction="right"
                    onClick={() => scrollCommentImages('right')}
                >
                    <AiOutlineRight />
                </ScrollButton>
                <ScrollButton
                    childWidth={sumOfElementsWidth}
                    parentWidth={divWidth}
                    direction="left"
                    onClick={() => scrollCommentImages('left')}
                >
                    <AiOutlineLeft />
                </ScrollButton>
            </SmallImageWrapper>
            <Modal position={[25, -86]} open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpGallery images={product.img} addServerPrefix={false} initIndex={chosenImage} />
            </Modal>
        </Wrapper>
    );
};

export default ProductGallery;
