import { AddComment, Description, Wrapper, Icon } from './ProductAddComment.style';
import { BuyButton } from '../ProductBuyContent/ProductBuyContent.style';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { FiThumbsUp } from 'react-icons/fi';

const ProductAddComment = ({ productName, handleOpen, comments }) => {
    const { auth } = useAuth();
    const [userAlreadyCommented, setUserAlreadyCommented] = useState(false);

    useEffect(() => {
        for (let i = 0; i < comments.length; i++) {
            if (comments.comments[i].userId === auth.id) {
                setUserAlreadyCommented(true);
                break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments.length]);

    return (
        <Wrapper>
            <Description>
                <h2>Masz ten produkt?</h2>
                <p>Oceń {productName} i pomóż innym w wyborze</p>
            </Description>
            <AddComment>
                {userAlreadyCommented ? (
                    <>
                        <p>Dziękujemy za opinię </p>
                        <Icon>
                            <FiThumbsUp />
                        </Icon>
                    </>
                ) : (
                    <BuyButton onClick={handleOpen}>Dodaj opinię</BuyButton>
                )}
            </AddComment>
        </Wrapper>
    );
};

export default ProductAddComment;
