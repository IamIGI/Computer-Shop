import { useContext } from 'react';
import CommentsContext from 'context/CommentsProvider';

const useComment = () => {
    return useContext(CommentsContext);
};

export default useComment;
