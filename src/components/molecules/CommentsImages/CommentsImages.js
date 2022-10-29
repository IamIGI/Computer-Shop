import { Wrapper, Image, ScrollButton, OutsideWrapper } from './CommentsImages.style';
import Modal from 'components/atoms/Modal/Modal';
import PopUpGallery from 'components/atoms/PopUpGallery/PopUpGallery';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const CommentsImages = ({ commentImages, isOpen, chosenImage, handleChosenImage, handleOpenModal }) => {
    const WrapperWidth = commentImages.length * 90 + (commentImages.length - 1) * 20;

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
            {commentImages.length > 0 && (
                <>
                    <OutsideWrapper numberOfImages={commentImages.length}>
                        <Wrapper id="container">
                            {commentImages.map((urlImage, index) => (
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
                            width={WrapperWidth}
                            direction="right"
                            onClick={() => scrollCommentImages('right')}
                        >
                            <AiOutlineRight />
                        </ScrollButton>
                        <ScrollButton width={WrapperWidth} direction="left" onClick={() => scrollCommentImages('left')}>
                            <AiOutlineLeft />
                        </ScrollButton>
                    </OutsideWrapper>
                    <Modal open={isOpen} onClose={() => handleOpenModal([false])}>
                        <PopUpGallery images={commentImages} addServerPrefix={true} initIndex={chosenImage} />
                    </Modal>
                </>
            )}
        </>
    );
};

export default CommentsImages;
