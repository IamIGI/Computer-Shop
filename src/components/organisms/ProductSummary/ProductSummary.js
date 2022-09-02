import ProductAverageScore from 'components/molecules/ProductAverageScore/ProductAverageScore';
import ProductEachScore from 'components/molecules/ProductEachScore/ProductEachScore';
import React from 'react';
import useAverageScore from 'hooks/comments/useAverageScore';
import { NoComments, Wrapper } from './ProductSummary.style';
import { useState, useEffect } from 'react';
import ProductAddComment from 'components/molecules/ProductAddComment/ProductAddComment';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { BsArrowRight } from 'react-icons/bs';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAddComment from 'components/molecules/PopUpAddComment/PopUpAddComment';
import useProduct from 'hooks/useProduct';
import useComments from 'hooks/comments/useComments';

const ProductSummary = ({ handleRefreshComments }) => {
    const { product } = useProduct();
    const [averageScore, getAverageScore, waitForFetchAS] = useAverageScore(product._id);
    const dataInit = { productId: product._id, filters: { rating: 0, confirmed: 2 }, sortBy: 'date' };
    const [comments, getComments] = useComments(dataInit);
    const [isOpen, setIsOpen] = useState([false]);
    const [refreshProductSummary, setRefreshProductSummary] = useState();

    useEffect(() => {
        getComments();
        getAverageScore();
    }, [refreshProductSummary]);

    const handleOpen = () => {
        setIsOpen([true]);
    };

    const handleRefreshProductSummary = () => {
        setRefreshProductSummary(!refreshProductSummary);
    };

    return (
        <Wrapper>
            {waitForFetchAS ? (
                <>
                    <LoadingAnimation />
                </>
            ) : (
                <>
                    {Object.keys(averageScore).length === 0 ? (
                        <NoComments>
                            <p>
                                Masz ten produkt? <br /> Bądź pierwszą osobą która skomentuje
                            </p>
                            <div>
                                <BsArrowRight />
                            </div>
                        </NoComments>
                    ) : (
                        <>
                            <ProductAverageScore averageScore={averageScore} />
                            <ProductEachScore averageScore={averageScore} />
                        </>
                    )}
                </>
            )}
            <ProductAddComment productName={product.name} handleOpen={handleOpen} comments={comments} />
            <Modal position={[25, -86]} width={700} open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpAddComment
                    onClose={() => setIsOpen([false])}
                    name={product.name}
                    prevImg={product.prevImg}
                    productId={product._id}
                    handleRefreshComments={handleRefreshComments}
                    handleRefreshProductSummary={handleRefreshProductSummary}
                />
            </Modal>
        </Wrapper>
    );
};

export default ProductSummary;
