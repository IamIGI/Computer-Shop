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
    const [refreshComments, setRefreshComments] = useState(false);

    const handleRefreshComments = () => {
        setRefreshComments(!refreshComments);
    };

    return (
        <Wrapper id="Opinions">
            <SectionDescription title={'Opinie'} icon={<BiCommentDetail />} />
            <ProductSummary handleRefreshComments={handleRefreshComments} />
            <CommentItem
                productId={product._id}
                refreshComments={refreshComments}
                handleRefreshComments={handleRefreshComments}
            />
        </Wrapper>
    );
};

export default Comments;
