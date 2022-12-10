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
import { getProductAverageScore } from 'api/comments';
import useComment from 'hooks/useComment';
import { useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';

const ProductSummary = () => {
    const product = useSelector(getProductById);
    const { comments, refreshComments, waitForFetchAS, handleAverageScore, handleWaitForFetchAS } = useComment();

    const [isOpen, setIsOpen] = useState([false]);

    const handleOpen = () => {
        setIsOpen([true]);
    };

    useEffect(() => {
        const fetchAverageScore = async (productID) => {
            handleWaitForFetchAS(true);
            handleAverageScore(await getProductAverageScore(productID));
            handleWaitForFetchAS(false);
        };
        fetchAverageScore(product._id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshComments, product]);

    return (
        <Wrapper>
            {waitForFetchAS ? (
                <>
                    <LoadingAnimation loadingSize={10} />
                </>
            ) : (
                <>
                    {comments?.length_AllComments === 0 ? (
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
            )}
            <ProductAddComment handleOpen={handleOpen} />
            <Modal open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpAddComment onClose={() => setIsOpen([false])} />
            </Modal>
        </Wrapper>
    );
};

export default ProductSummary;
