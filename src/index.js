import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import { OrderProvider } from 'context/OrderItemProvider';
import { BasketProvider } from 'context/BasketProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BasketProvider>
        <OrderProvider>
            <Root />
        </OrderProvider>
    </BasketProvider>
    // </React.StrictMode>
);
