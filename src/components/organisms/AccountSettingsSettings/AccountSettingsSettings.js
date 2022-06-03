import AccountDangerSection from 'components/molecules/AccountDangerSection/AccountDangerSection';
import AccountData from 'components/molecules/AccountData/AccountData';
import AccountEntitlements from 'components/molecules/AccountEntitlements/AccountEntitlements';
import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import React from 'react';
import { Wrapper } from './AccountSettingsSettings.style';

const AccountSettingsSettings = () => {
    return (
        <AccountSettings>
            <Wrapper>
                <AccountData />
                <AccountEntitlements />
                <AccountDangerSection />
            </Wrapper>
        </AccountSettings>
    );
};
export default AccountSettingsSettings;
