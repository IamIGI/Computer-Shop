import {
    Wrapper,
    CommentSection,
    ContentSection,
    NoOpinionsLeft,
    NoOpinionsLeftSection,
    IconNoOpinionsLeft,
    DescriptionNoOpinionsLeft,
} from './CommentItem.style';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

import UserData from 'components/atoms/Comments/UserData/UserData';
import ContentData from 'components/atoms/Comments/ContentData/ContentData';
import Opinion from 'components/atoms/Comments/Opinion/Opinion';
import CommentsScore from 'components/atoms/Comments/CommentScore/CommentsScore';
import { FaCommentSlash } from 'react-icons/fa';

const CommentItem = ({ comments, waitForFetchComments, handleRefreshComments }) => {
    const { comments: commentsArray, length: displayedComments } = comments;

    return (
        <Wrapper>
            {waitForFetchComments ? (
                <>
                    <LoadingAnimation loadingSize={15} />
                </>
            ) : (
                <>
                    {displayedComments === 0 ? (
                        <NoOpinionsLeftSection>
                            <IconNoOpinionsLeft>
                                <FaCommentSlash />
                            </IconNoOpinionsLeft>
                            <DescriptionNoOpinionsLeft>Brak opinii dla tego wyszukiwania</DescriptionNoOpinionsLeft>
                        </NoOpinionsLeftSection>
                    ) : (
                        <>
                            {commentsArray.map((comment, index) => (
                                <CommentSection key={index}>
                                    <UserData comment={comment} />
                                    <ContentSection>
                                        <ContentData comment={comment} />
                                        <Opinion comment={comment} />
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
