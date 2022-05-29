import LoginArea from 'components/molecules/LoginArea/LoginArea';
import RegisterArea from 'components/molecules/RegisterArea/RegisterArea';
import React from 'react';
import { Separator, Wrapper } from './AccountPreviewSection.style';

const AccountPreviewSection = () => {
    return (
        <>
            <Wrapper>
                <p>Account section</p>
                <LoginArea />
                <Separator />
                <RegisterArea />
            </Wrapper>
        </>
    );
};

export default AccountPreviewSection;
