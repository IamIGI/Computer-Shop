import { Wrapper } from './CommentsSection.style';
import Comments from 'components/organisms/Comments/Comments';
import CommentFilters from '../../molecules/CommentFilters/CommentFilters';
import { useState } from 'react';
import ProductSummary from 'components/organisms/ProductSummary/ProductSummary';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BiCommentDetail } from 'react-icons/bi';
import CommentsImages from 'components/molecules/CommentsImages/CommentsImages';

const CommentsSection = ({ product, handleRefreshProduct }) => {
    const [waitForFetchAS, setWaitForFetchAS] = useState(false);
    const [refreshComments, setRefreshComments] = useState(false);
    const [averageScore, setAverageScore] = useState({});
    const [comments, setComment] = useState([]);
    const [filterComments, setFilterComments] = useState({
        productId: product._id,
        filters: { rating: 0, confirmed: false },
        sortBy: 'date',
    });
    //open PopUpGallery
    const [isOpen, setIsOpen] = useState([false]);
    const [chosenImage, setChoseImage] = useState(0);

    const handleChosenImage = (index) => {
        console.log(index);
        setChoseImage(index);
        setIsOpen([true]);
    };

    const handleOpenModal = (data) => {
        setIsOpen(data);
    };

    const handleFilters = (data) => {
        setFilterComments(data);
    };

    const handleComments = (data) => {
        setComment(data);
    };

    const handleRefreshComments = () => {
        handleRefreshProduct();
        setRefreshComments(!refreshComments);
    };

    const handleAverageScore = (data) => {
        setAverageScore(data);
    };

    const handleWaitForFetchAS = (data) => {
        setWaitForFetchAS(data);
    };

    return (
        <Wrapper id="Opinions">
            <SectionDescription title={'Opinie'} icon={<BiCommentDetail />} />
            <ProductSummary
                refreshComments={refreshComments}
                comments={comments}
                averageScore={averageScore}
                handleRefreshComments={handleRefreshComments}
                handleAverageScore={handleAverageScore}
                waitForFetchAS={waitForFetchAS}
                handleWaitForFetchAS={handleWaitForFetchAS}
            />
            {comments.length > 0 && (
                <CommentsImages
                    commentImages={comments.images}
                    isOpen={isOpen}
                    chosenImage={chosenImage}
                    handleChosenImage={handleChosenImage}
                    handleOpenModal={handleOpenModal}
                />
            )}
            <CommentFilters handleFilters={handleFilters} comments={comments} />
            <Comments
                comments={comments}
                refreshComments={refreshComments}
                filterComments={filterComments}
                handleComments={handleComments}
                handleRefreshComments={handleRefreshComments}
                handleChosenImage={handleChosenImage}
            />
        </Wrapper>
    );
};

export default CommentsSection;
