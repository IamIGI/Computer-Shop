import { LoginWrapper, Wrapper, RegisterWrapper } from './Authorization.style';
import LoginArea from 'components/molecules/LoginArea/LoginArea';
import RegisterArea from 'components/molecules/RegisterArea/RegisterArea';
const Authorization = () => {
    return (
        <Wrapper>
            <LoginWrapper>
                <LoginArea mobileView={true} />
            </LoginWrapper>
            <RegisterWrapper>
                <RegisterArea />
            </RegisterWrapper>
        </Wrapper>
    );
};

export default Authorization;
