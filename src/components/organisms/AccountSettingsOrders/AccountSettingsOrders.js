import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import { Wrapper } from './AccountSettingsOrders.style';

import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AccountSettingsOrders = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    //You finished There #JWT Authentication

    return (
        <AccountSettings>
            <Wrapper>
                <p> Zamowienia</p>
            </Wrapper>
        </AccountSettings>
    );
};

export default AccountSettingsOrders;
