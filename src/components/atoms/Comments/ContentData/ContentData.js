import { Wrapper, StarsWrapper, Date, Dot } from './ContentData.style';
import Star from 'components/atoms/Star/Star';
const ContentData = ({ comment }) => {
    return (
        <Wrapper>
            <StarsWrapper>
                {[...Array(6)].map((star, index) => {
                    index += 1;
                    return <Star opinionRating={comment.content.rating} rate={index} />;
                })}
            </StarsWrapper>
            <Dot>&#x2022;</Dot>

            <Date> {comment.date}</Date>
        </Wrapper>
    );
};

export default ContentData;
