import React from 'react';
import { BuyButton, NumberInput, Separator, Wrapper } from './ProductBuyContent.style';

const ProductBuyContent = ({ product }) => {
    //WriteToLocalStorage
    const productInfo = { products: [305671, 302112] };
    localStorage.setItem('productInfo', JSON.stringify(productInfo));

    return (
        <>
            <Wrapper>
                <h1>{product.price},00 zł</h1>
                <NumberInput placeholder="1" />
                <BuyButton>Dodaj do koszyka</BuyButton>
                <p>
                    Wydłużony czas dostawy <br />
                    <a>
                        <span>Zapytaj o termin</span>
                    </a>
                </p>
                <Separator />
                <p>
                    Darmowa dostawa <br />
                    <a>
                        <span>Sprawdź szczegóły</span>
                    </a>
                </p>
                <Separator />
                <p>
                    Rata tylko {product.price / 24} zł <br />
                    <a>
                        <span>Oblicz ratę</span>
                    </a>
                </p>
            </Wrapper>
        </>
    );
};

export default ProductBuyContent;
