import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <MainTemplate>
        <Root id="Root" />
    </MainTemplate>
    // </React.StrictMode>
);
