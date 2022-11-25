import React from 'react';
import { ProductDescription, ProductImage, ProductQuantity, Wrapper } from './OrderProductElement.style';

const OrderProductElement = ({ product }) => {
    return (
        <Wrapper to={`/product/${product._id}`} key={product._id}>
            <ProductImage>
                <img src={product.prevImg} alt="images of product" />
            </ProductImage>
            <ProductDescription>
                <p>{product.name}</p>
                <p>
                    {product.price} zł &emsp;
                    {product.isDiscount ? <span>{product.priceBeforeDiscount} zł</span> : <></>}
                </p>
            </ProductDescription>
            <ProductQuantity>{product.quantity} szt.</ProductQuantity>
        </Wrapper>
    );
};

export default OrderProductElement;
