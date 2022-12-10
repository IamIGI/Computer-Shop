import { Bar, QuantityOfGivenScore, ScoreStar, Wrapper, Number, Icon } from './ProductEachScore.style';
import { MdStar } from 'react-icons/md';
import useComment from 'hooks/useComment';
import { useEffect } from 'react';

const ProductEachScore = ({ errorFix }) => {
    const { averageScore } = useComment();
    // console.log(averageScore);

    // useEffect(() => {
    //     console.log(errorFix);
    // }, [errorFix]);

    return (
        <Wrapper>
            {errorFix > 0 &&
                averageScore.eachScore
                    .slice(0)
                    .reverse()
                    .map((score, index) => (
                        <QuantityOfGivenScore key={index}>
                            <ScoreStar>
                                <Icon>
                                    <MdStar />
                                </Icon>
                                {index * -1 + 6}
                            </ScoreStar>
                            {/* {console.log(score.percentage)} */}
                            <Bar percentage={score.percentage}>
                                <div />
                            </Bar>
                            <Number>{score.number}</Number>
                        </QuantityOfGivenScore>
                    ))}
        </Wrapper>
    );
};

export default ProductEachScore;
