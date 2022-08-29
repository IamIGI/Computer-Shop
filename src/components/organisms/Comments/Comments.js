import { Wrapper } from './Comments.style';
import { useEffect, useState } from 'react';
import { Separator } from 'components/atoms/Separator/Separator';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useComments from 'hooks/comments/useComments';
import { BiCommentDetail } from 'react-icons/bi';
import ProductSummary from '../ProductSummary/ProductSummary';
import useProduct from 'hooks/useProduct';
import CommentItem from 'components/molecules/CommentItem/CommentItem';

const Comments = () => {
    const { product } = useProduct();
    const [comments, getComments, waitForFetchComments] = useComments(product._id);
    const { comments: commentsArray, length: commentsSize } = comments;
    console.log(commentsArray, commentsSize);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getComments();
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <Wrapper id="Opinions">
            <SectionDescription title={'Opinie'} icon={<BiCommentDetail />} />
            <ProductSummary refresh={refresh} handleRefresh={handleRefresh} comments={comments} />

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
                            <p>FilterSection</p>
                            <CommentItem commentsArray={commentsArray} commentsSize={commentsSize} />
                        </>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default Comments;
