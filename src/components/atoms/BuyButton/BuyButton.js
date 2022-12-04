import React from 'react';
import { StyledButton } from './BuyButton.styles';
import useBasket from 'hooks/useBasket';
import { BsCartPlus } from 'react-icons/bs';

const BuyButton = ({ item }) => {
    const { addProductToBasket } = useBasket();
    const product = item;

    return (
        <StyledButton onClick={() => addProductToBasket(product, 1)}>
            <BsCartPlus />
        </StyledButton>
    );
};

export default BuyButton;
