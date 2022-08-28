import ProductAverageScore from 'components/molecules/ProductAverageScore/ProductAverageScore';
import ProductEachScore from 'components/molecules/ProductEachScore/ProductEachScore';
import React from 'react';
import useAverageScore from 'hooks/useAverageScore';
import { NoComments, Wrapper } from './ProductSummary.style';
import { useState, useEffect } from 'react';
import ProductAddComment from 'components/molecules/ProductAddComment/ProductAddComment';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { BsArrowRight } from 'react-icons/bs';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAddComment from 'components/molecules/PopUpAddComment/PopUpAddComment';

const ProductSummary = ({ productId, productName, productPrevImg }) => {
    const [averageScore, getAverageScore, waitForFetchAS] = useAverageScore(productId);
    const [isOpen, setIsOpen] = useState([false]);

    useEffect(() => {
        getAverageScore();
    }, []);

    const handleOpen = () => {
        setIsOpen([true]);
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
            <ProductAddComment productName={productName} handleOpen={handleOpen} />
            <Modal position={[25, -86]} width={700} open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpAddComment
                    onClose={() => setIsOpen([false])}
                    name={productName}
                    prevImg={productPrevImg}
                    productId={productId}
                />
            </Modal>
        </Wrapper>
    );
};

export default ProductSummary;
