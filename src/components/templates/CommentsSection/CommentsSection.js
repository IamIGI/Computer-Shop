import { Wrapper } from './CommentsSection.style';
import CommentFilters from '../../molecules/CommentFilters/CommentFilters';

import ProductSummary from 'components/organisms/ProductSummary/ProductSummary';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BiCommentDetail } from 'react-icons/bi';
import CommentsImages from 'components/molecules/CommentsImages/CommentsImages';

import useComment from 'hooks/useComment';

import Comments from 'components/molecules/Comments/Comments';

const CommentsSection = () => {
    const { comments } = useComment();

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
