import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import { OrderProvider } from 'context/OrderItemProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <OrderProvider>
        <Root />
    </OrderProvider>
    // </React.StrictMode>
);
