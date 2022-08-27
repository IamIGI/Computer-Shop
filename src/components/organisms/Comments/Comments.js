import { Wrapper } from './Comments.style';
import { useEffect } from 'react';
import { Separator } from 'components/atoms/Separator/Separator';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useComments from 'hooks/useComments';
import { BiCommentDetail } from 'react-icons/bi';
import ProductSummary from '../ProductSummary/ProductSummary';

const Comments = ({ productId, productName, productPrevImg }) => {
    const [comments, getComments, waitForFetchComments] = useComments(productId);

    useEffect(() => {
        getComments();
    }, []);

    return (
        <Wrapper id="Opinions">
            <SectionDescription title={'Opinie'} icon={<BiCommentDetail />} />
            <ProductSummary productId={productId} productName={productName} productPrevImg={productPrevImg} />
            <Separator />
            <p>FilterSection</p>
            <Separator />
            <p>CommentsSection</p>
            {waitForFetchComments ? (
                <>
                    <LoadingAnimation />
                </>
            ) : (
                <>
                    {comments.length === 0 ? (
                        <p>Brak komentarzy</p>
                    ) : (
                        <ul>
                            {comments.map((item, index) => (
                                <div key={item._id}>
                                    <li>
                                        Imie: {item.userName} - {item.confirmed && 'Potwierdzony'}
                                    </li>
                                    <li>
                                        Ocena: {item.content.rating} - {item.date} <br /> {item.content.description}{' '}
                                    </li>
                                    <li>
                                        Bilans lików: {item.likes.up} - {item.likes.down}{' '}
                                    </li>
                                    <p>----------------------</p>
                                </div>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default Comments;
