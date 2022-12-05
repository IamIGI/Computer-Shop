import {
    Wrapper,
    CommentSection,
    ContentSection,
    NoOpinionsLeft,
    NoOpinionsLeftSection,
    IconNoOpinionsLeft,
    DescriptionNoOpinionsLeft,
    ImagesSection,
    Image,
    BigScreen,
    SmallScreen,
    UserDataWhenSmallScreen,
    LoadCommentsButton,
} from './Comments.style';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

import UserData from 'components/atoms/Comments/UserData/UserData';
import ContentData from 'components/atoms/Comments/ContentData/ContentData';
import Opinion from 'components/atoms/Comments/Opinion/Opinion';
import CommentsScore from 'components/atoms/Comments/CommentScore/CommentsScore';
import { FaCommentSlash } from 'react-icons/fa';
import { useState } from 'react';
import useComment from 'hooks/useComment';

const CommentItem = () => {
    const { comments, handleRefreshComments, handleChosenImage, waitForFetchComments } = useComment();
    const { comments: commentsArray, length: displayedComments } = comments;
    const [limitViewedComments, setLimitViewedComments] = useState(5);

    const findImage = (url) => {
        const searchedElement_Index = comments.images.indexOf(url, 0);
        handleChosenImage(searchedElement_Index);
    };

    const handleLimitOfViewedComments = () => {
        setLimitViewedComments((prevValue) => {
            return prevValue + 5;
        });
    };

    return (
        <Wrapper>
            {waitForFetchComments ? (
                <LoadingAnimation loadingSize={15} />
            ) : (
                <>
                    {displayedComments === 0 ? (
                        <>
                            {!Boolean(comments) ? (
                                <></>
                            ) : (
                                <NoOpinionsLeftSection>
                                    <IconNoOpinionsLeft>
                                        <FaCommentSlash />
                                    </IconNoOpinionsLeft>
                                    <DescriptionNoOpinionsLeft>
                                        Brak opinii dla tego wyszukiwania
                                    </DescriptionNoOpinionsLeft>
                                </NoOpinionsLeftSection>
                            )}
                        </>
                    ) : (
                        <>
                            {commentsArray.slice(0, limitViewedComments).map((comment, index) => (
                                <CommentSection key={index}>
                                    <BigScreen>
                                        <UserData comment={comment} />
                                    </BigScreen>
                                    <ContentSection>
                                        <UserDataWhenSmallScreen>
                                            <SmallScreen>
                                                <UserData comment={comment} />
                                            </SmallScreen>
                                            <ContentData comment={comment} />
                                        </UserDataWhenSmallScreen>
                                        <Opinion comment={comment} />
                                        <ImagesSection>
                                            {comment.image.added ? (
                                                <>
                                                    {comment.image.images.map((url, index) => (
                                                        <Image
                                                            src={`http://localhost:5000/${url}`}
                                                            key={index}
                                                            alt="comment"
                                                            onClick={() => findImage(url)}
                                                        />
                                                    ))}
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </ImagesSection>
                                        <CommentsScore comment={comment} />
                                    </ContentSection>
                                </CommentSection>
                            ))}
                            {limitViewedComments < displayedComments ? (
                                <NoOpinionsLeft>
                                    <LoadCommentsButton onClick={() => handleLimitOfViewedComments()}>
                                        Więcej opinii ({commentsArray.length - limitViewedComments})
                                    </LoadCommentsButton>
                                </NoOpinionsLeft>
                            ) : (
                                <NoOpinionsLeft>
                                    <p>Koniec opinii</p>
                                </NoOpinionsLeft>
                            )}
                        </>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default CommentItem;
