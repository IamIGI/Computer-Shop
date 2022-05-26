import About from 'components/templates/About/About';
import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import AllProducts from 'components/templates/AllProducts/AllProducts';
import Basket from 'components/templates/Basket/Basket';
import Home from 'components/templates/Home/Home';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Root = () => {
    return (
        <BrowserRouter>
            <MainTemplate>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allProducts" element={<AllProducts />} />
                    <Route path="/accountSettings" element={<AccountSettings />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <h1>Hello world</h1>
            </MainTemplate>
        </BrowserRouter>
    );
};
export default Root;
