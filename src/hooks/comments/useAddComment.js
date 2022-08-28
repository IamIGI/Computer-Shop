import { useState } from 'react';
import { sendComment } from 'api/comments';

const useAddComment = (data) => {
    const [addCommentResponse, setAddCommentResponse] = useState({});
    const [waitForAddComment, setWaitForAddComment] = useState(false);

    async function fetchAddComment() {
        console.log(data);
        setWaitForAddComment(true);
        setAddCommentResponse(await sendComment(data));
        setWaitForAddComment(false);
    }

    const addComment = () => {
        fetchAddComment();
    };

    return [addCommentResponse, addComment, waitForAddComment];
};

export default useAddComment;
