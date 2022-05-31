import React from 'react';
import { Wrapper } from './PrevDataProduct.style';
import { BsChevronDoubleDown } from 'react-icons/bs';

const PrevDataProduct = ({ productData: { processor, ram, graphic_card, screen_size } }) => {
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
            <p>
                <a href="#Specification">
                    {' '}
                    <span>
                        <BsChevronDoubleDown />
                    </span>{' '}
                    Przewiń do pełnej specyfikacji
                </a>
            </p>
        </Wrapper>
    );
};
export default PrevDataProduct;
