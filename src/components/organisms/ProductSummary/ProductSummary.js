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
import useProduct from 'hooks/useProduct';
import { getProductAverageScore } from 'api/comments';

const ProductSummary = ({
    refreshComments,
    waitForFetchAS,
    comments,
    averageScore,
    handleRefreshComments,
    handleAverageScore,
    handleWaitForFetchAS,
}) => {
    const { product } = useProduct();
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
                            <ProductAverageScore averageScore={averageScore} />
                            <ProductEachScore averageScore={averageScore} errorFix={comments.length_AllComments} />
                        </InsideWrapper>
                    )}
                </>
            )}
            <ProductAddComment productName={product.name} handleOpen={handleOpen} comments={comments} />
            <Modal position={[25, -86]} open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpAddComment
                    onClose={() => setIsOpen([false])}
                    name={product.name}
                    prevImg={product.prevImg}
                    productId={product._id}
                    handleRefreshComments={handleRefreshComments}
                />
            </Modal>
        </Wrapper>
    );
};

export default ProductSummary;
