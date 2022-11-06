import React from 'react';
import { StyledButton } from './BuyButton.styles';
import useBasket from 'hooks/useBasket';
import { BsCartPlus } from 'react-icons/bs';
import toast from 'react-hot-toast';

const BuyButton = ({ item }) => {
    const { basketItems, setBasketItems } = useBasket();
    const product = item;
    const notify = () =>
        toast.success('Produkt dodany do koszyka', {
            icon: '💻',
            duration: 2000,
        });
    const {
        special_offer: { mode: isDiscount, price: discountValue },
        price,
    } = item;
    function addProduct(product, isDiscount, price, discountValue) {
        console.log(product.name);
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
            notify();
            console.log(`Adding new item to basket`);
            setBasketItems((prevItems) => {
                return [
                    ...prevItems,
                    {
                        prevImg: product.prevImg,
                        _id: product._id,
                        quantity: q,
                        name: product.name,
                        price: product.price,
                        isDiscount,
                        priceBeforeDiscount: isDiscount ? price + discountValue : price,
                    },
                ];
            });
        }
    }

    return (
        <StyledButton onClick={() => addProduct(product, isDiscount, price, discountValue)}>
            <BsCartPlus />
        </StyledButton>
    );
};

export default BuyButton;
