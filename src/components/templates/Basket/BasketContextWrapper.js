import { PromoCodesProvider } from 'context/PromoCodesProvider';
import React from 'react';
import Basket from './Basket';

const BasketContextWrapper = () => {
    return (
        <PromoCodesProvider>
            <Basket />
        </PromoCodesProvider>
    );
};

export default BasketContextWrapper;
