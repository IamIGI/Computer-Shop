import { Wrapper, CommentSection, ContentSection, NoOpinionsLeft } from './CommentItem.style';

import { Separator } from 'components/atoms/Separator/Separator';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

import UserData from 'components/atoms/Comments/UserData/UserData';
import ContentData from 'components/atoms/Comments/ContentData/ContentData';
import Opinion from 'components/atoms/Comments/Opinion/Opinion';
import CommentsScore from 'components/atoms/Comments/CommentScore/CommentsScore';

const CommentItem = ({ comments, waitForFetchComments, handleRefreshComments }) => {
    const { comments: commentsArray, length: commentsSize } = comments;

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
                            <Separator />
                            {commentsArray.map((comment) => (
                                <>
                                    <CommentSection key={comment._id}>
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
