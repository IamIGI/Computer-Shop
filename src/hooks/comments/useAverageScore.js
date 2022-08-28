import { useState } from 'react';
import { getProductAverageScore } from 'api/comments';

const useAverageScore = (productId) => {
    const [averageScore, setAverageScore] = useState({});
    const [waitForFetchAS, setWaitForFetchAS] = useState(false);

    const fetchAverageScore = async () => {
        setWaitForFetchAS(true);
        setAverageScore(await getProductAverageScore(productId));
        setWaitForFetchAS(false);
    };

    const getAverageScore = () => {
        fetchAverageScore();
    };

    return [averageScore, getAverageScore, waitForFetchAS];
};

export default useAverageScore;
