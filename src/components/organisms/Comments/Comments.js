import { Wrapper } from './Comments.style';
import { useEffect, useState } from 'react';
import useProduct from 'hooks/useProduct';
import CommentItem from 'components/molecules/CommentItem/CommentItem';
import { getAllComments } from 'api/comments';

const Comments = ({
    refreshComments,
    filterComments,
    handleComments,
    comments,
    handleRefreshComments,
    handleChosenImage,
}) => {
    const [waitForFetchComments, setWaitForFetchComments] = useState(false);
    const { product } = useProduct();

    useEffect(() => {
        const fetchComments = async (data) => {
            setWaitForFetchComments(true);
            handleComments(await getAllComments(data));
            setWaitForFetchComments(false);
        };

        fetchComments(filterComments);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshComments, filterComments, product]);

    return (
        <Wrapper>
            <CommentItem
                comments={comments}
                waitForFetchComments={waitForFetchComments}
                handleRefreshComments={handleRefreshComments}
                handleChosenImage={handleChosenImage}
            />
        </Wrapper>
    );
};

export default Comments;
