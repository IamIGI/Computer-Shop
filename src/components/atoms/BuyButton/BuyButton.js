import React from 'react';
import { StyledButton } from './BuyButton.styles';
import useBasket from 'hooks/useBasket';
import { BsCartPlus } from 'react-icons/bs';

const BuyButton = ({ item, index }) => {
    const { basketItems, setBasketItems } = useBasket();
    const product = item;
    const {
        special_offer: { mode: isDiscount, price: discountValue },
        price,
    } = item;
    // console.log(item, item.special_offer.mode, item.price, item.special_offer.price);

    function addProduct(product, isDiscount, price, discountValue) {
        console.log(product.name);
        // console.log('here');
        const quantity = 1;
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
                        price: isDiscount ? price - discountValue : price,
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
    }

    return (
        <StyledButton onClick={() => addProduct(product, isDiscount, price, discountValue)}>
            <BsCartPlus />
        </StyledButton>
    );
};

export default BuyButton;
