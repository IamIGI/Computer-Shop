import ProductAverageScore from 'components/molecules/ProductAverageScore/ProductAverageScore';
import ProductEachScore from 'components/molecules/ProductEachScore/ProductEachScore';
import React, { useEffect } from 'react';
import { NoComments, Wrapper, InsideWrapper } from './ProductSummary.style';
import { useState } from 'react';
import ProductAddComment from 'components/molecules/ProductAddComment/ProductAddComment';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { BsArrowRight } from 'react-icons/bs';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAddComment from 'components/molecules/PopUpAddComment/PopUpAddComment';
import { useSelector } from 'react-redux';
import {
    fetchAverageScore,
    getAllCommentsData,
    getAverageScoreStatus,
    getCommentsErrors,
    getCommentsStatus,
} from 'features/comments/commentsSlice';
import { store } from 'app/store';

const ProductSummary = () => {
    const comments = useSelector(getAllCommentsData);
    const commentsStatus = useSelector(getCommentsStatus);
    const averageScoreStatus = useSelector(getAverageScoreStatus);
    const errors = useSelector(getCommentsErrors);
    const [isOpen, setIsOpen] = useState([false]);

    const handleOpen = () => {
        setIsOpen([true]);
    };

    useEffect(() => {
        store.dispatch(fetchAverageScore());
    }, []);

    return (
        <Wrapper>
            {averageScoreStatus === 'loading' ? (
                <LoadingAnimation loadingSize={10} />
            ) : averageScoreStatus === 'succeeded' ? (
                <>
                    {commentsStatus === 'succeeded' && comments?.length_AllComments === 0 ? (
                        <NoComments>
                            <p>
                                Masz ten produkt? <br /> Bądź pierwszą osobą która skomentuje
                            </p>
                            <div>
                                <BsArrowRight />
                            </div>
                        </NoComments>
                    ) : (
                        <InsideWrapper>
                            <ProductAverageScore />
                            <ProductEachScore errorFix={comments.length_AllComments} />
                        </InsideWrapper>
                    )}
                </>
            ) : (
                <>{console.log(errors)}</>
            )}
            <ProductAddComment handleOpen={handleOpen} />
            <Modal open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpAddComment onClose={() => setIsOpen([false])} />
            </Modal>
        </Wrapper>
    );
};

export default ProductSummary;
