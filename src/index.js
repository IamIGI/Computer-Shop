import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import { OrderProvider } from 'context/OrderItemProvider';
import { BasketProvider } from 'context/BasketProvider';
import { ProductProvider } from 'context/ProductProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BasketProvider>
        <ProductProvider>
            <OrderProvider>
                <Root />
            </OrderProvider>
        </ProductProvider>
    </BasketProvider>
    // </React.StrictMode>
);
