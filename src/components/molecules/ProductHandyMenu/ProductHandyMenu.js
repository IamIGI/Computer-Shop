import { Wrapper, OptionSection, OptionIcon, OptionDescription } from './ProductHandyMenu.style';
import { BsPrinter } from 'react-icons/bs';
import { BASE_URL } from 'data/GlobalVariables';

const ProductHandyMenu = ({ productId }) => {
    return (
        <Wrapper>
            <a href={`${BASE_URL}/products/pdf/${productId}`}>
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
