import { createContext, useState } from 'react';

const CommentsContext = createContext({});

export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState(
        JSON.parse(localStorage.getItem('currentWebPageComments')) == null
            ? {}
            : JSON.parse(localStorage.getItem('currentWebPageComments'))
    );

    localStorage.setItem('currentWebPageComments', JSON.stringify(comments));

    return <CommentsContext.Provider value={{ comments, setComments }}>{children}</CommentsContext.Provider>;
};

export default CommentsContext;
