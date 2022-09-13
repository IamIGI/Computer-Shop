import LoginArea from 'components/molecules/LoginArea/LoginArea';
import RegisterArea from 'components/molecules/RegisterArea/RegisterArea';
import UserLogged from 'components/molecules/UserLogged/UserLogged';
import useAuth from 'hooks/useAuth';
import { Separator, Wrapper, InsideWrapper } from './AccountPreviewSection.style';

const AccountPreviewSection = () => {
    const { auth } = useAuth();
    return (
        <>
            <Wrapper>
                {auth?.accessToken ? (
                    <UserLogged />
                ) : (
                    <InsideWrapper>
                        <LoginArea />
                        <Separator />
                        <RegisterArea />
                    </InsideWrapper>
                )}
            </Wrapper>
        </>
    );
};

export default AccountPreviewSection;
