import { NumberOfOpinions, Score, Stars, Wrapper } from './ProductAverageScore.style';

import Star from 'components/atoms/Star/Star';
const ProductAverageScore = ({ averageScore }) => {
    return (
        <Wrapper>
            <Score>
                {averageScore.averageScore_View}
                <span>/6</span>
            </Score>
            <Stars>
                {[...Array(6)].map((star, index) => {
                    index += 1;
                    return <Star opinionRating={averageScore.averageScore_Stars} rate={index} />;
                })}
            </Stars>
            <NumberOfOpinions>({averageScore.numberOfComments} opinii)</NumberOfOpinions>
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
