import { Wrapper, Image, OutsideWrapper } from './CommentsImages.style';
import { ScrollButton } from 'components/atoms/ScrollButton/ScrollButton.style';
import Modal from 'components/atoms/Modal/Modal';
import PopUpGallery from 'components/atoms/PopUpGallery/PopUpGallery';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useState } from 'react';
import useComment from 'hooks/useComment';

const CommentsImages = () => {
    const { chosenImage, comments, isOpenGallery, handleChosenImage, handleOpenModalGallery } = useComment();
    const sumOfElementsWidth = comments.images.length * 90 + (comments.images.length - 1) * 20;

    const [divWidth, setDivWidth] = useState(10000);
    setInterval(async () => {
        setDivWidth(document.getElementById('container') !== null && document.getElementById('container').offsetWidth);
    }, 2000);

    const scrollCommentImages = (direction) => {
        switch (direction) {
            case 'left':
                document.getElementById('container').scrollLeft -= 110;
                break;
            case 'right':
                document.getElementById('container').scrollLeft += 110;
                break;

            default:
                console.log('bad case value');
                break;
        }
    };

    return (
        <>
            {comments.images.length > 0 && (
                <>
                    <OutsideWrapper numberOfImages={comments.images.length}>
                        <Wrapper id="container">
                            {comments.images.map((urlImage, index) => (
                                <Image
                                    id={`CommentImage_${index}`}
                                    key={index}
                                    src={`http://localhost:5000/${urlImage}`}
                                    alt="z node"
                                    onClick={() => handleChosenImage(index)}
                                />
                            ))}
                        </Wrapper>
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
                    </OutsideWrapper>
                    <Modal open={isOpenGallery} onClose={() => handleOpenModalGallery([false])}>
                        <PopUpGallery images={comments.images} addServerPrefix={true} initIndex={chosenImage} />
                    </Modal>
                </>
            )}
        </>
    );
};

export default CommentsImages;
