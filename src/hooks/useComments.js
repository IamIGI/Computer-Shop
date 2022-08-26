import { useState } from 'react';
import { getAllComments } from 'api/comments';

const useComments = (productId) => {
    const [comments, setComment] = useState([]);
    const [waitForFetchComments, setWaitForFetchComments] = useState(false);

    //get all comments

    const fetchComment = async () => {
        setWaitForFetchComments(true);
        setComment(await getAllComments(productId));
        setWaitForFetchComments(false);
    };
    const getComments = () => {
        fetchComment();
    };

    return [comments, getComments, waitForFetchComments];
};

export default useComments;
