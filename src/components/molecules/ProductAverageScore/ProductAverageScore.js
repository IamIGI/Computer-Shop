import { Wrapper } from './ProductAverageScore.style';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useAverageScore from 'hooks/useAverageScore';
import { useEffect } from 'react';

const ProductAverageScore = ({ productId }) => {
    const [averageScore, getAverageScore, waitForFetchAS] = useAverageScore(productId);

    useEffect(() => {
        getAverageScore();
    }, []);

    return (
        <Wrapper>
            {/* <p>AverageScore Section </p>
            {waitForFetchAS ? (
                <>
                    <LoadingAnimation />
                </>
            ) : Object.keys(averageScore).length == 0 ? (
                <>
                    <p>Brak Ocen</p>
                </>
            ) : (
                <>
                    <ul>
                        <li>
                            {averageScore.numberOfComments} - {averageScore.averageScore_View} -{' '}
                            {averageScore.averageScore_Stars}
                        </li>
                        <li>
                            {' '}
                            <ul>
                                <li>One: {averageScore.eachScore.one}</li>
                                <li>Two: {averageScore.eachScore.two}</li>
                                <li>Three: {averageScore.eachScore.three}</li>
                                <li>Four: {averageScore.eachScore.four}</li>
                                <li>Five: {averageScore.eachScore.five}</li>
                                <li>Six: {averageScore.eachScore.six}</li>
                            </ul>
                        </li>
                    </ul>
                </>
            )} */}
        </Wrapper>
    );
};

export default ProductAverageScore;
