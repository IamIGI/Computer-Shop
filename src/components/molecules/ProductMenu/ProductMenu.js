import React from 'react';
import { Wrapper } from './ProductMenu.style';
import { BsChevronDoubleUp } from 'react-icons/bs';

const ProductMenu = () => {
    return (
        <>
            <Wrapper>
                <a href="#Top">
                    <BsChevronDoubleUp />
                </a>
                <a href="#Description">Opis</a>
                <a href="#Specification">Specyfikacja</a>
                <a href="#Opinions">Opinie</a>
            </Wrapper>
        </>
    );
};

export default ProductMenu;
