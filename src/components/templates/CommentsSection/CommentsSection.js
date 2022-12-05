import { Wrapper } from './CommentsSection.style';
import CommentFilters from '../../molecules/CommentFilters/CommentFilters';

import ProductSummary from 'components/organisms/ProductSummary/ProductSummary';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BiCommentDetail } from 'react-icons/bi';
import CommentsImages from 'components/molecules/CommentsImages/CommentsImages';

import useComment from 'hooks/useComment';
import { useEffect } from 'react';
import Comments from 'components/molecules/Comments/Comments';

const CommentsSection = ({ handleRefreshProduct }) => {
    const { comments, refreshComments } = useComment();

    useEffect(() => {
        handleRefreshProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshComments]);

    return (
        <Wrapper id="Opinions">
            <SectionDescription title={'Opinie'} icon={<BiCommentDetail />} />
            <ProductSummary />
            {comments.length > 0 && <CommentsImages />}
            <CommentFilters />
            <Comments />
        </Wrapper>
    );
};

export default CommentsSection;
