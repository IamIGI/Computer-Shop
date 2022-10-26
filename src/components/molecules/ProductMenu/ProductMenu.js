import { Wrapper } from './ProductMenu.style';
import { BsChevronDoubleUp } from 'react-icons/bs';

const ProductMenu = ({ numberOfOpinions }) => {
    return (
        <Wrapper>
            <a href="#Top">
                <BsChevronDoubleUp />
            </a>
            <a href="#Description">Opis</a>
            <a href="#Specification">Specyfikacja</a>
            <a href="#Opinions">Opinie ({numberOfOpinions})</a>
        </Wrapper>
    );
};

export default ProductMenu;
