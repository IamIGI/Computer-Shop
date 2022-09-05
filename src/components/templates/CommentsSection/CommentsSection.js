import { Wrapper } from './CommentsSection.style';
import Comments from 'components/organisms/Comments/Comments';
import CommentFilters from '../../molecules/CommentFilters/CommentFilters';
import { useState } from 'react';
import ProductSummary from 'components/organisms/ProductSummary/ProductSummary';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BiCommentDetail } from 'react-icons/bi';

const CommentsSection = ({ product }) => {
    const [waitForFetchAS, setWaitForFetchAS] = useState(false);
    const [refreshComments, setRefreshComments] = useState(false);
    const [averageScore, setAverageScore] = useState({});
    const [comments, setComment] = useState([]);
    const [filterComments, setFilterComments] = useState({
        productId: product._id,
        filters: { rating: 0, confirmed: false },
        sortBy: 'date',
    });
    const handleFilters = (data) => {
        setFilterComments(data);
    };

    const handleComments = (data) => {
        setComment(data);
    };

    const handleRefreshComments = () => {
        setRefreshComments(!refreshComments);
    };

    const handleAverageScore = (data) => {
        setAverageScore(data);
    };

    const handleWaitForFetchAS = (data) => {
        setWaitForFetchAS(data);
    };

    return (
        <Wrapper>
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
            <CommentFilters handleFilters={handleFilters} comments={comments} />
            <Comments
                comments={comments}
                refreshComments={refreshComments}
                filterComments={filterComments}
                handleComments={handleComments}
                handleRefreshComments={handleRefreshComments}
            />
        </Wrapper>
    );
};

export default CommentsSection;
