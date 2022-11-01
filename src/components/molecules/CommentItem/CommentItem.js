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
} from './CommentItem.style';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

import UserData from 'components/atoms/Comments/UserData/UserData';
import ContentData from 'components/atoms/Comments/ContentData/ContentData';
import Opinion from 'components/atoms/Comments/Opinion/Opinion';
import CommentsScore from 'components/atoms/Comments/CommentScore/CommentsScore';
import { FaCommentSlash } from 'react-icons/fa';

const CommentItem = ({ comments, waitForFetchComments, handleRefreshComments, handleChosenImage }) => {
    const { comments: commentsArray, length: displayedComments } = comments;

    const findImage = (url) => {
        const searchedElement_Index = comments.images.indexOf(url, 0);
        handleChosenImage(searchedElement_Index);
    };

    return (
        <Wrapper>
            {waitForFetchComments ? (
                <>
                    <LoadingAnimation loadingSize={15} />
                </>
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
                            {commentsArray.map((comment, index) => (
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
                                        <CommentsScore
                                            comment={comment}
                                            handleRefreshComments={handleRefreshComments}
                                        />
                                    </ContentSection>
                                </CommentSection>
                            ))}
                            <NoOpinionsLeft>
                                <p>Koniec opinii</p>
                            </NoOpinionsLeft>
                        </>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default CommentItem;
