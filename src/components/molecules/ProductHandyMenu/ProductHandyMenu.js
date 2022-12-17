import { Wrapper, OptionSection, OptionIcon, OptionDescription } from './ProductHandyMenu.style';
import { BsPrinter } from 'react-icons/bs';
import { BASE_URL } from 'data/URL';
import { useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';

const ProductHandyMenu = () => {
    const product = useSelector(getProductById);
    return (
        <Wrapper>
            <a href={`${BASE_URL}/products/pdf/${product._id}`}>
                <OptionSection>
                    <OptionIcon>
                        <BsPrinter />
                    </OptionIcon>
                    <OptionDescription>Drukuj</OptionDescription>
                </OptionSection>
            </a>
        </Wrapper>
    );
};

export default ProductHandyMenu;
