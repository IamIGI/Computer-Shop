import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const BasketContext = createContext({});

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState(
        JSON.parse(localStorage.getItem('basketItems')) == null ? [] : JSON.parse(localStorage.getItem('basketItems'))
    );

    const [promoCodeInputDisabled, setPromoCodeInputDisabled] = useState(false);
    const [priceToPay, setPriceToPay] = useState(0);

    const notifyAddProduct = () =>
        toast.success('Produkt dodany do koszyka', {
            icon: '💻',
            duration: 2000,
        });

    const notifyDeleteProduct = () =>
        toast.success('Produkt usunięty z koszyka', {
            icon: '🗑️',
            duration: 2000,
        });

    useEffect(() => {
        localStorage.setItem('basketItems', JSON.stringify(basketItems));

        let temp = 0;
        basketItems.map((item) => (temp += item.price * item.quantity));
        setPriceToPay(() => {
            return temp;
        });

        if (basketItems !== null && basketItems.length === 0) setPromoCodeInputDisabled(false);
    }, [basketItems]);

    function addProductToBasket(product, quantity) {
        console.log(product.name);
        const {
            special_offer: { mode: isDiscount, price: discountValue },
            price,
        } = product;
        let q = Number(quantity);
        // 👇️ check if array contains object with given product id
        const isFound = basketItems.some((item, index) => {
            if (item._id === product._id) {
                //set quantity to given product
                setBasketItems((prevItems) =>
                    prevItems.map((item) =>
                        item._id === product._id ? { ...item, quantity: item.quantity + q } : item
                    )
                );
                return true;
            }
            return false;
        });
        if (!isFound) {
            notifyAddProduct();
            console.log(`Adding new item to basket`);
            setBasketItems((prevItems) => {
                return [
                    ...prevItems,
                    {
                        prevImg: product.prevImg,
                        _id: product._id,
                        quantity: q,
                        name: product.name,
                        brand: product.brand,
                        price: product.price,
                        isDiscount,
                        priceBeforeDiscount: isDiscount ? price + discountValue : price,
                    },
                ];
            });
        }
    }

    function removeBasket() {
        localStorage.removeItem('basketItems');
        setBasketItems([]);
    }

    function deleteProduct(id) {
        if (basketItems.length === 1) {
            removeBasket();
            setPriceToPay(() => {
                return 0;
            });
        } else {
            setBasketItems(basketItems.filter((product) => product._id !== id));
        }

        notifyDeleteProduct();
    }

    // PromoCodes

    const promoCodeDisabled = () => {
        setPromoCodeInputDisabled(true);
    };

    const promoCodeEnabled = () => {
        setPromoCodeInputDisabled(false);
    };

    return (
        <BasketContext.Provider
            value={{
                priceToPay,
                basketItems,
                promoCodeInputDisabled,
                setBasketItems,
                addProductToBasket,
                removeBasket,
                deleteProduct,
                promoCodeDisabled,
                promoCodeEnabled,
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};

export default BasketContext;
