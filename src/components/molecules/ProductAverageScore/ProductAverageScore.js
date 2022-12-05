import { NumberOfOpinions, Score, Stars, Wrapper } from './ProductAverageScore.style';
import Star from 'components/atoms/Star/Star';
import useComment from 'hooks/useComment';
const ProductAverageScore = () => {
    const { averageScore } = useComment();
    return (
        <Wrapper>
            <Score>
                {averageScore.averageScore_View}
                <span>/6</span>
            </Score>
            <Stars>
                {[...Array(6)].map((star, index) => {
                    index += 1;
                    return <Star opinionRating={averageScore.averageScore_Stars} rate={index} key={index} />;
                })}
            </Stars>
            <NumberOfOpinions>({averageScore.numberOfComments} opinii)</NumberOfOpinions>
        </Wrapper>
    );
};

export default ProductAverageScore;
