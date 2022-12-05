import { getAllComments } from 'api/comments';
import useProduct from 'hooks/useProduct';
import { createContext, useEffect, useState } from 'react';

const CommentsContext = createContext({});

export const CommentsProvider = ({ children }) => {
    const { product } = useProduct();

    const [comments, setComments] = useState([]);
    const [waitForFetchComments, setWaitForFetchComments] = useState(false);
    const [waitForFetchAS, setWaitForFetchAS] = useState(false);
    const [refreshComments, setRefreshComments] = useState(false);
    const [averageScore, setAverageScore] = useState({});
    const [filterComments, setFilterComments] = useState({
        productId: product._id,
        filters: { rating: 0, confirmed: false },
        sortBy: 'date',
    });

    //open PopUpGallery
    const [isOpenGallery, setIsOpenGallery] = useState([false]);
    const [chosenImage, setChoseImage] = useState(0);

    async function fetchComments(data) {
        setWaitForFetchComments(true);
        setComments(await getAllComments(data));
        setWaitForFetchComments(false);
    }

    useEffect(() => {
        fetchComments(filterComments);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshComments, filterComments, product]);

    const handleChosenImage = (index) => {
        setChoseImage(index);
        setIsOpenGallery([true]);
    };

    const handleOpenModalGallery = (data) => {
        setIsOpenGallery(data);
    };

    const handleFilters = (data) => {
        setFilterComments(data);
    };

    const handleComments = (data) => {
        setComments(data);
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
        <CommentsContext.Provider
            value={{
                comments,
                waitForFetchAS,
                refreshComments,
                averageScore,
                filterComments,
                isOpenGallery,
                chosenImage,
                waitForFetchComments,
                setComments,
                handleChosenImage,
                handleOpenModalGallery,
                handleFilters,
                handleComments,
                handleRefreshComments,
                handleAverageScore,
                handleWaitForFetchAS,
            }}
        >
            {children}
        </CommentsContext.Provider>
    );
};

export default CommentsContext;
