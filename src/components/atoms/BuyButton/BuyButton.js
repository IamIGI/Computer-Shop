import React from 'react';
import { StyledButton } from './BuyButton.styles';
import { BsCartPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addProductToBasket } from 'features/basket/basketSlice';

const BuyButton = ({ item }) => {
    const basketDispatch = useDispatch();

    const product = item;

    return (
        <StyledButton onClick={() => basketDispatch(addProductToBasket({ product, quantity: 1 }))}>
            <BsCartPlus />
        </StyledButton>
    );
};

export default BuyButton;
