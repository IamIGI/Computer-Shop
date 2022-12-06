import { Wrapper } from './ProductMenu.style';
import { BsChevronDoubleUp } from 'react-icons/bs';
import useProduct from 'hooks/useProduct';

const ProductMenu = () => {
    const { product, addedComment } = useProduct();

    return (
        <Wrapper>
            <a href="#Top">
                <BsChevronDoubleUp />
            </a>
            <a href="#Description">Opis</a>
            <a href="#Specification">Specyfikacja</a>
            <a href="#Opinions">Opinie ({addedComment ? product.numberOfOpinions + 1 : product.numberOfOpinions})</a>
        </Wrapper>
    );
};

export default ProductMenu;
