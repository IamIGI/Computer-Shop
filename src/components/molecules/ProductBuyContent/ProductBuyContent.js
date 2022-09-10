import { useEffect, useState } from 'react';
import { BuyButton, NumberInput, Separator, Wrapper } from './ProductBuyContent.style';
import useBasket from 'hooks/useBasket';

const ProductBuyContent = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { basketItems, setBasketItems } = useBasket();
    const [price, setPrice] = useState(0);
    const [isDiscount, setIsDiscount] = useState(false);
    console.log(product);

    const getPrice = (product) => {
        if (product.special_offer.mode) {
            setPrice(product.price - product.special_offer.price);
            setIsDiscount(true);
        } else {
            setPrice(product.price);
            setIsDiscount(false);
        }
    };

    useEffect(() => {
        getPrice(product);
    }, [product]);

    console.log(product);

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
                        name: product.name,
                        price: price,
                        isDiscount,
                        priceBeforeDiscount: product.price,
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

    return (
        <>
            <Wrapper>
                {isDiscount ? product.price : <></>}
                <h1>{price},00 zł</h1>
                <NumberInput placeholder="1" onChange={(e) => setQuantity(e.target.value)} />
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
                    Rata tylko {(price / 24).toFixed(2)} zł <br />
                    <a>
                        <span>Oblicz ratę</span>
                    </a>
                </p>
            </Wrapper>
        </>
    );
};

export default ProductBuyContent;
