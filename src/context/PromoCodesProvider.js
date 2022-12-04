import { createContext, useState, useEffect } from 'react';
import useBasket from 'hooks/useBasket';
import useAuth from 'hooks/useAuth';
import { axiosPrivate } from 'api/axios';
import toast from 'react-hot-toast';

const PromoCodesContext = createContext({});

export const PromoCodesProvider = ({ children }) => {
    const { basketItems, setBasketItems } = useBasket();
    const { auth } = useAuth();
    const [promoCodeInputDisabled, setPromoCodeInputDisabled] = useState(false);
    const [successfullyUsedPromoCode, setSuccessfullyUsedPromoCode] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [promoCodeAlert, setPromoCodeAlert] = useState('');

    const notifyUsedPromoCode = () => {
        toast.success('Użyto kodu promocyjnego', {
            duration: 2000,
        });
    };

    useEffect(() => {
        setTimeout(() => {
            setPromoCodeAlert('');
        }, 4000);
    }, [promoCodeAlert]);

    useEffect(() => {
        if (basketItems !== null && basketItems.length === 0) setPromoCodeInputDisabled(false);
    }, [basketItems]);

    const promoCodeDisabled = () => {
        setPromoCodeInputDisabled(true);
    };

    const promoCodeEnabled = () => {
        setPromoCodeInputDisabled(false);
    };

    const promoCodeSubmit = async () => {
        const data = { code: promoCode, products: basketItems, auth: auth.id };
        const response = await axiosPrivate.post('/promocodes/checkproducts', data);

        const promoCodesResponse = response.data;
        if (promoCodesResponse?.errCode === '001') {
            setPromoCodeAlert('Podano zły kod');
            return;
        }
        if (promoCodesResponse?.errCode === '002') {
            setPromoCodeAlert('Podany kod nie przecenia żadnego z produktów');
            return;
        }
        if (promoCodesResponse?.errCode === '003') {
            setPromoCodeAlert('Podany kod został już użyty');
            return;
        }

        promoCodeDisabled();
        setSuccessfullyUsedPromoCode(true);
        setPromoCodeAlert('Przeceniono produkt');
        notifyUsedPromoCode();

        const discountProduct_Id = promoCodesResponse[0]._id;

        const newBasketItems = basketItems.filter((item) => {
            return item._id !== discountProduct_Id;
        });
        promoCodesResponse.map((item) => newBasketItems.push(item));
        setBasketItems(newBasketItems);
    };

    const sendPromoCode = (value) => {
        setPromoCode(value);
    };

    const promoCodeUsedSucceeded = () => {
        setSuccessfullyUsedPromoCode(true);
    };

    const resetPromoCode = () => {
        setSuccessfullyUsedPromoCode(false);
        setPromoCode('');
        promoCodeEnabled();
    };
    return (
        <PromoCodesContext.Provider
            value={{
                successfullyUsedPromoCode,
                promoCode,
                promoCodeAlert,
                promoCodeInputDisabled,
                promoCodeDisabled,
                promoCodeEnabled,
                promoCodeSubmit,
                sendPromoCode,
                resetPromoCode,
                promoCodeUsedSucceeded,
            }}
        >
            {children}
        </PromoCodesContext.Provider>
    );
};

export default PromoCodesContext;
