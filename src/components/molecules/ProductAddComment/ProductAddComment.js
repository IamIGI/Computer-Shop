import { AddComment, Description, Wrapper } from './ProductAddComment.style';
import { BuyButton } from '../ProductBuyContent/ProductBuyContent.style';

const ProductAddComment = ({ productName, handleOpen }) => {
    return (
        <Wrapper>
            <Description>
                <h2>Masz ten produkt?</h2>
                <p>Oceń {productName} i pomóż innym w wyborze</p>
            </Description>
            <AddComment>
                <BuyButton onClick={handleOpen}>
                    <p>Dodaj opinię</p>
                </BuyButton>
            </AddComment>
        </Wrapper>
    );
};

export default ProductAddComment;
