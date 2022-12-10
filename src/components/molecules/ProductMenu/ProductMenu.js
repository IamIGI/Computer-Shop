import { Wrapper } from './ProductMenu.style';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getProductAddCommentFlag, getProductById } from 'features/products/productsSlice';

const ProductMenu = () => {
    const product = useSelector(getProductById);
    const addedCommentFlag = useSelector(getProductAddCommentFlag);

    return (
        <Wrapper>
            <a href="#Top">
                <BsChevronDoubleUp />
            </a>
            <a href="#Description">Opis</a>
            <a href="#Specification">Specyfikacja</a>
            <a href="#Opinions">
                Opinie ({addedCommentFlag ? product.numberOfOpinions + 1 : product.numberOfOpinions})
            </a>
        </Wrapper>
    );
};

export default ProductMenu;
