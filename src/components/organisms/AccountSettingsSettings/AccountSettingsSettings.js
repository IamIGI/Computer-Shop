// import AccountDangerSection from 'components/molecules/AccountComponents/AccountDangerSection/AccountDangerSection';
import AccountDangerSection from 'components/molecules/AccountDangerSection/AccountDangerSection';
// import AccountData from 'components/molecules/AccountComponents/AccountData/AccountData';
import AccountData from 'components/molecules/AccountData/AccountData';

import AccountEntitlements from 'components/molecules/AccountEntitlements/AccountEntitlements';
import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import useAuth from 'hooks/useAuth';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { useEffect, useState } from 'react';
import { Wrapper } from './AccountSettingsSettings.style';
import useAxiosPrivate from 'hooks/useAxiosPrivate';

const AccountSettingsSettings = () => {
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const [accountInfo, setAccountInfo] = useState({});
    const [waitForFetch, setWaitForFetch] = useState(true);
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        const getAccountInfo = async (data) => {
            try {
                setWaitForFetch(true);
                const response = await axiosPrivate.post('user/accountInfo', data);
                setAccountInfo(response.data);
                setWaitForFetch(false);
            } catch (err) {
                console.log(err);
            }
        };
        const data = {
            userId: auth.id,
        };

        getAccountInfo(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    return (
        <AccountSettings>
            <Wrapper>
                {waitForFetch ? (
                    <LoadingAnimation loadingSize={15} />
                ) : (
                    <>
                        <AccountData accountInfo={accountInfo} handleRefresh={handleRefresh} />
                        <AccountEntitlements accountEnlistments={accountInfo.Enlistments} />
                        <AccountDangerSection />
                    </>
                )}
            </Wrapper>
        </AccountSettings>
    );
};
export default AccountSettingsSettings;
