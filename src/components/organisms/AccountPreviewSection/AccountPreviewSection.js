import LoginArea from 'components/molecules/LoginArea/LoginArea';
import RegisterArea from 'components/molecules/RegisterArea/RegisterArea';
import UserLogged from 'components/molecules/UserLogged/UserLogged';
import useAuth from 'hooks/useAuth';
import CartHint from 'components/organisms/CartHint/CartHint';
import { Line } from 'components/atoms/Line/Line';
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
                        <LoginArea mobileView={false} />
                        <Separator />
                        <RegisterArea />
                    </InsideWrapper>
                )}
                <Line />
                <CartHint />
            </Wrapper>
        </>
    );
};

export default AccountPreviewSection;
