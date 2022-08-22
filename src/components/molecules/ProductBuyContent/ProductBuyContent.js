import { useState } from 'react';
import { BuyButton, NumberInput, Separator, Wrapper } from './ProductBuyContent.style';
import useBasket from 'hooks/useBasket';

const ProductBuyContent = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { basketItems, setBasketItems } = useBasket();
    const addProduct = () => {
        let q = Number(quantity);
        // 👇️ check if array contains object with given product id
        const isFound = basketItems.some((item, index) => {
            if (item._id === product._id) {
                //set quantity to given product
                setBasketItems((prevItems) => {
                    return prevItems.map((item) => {
                        return item._id === product._id ? { ...item, quantity: item.quantity + q } : item;
                    });
                });
                return true;
            }
            return false;
        });

        if (!isFound) {
            console.log(`Adding new item to basket`);
            setBasketItems((prevItems) => {
                return [
                    ...prevItems,
                    {
                        prevImg: product.prevImg,
                        _id: product._id,
                        quantity: q,
                        price: product.price,
                        name: product.name,
                    },
                ];
            });
        }

        let basket = JSON.parse(localStorage.getItem('productsInBasket'));
        if (basket == null) {
            let addedProduct = { products: [product._id] };
            localStorage.setItem('productsInBasket', JSON.stringify(addedProduct));
        } else {
            basket.push(product._id);
            localStorage.setItem('productsInBasket', JSON.stringify(basket));
        }
    };

    const getQuantity = (value) => {
        setQuantity(value);
    };

    return (
        <>
            <Wrapper>
                <h1>{product.price},00 zł</h1>
                <NumberInput placeholder="1" onChange={(e) => getQuantity(e.target.value)} />
                <BuyButton onClick={addProduct}>Dodaj do koszyka</BuyButton>
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
