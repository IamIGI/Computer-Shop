import AccountMenu from 'components/molecules/AccountMenu/AccountMenu';
import React from 'react';
import { LeftWrapper, RightWrapper, Wrapper } from './AccountSettings.styles';

const AccountSettings = ({ children }) => {
    return (
        <Wrapper>
            <LeftWrapper>
                <AccountMenu />
            </LeftWrapper>
            <RightWrapper>{children}</RightWrapper>
        </Wrapper>
    );
};

export default AccountSettings;
