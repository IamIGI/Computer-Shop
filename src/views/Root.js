import About from 'components/templates/About/About';
import AllProducts from 'components/templates/AllProducts/AllProducts';
import Basket from 'components/templates/Basket/Basket';
import Home from 'components/templates/Home/Home';
import MissingPage from 'components/templates/MissingPage/MissingPage';
import Unauthorized from 'components/templates/Unauthorized/Unauthorized';
import AdminSettings from 'components/templates/AdminSettings/AdminSettings';
import EditorSettings from 'components/templates/EditorSettings/EditorSettings';
import Product from 'components/templates/Product/Product';
import AccountSettingsSettings from 'components/organisms/AccountSettingsSettings/AccountSettingsSettings';
import AccountSettingsOrders from 'components/organisms/AccountSettingsOrders/AccountSettingsOrders';

import React from 'react';
import { Wrapper } from './Root.styles';

import { Routes, Route } from 'react-router-dom';
import RequireAuth from 'components/molecules/RequireAuth/RequireAuth';
import PersistLogin from 'providers/PersistLogin';

import AccountOrderHistoryItem from 'components/organisms/AccountOrderHistoryItem/AccountOrderHistoryItem';
import ContactAuthor from 'components/templates/ContactAuthor/ContactAuthor';
import Authorization from 'components/templates/Mobile/Authorization/Authorization';
import NoRealWebsitePage from 'components/templates/NoRealWebsite/NoRealWebsitePage';

const ROLES = {
    User: Number(process.env.REACT_APP_USER_ROLE),
    Editor: Number(process.env.REACT_APP_EDITOR_ROLE),
    Admin: Number(process.env.REACT_APP_ADMIN_ROLE),
};

const Root = () => {
    return (
        <Wrapper>
            <Routes>
                {/* public routes */}
                <Route element={<PersistLogin />}>
                    <Route path="" element={<Home />} />
                    <Route path="allProducts" element={<AllProducts />} />
                    <Route path="about" element={<About />} />
                    <Route path={`/product/:id`} element={<Product />} />
                    <Route path="basket" element={<Basket />} />
                    <Route path="contact" element={<ContactAuthor />} />
                    <Route path="authorization" element={<Authorization />} />
                    <Route path="noRealWebsite" element={<NoRealWebsitePage />} />

                    <Route path="*" element={<MissingPage />} />
                    <Route path="unauthorized" element={<Unauthorized />} />

                    {/* protected routes */}

                    <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin, ROLES.Editor]} />}>
                        <Route path="adminSettings" element={<AdminSettings />} />
                        <Route path="/accountSettings/settings" element={<AccountSettingsSettings />} />
                        <Route path="/accountSettings/orders" element={<AccountSettingsOrders />} />
                        <Route
                            path={`/accountSettings/orders/history/:orderId`}
                            element={<AccountOrderHistoryItem />}
                        />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                        <Route path="adminSettings" element={<AdminSettings />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}>
                        <Route path="editorSettings" element={<EditorSettings />} />
                    </Route>
                </Route>
            </Routes>
        </Wrapper>
    );
};
export default Root;
