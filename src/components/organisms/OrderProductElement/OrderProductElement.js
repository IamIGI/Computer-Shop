import React from 'react';
import { ProductDescription, ProductImage, ProductQuantity, Wrapper } from './OrderProductElement.style';
import formatPrices from 'helpers/formatPrices';

const OrderProductElement = ({ product }) => {
    return (
        <Wrapper to={`/product/${product._id}`} key={product._id}>
            <ProductImage>
                <img src={product.prevImg} alt="images of product" />
            </ProductImage>
            <ProductDescription>
                <p>{product.name}</p>
                <p>
                    {formatPrices(formatPrices(product.price.toFixed(2)))} zł &emsp;
                    {product.isDiscount ? (
                        <span>{formatPrices(product.priceBeforeDiscount.toFixed(2))} zł</span>
                    ) : (
                        <></>
                    )}
                </p>
            </ProductDescription>
            <ProductQuantity>{product.quantity} szt.</ProductQuantity>
        </Wrapper>
    );
};

export default OrderProductElement;
