import { Wrapper } from './Comments.style';
import { useEffect, useState } from 'react';
import useProduct from 'hooks/useProduct';
import CommentItem from 'components/molecules/CommentItem/CommentItem';
import { getAllComments } from 'api/comments';

const Comments = ({ refreshComments, filterComments, handleComments, comments, handleRefreshComments }) => {
    const [waitForFetchComments, setWaitForFetchComments] = useState(false);
    const { product } = useProduct();
    console.log(product);
    useEffect(() => {
        const fetchComments = async (data) => {
            setWaitForFetchComments(true);
            handleComments(await getAllComments(data));
            setWaitForFetchComments(false);
        };

        fetchComments(filterComments);
    }, [refreshComments, filterComments, product]);

    return (
        <Wrapper id="Opinions">
            <CommentItem
                comments={comments}
                waitForFetchComments={waitForFetchComments}
                handleRefreshComments={handleRefreshComments}
            />
        </Wrapper>
    );
};

export default Comments;
