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
    NoOpinionsLeft,
    UnWrap,
} from './CommentItem.style';
import { BsPerson, BsCheckCircle } from 'react-icons/bs';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { ImSad } from 'react-icons/im';
import Star from 'components/atoms/Star/Star';
import useAuth from 'hooks/useAuth';
import { addLike } from 'api/comments';
import { Separator } from 'components/atoms/Separator/Separator';
import { useState, useEffect } from 'react';
import useComments from 'hooks/comments/useComments';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

const CommentItem = ({ productId, refreshComments, handleRefreshComments }) => {
    const { auth } = useAuth();
    const [notLoggedIn, setNotLoggedIn] = useState([false, '']);
    const [readMore, setReadMore] = useState(false);
    const [comments, getComments, waitForFetchComments] = useComments(productId);
    const { comments: commentsArray, length: commentsSize } = comments;
    useEffect(() => {
        getComments();
    }, [refreshComments]);

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
            if (response === 403) {
                setNotLoggedIn([true, value[1]._id, 'Musisz być zalogowany']);
            } else if (response === 405) {
                setNotLoggedIn([true, value[1]._id, 'Możesz tylko zmienić swój wybór']);
            } else {
                setNotLoggedIn([false, '']);
                handleRefreshComments();
            }
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

    const readMoreSplit = (comment) => {
        let opinionSplit = [];
        opinionSplit.push(comment.substr(0, 300));
        comment.substr(300, 2000) !== '' && opinionSplit.push(comment.substr(300, 2000));
        return opinionSplit;
    };

    const checkBreakLine = (comment) => {
        return comment.split('也').map((sentence) => (
            <>
                {sentence} <br />
            </>
        ));
    };

    return (
        <Wrapper>
            {waitForFetchComments ? (
                <>
                    <LoadingAnimation />
                </>
            ) : (
                <>
                    {commentsSize === 0 ? (
                        <></>
                    ) : (
                        <>
                            <p>FilterSection</p>
                            <Separator />
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
                                                        return (
                                                            <Star opinionRating={comment.content.rating} rate={index} />
                                                        );
                                                    })}
                                                </StarsWrapper>
                                                <Dot>&#x2022;</Dot>

                                                <Date> {comment.date}</Date>
                                            </ContentData>
                                            <Opinion>
                                                {readMoreSplit(comment.content.description).length === 1 ? (
                                                    <>{checkBreakLine(readMoreSplit(comment.content.description)[0])}</>
                                                ) : (
                                                    <>
                                                        {checkBreakLine(readMoreSplit(comment.content.description)[0])}
                                                        <UnWrap onClick={() => setReadMore(!readMore)}>
                                                            {!readMore && '...Rozwiń dalej'}
                                                        </UnWrap>
                                                        {readMore && (
                                                            <>
                                                                {checkBreakLine(
                                                                    readMoreSplit(comment.content.description)[1]
                                                                )}
                                                                <UnWrap onClick={() => setReadMore(!readMore)}>
                                                                    Zwiń
                                                                </UnWrap>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </Opinion>
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
                        </>
                    )}
                    <NoOpinionsLeft>
                        <p>Koniec opinii</p>
                    </NoOpinionsLeft>
                </>
            )}
        </Wrapper>
    );
};

export default CommentItem;
