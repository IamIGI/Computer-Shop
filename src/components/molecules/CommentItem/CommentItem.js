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
    Alert,
    Icon4,
} from './CommentItem.style';
import { BsPerson, BsCheckCircle } from 'react-icons/bs';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { ImSad } from 'react-icons/im';
import Star from 'components/atoms/Star/Star';
import useAuth from 'hooks/useAuth';
import { addLike } from 'api/comments';
import { Separator } from 'components/atoms/Separator/Separator';
import { useState } from 'react';

const CommentItem = ({ commentsArray, commentsSize, productId, handleRefresh }) => {
    const { auth } = useAuth();
    const [notLoggedIn, setNotLoggedIn] = useState([false, '']);

    const onLikeComment = async (value) => {
        const data = {
            productId,
            commentId: value[1]._id,
            userId: Boolean(auth.id) ? auth.id : '',
            likes: {
                up: value[0],
            },
        };

        try {
            const response = await addLike(data);
            console.log(response);
            response === 403
                ? setNotLoggedIn([true, value[1]._id, 'Musisz być zalogowany'])
                : response === 405
                ? setNotLoggedIn([true, value[1]._id, 'Możesz tylko zmienić swój wybór'])
                : handleRefresh();
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    };

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
                                <Icon3 onClick={() => onLikeComment([true, comment])}>
                                    <AiOutlineLike />
                                </Icon3>
                                <LikeNumber>{comment.likes.up}</LikeNumber>
                                <Icon3 onClick={() => onLikeComment([false, comment])}>
                                    <AiOutlineDislike />
                                </Icon3>
                                <LikeNumber>{comment.likes.down}</LikeNumber>
                                <Alert>
                                    {notLoggedIn[0] && notLoggedIn[1] === comment._id ? (
                                        <>
                                            <>{notLoggedIn[2]}</>
                                            <Icon4>
                                                <ImSad />
                                            </Icon4>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </Alert>
                            </CommentScore>
                        </ContentSection>
                    </CommentSection>
                </>
            ))}
        </Wrapper>
    );
};

export default CommentItem;
