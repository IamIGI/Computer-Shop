import { Bar, QuantityOfGivenScore, ScoreStar, Wrapper, Number, Icon } from './ProductEachScore.style';
import { MdStar } from 'react-icons/md';
const ProductEachScore = ({ averageScore }) => {
    return (
        <Wrapper>
            {averageScore.eachScore.map((score, index) => (
                <QuantityOfGivenScore key={index}>
                    <ScoreStar>
                        <Icon>
                            <MdStar />
                        </Icon>
                        {index + 1}
                    </ScoreStar>
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
