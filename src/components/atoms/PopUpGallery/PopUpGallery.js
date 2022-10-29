import { ScrollButton } from 'components/molecules/CommentsImages/CommentsImages.style';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Wrapper, ImageContainer, SmallImagesContainer, SmallImage, SmallImageWrapper } from './PopUpGallery.style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const PopUpGallery = ({ images, addServerPrefix, initIndex }) => {
    const [index, setIndex] = useState(initIndex);
    const WrapperWidth = images.length * 90 + (images.length - 1) * 20;

    const scrollCommentImages = (direction) => {
        switch (direction) {
            case 'left':
                document.getElementById('containerBigImage').scrollLeft -= 110;
                break;
            case 'right':
                document.getElementById('containerBigImage').scrollLeft += 110;
                break;

            default:
                console.log('bad case value');
                break;
        }
    };

    return (
        <Wrapper>
            <ImageContainer>
                <img
                    src={addServerPrefix ? `http://localhost:5000/${images[index]}` : images[index]}
                    alt="Show product"
                    key={index}
                />
            </ImageContainer>
            <SmallImageWrapper>
                <SmallImagesContainer id="containerBigImage">
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
                <ScrollButton width={WrapperWidth} direction="right" onClick={() => scrollCommentImages('right')}>
                    <AiOutlineRight />
                </ScrollButton>
                <ScrollButton width={WrapperWidth} direction="left" onClick={() => scrollCommentImages('left')}>
                    <AiOutlineLeft />
                </ScrollButton>
            </SmallImageWrapper>
        </Wrapper>
    );
};

PopUpGallery.defaultProps = {
    initIndex: 0,
};

export default PopUpGallery;
