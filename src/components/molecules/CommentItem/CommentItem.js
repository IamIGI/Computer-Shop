import {
    Wrapper,
    NumberOfComments,
    CommentSection,
    UserData,
    ContentSection,
    ContentData,
    Opinion,
    CommentScore,
    UserDataDescription,
    UserDataApproved,
    Icon1,
    Icon2,
    UserName,
    ApprovedDescription,
    StarsWrapper,
    Date,
    Dot,
    ScoreDescription,
    Icon3,
    LikeNumber,
} from './CommentItem.style';
import { BsPerson, BsCheckCircle } from 'react-icons/bs';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import Star from 'components/atoms/Star/Star';

import { Separator } from 'components/atoms/Separator/Separator';

const CommentItem = ({ commentsArray, commentsSize }) => {
    return (
        <Wrapper>
            <NumberOfComments>
                <p>
                    Wyniki: {commentsSize} z {commentsSize}
                </p>
            </NumberOfComments>
            <Separator />
            {commentsArray.map((comment) => (
                <>
                    <CommentSection key={comment._id}>
                        <UserData>
                            <UserDataDescription>
                                <Icon1>
                                    <BsPerson />
                                </Icon1>
                                <UserName>{comment.userName}</UserName>
                            </UserDataDescription>
                            <UserDataApproved>
                                {comment.confirmed && (
                                    <>
                                        <Icon2>
                                            <BsCheckCircle />
                                        </Icon2>
                                        <ApprovedDescription>Potwierdzony zakup</ApprovedDescription>
                                    </>
                                )}
                            </UserDataApproved>
                        </UserData>
                        <ContentSection>
                            <ContentData>
                                <StarsWrapper>
                                    {[...Array(6)].map((star, index) => {
                                        index += 1;
                                        return <Star opinionRating={comment.content.rating} rate={index} />;
                                    })}
                                </StarsWrapper>
                                <Dot>&#x2022;</Dot>

                                <Date> {comment.date}</Date>
                            </ContentData>
                            <Opinion>{comment.content.description} </Opinion>
                            <CommentScore>
                                <ScoreDescription>Czy ta opinia była pomocna?</ScoreDescription>{' '}
                                <Icon3>
                                    <AiOutlineLike />
                                </Icon3>
                                <LikeNumber>{comment.likes.up}</LikeNumber>
                                <Icon3>
                                    <AiOutlineDislike />
                                </Icon3>
                                <LikeNumber>{comment.likes.down}</LikeNumber>
                            </CommentScore>
                        </ContentSection>
                    </CommentSection>
                </>
            ))}
        </Wrapper>
    );
};

export default CommentItem;
