import { Wrapper, StarsWrapper, Date, Dot } from './ContentData.style';
import Star from 'components/atoms/Star/Star';
const ContentData = ({ comment }) => {
    const handleDate = (date) => {
        return date.substr(0, 10);
    };
    return (
        <Wrapper>
            <StarsWrapper>
                {[...Array(6)].map((star, index) => {
                    index += 1;
                    return <Star opinionRating={comment.content.rating} rate={index} key={index} />;
                })}
            </StarsWrapper>
            <Dot>&#x2022;</Dot>

            <Date> {handleDate(comment.date)}</Date>
        </Wrapper>
    );
};

export default ContentData;
