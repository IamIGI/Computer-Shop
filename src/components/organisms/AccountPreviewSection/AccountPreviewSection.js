import LoginArea from 'components/molecules/LoginArea/LoginArea';
import RegisterArea from 'components/molecules/RegisterArea/RegisterArea';
import UserLogged from 'components/molecules/UserLogged/UserLogged';
import useAuth from 'hooks/useAuth';
import { Separator, Wrapper } from './AccountPreviewSection.style';

const AccountPreviewSection = () => {
    const { auth } = useAuth();
    return (
        <>
            <Wrapper>
                <p>Account section</p>
                {auth?.accessToken ? (
                    <UserLogged />
                ) : (
                    <>
                        <LoginArea />
                        <Separator />
                        <RegisterArea />
                    </>
                )}
            </Wrapper>
        </>
    );
};

export default AccountPreviewSection;
