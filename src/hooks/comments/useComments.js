import { useState } from 'react';
import { getAllComments } from 'api/comments';

const useComments = (data) => {
    const [comments, setComment] = useState([]);
    const [waitForFetchComments, setWaitForFetchComments] = useState(false);

    //get all comments

    const fetchComment = async () => {
        setWaitForFetchComments(true);
        setComment(await getAllComments(data));
        setWaitForFetchComments(false);
    };
    const getComments = () => {
        fetchComment();
    };

    return [comments, getComments, waitForFetchComments];
};

export default useComments;
