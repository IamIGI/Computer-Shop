import React from 'react';
import { Wrapper, SpecificationDescription, Icon, SpecificationLinkSection } from './PrevDataProduct.style';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { getProductById } from 'features/products/productsSlice';
import { useSelector } from 'react-redux';

const PrevDataProduct = () => {
    const product = useSelector(getProductById);
    const { processor, ram, graphic_card, screen_size } = product.prevDataProduct;
    return (
        <Wrapper>
            <ul>
                <li>
                    <span>Procesor:</span> {processor}
                </li>
                <li>
                    <span>Pamięc:</span> {ram}
                </li>
                <li>
                    <span>Grafika:</span> {graphic_card}
                </li>
                <li>
                    <span>Przekątna ekranu:</span> {screen_size}
                </li>
            </ul>

            <a href="#Specification">
                <SpecificationLinkSection>
                    <span>
                        <Icon>
                            <BsChevronDoubleDown />
                        </Icon>
                    </span>
                    <SpecificationDescription>Przewiń do pełnej specyfikacji</SpecificationDescription>
                </SpecificationLinkSection>
            </a>
        </Wrapper>
    );
};
export default PrevDataProduct;
