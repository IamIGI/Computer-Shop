import { Wrapper, OptionSection, OptionIcon, OptionDescription } from './ProductHandyMenu.style';
import { BsPrinter } from 'react-icons/bs';
import { BASE_URL } from 'data/GlobalVariables';
import useProduct from 'hooks/useProduct';

const ProductHandyMenu = () => {
    const { product } = useProduct();
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
