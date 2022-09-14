import useLogout from 'hooks/useLogout';
import useAuth from 'hooks/useAuth';
import {
    Wrapper,
    List,
    StyledLink,
    TitleSection,
    Icon,
    Title,
    UserDescription,
    NavDescription,
    LogoutLink,
} from './UserLogged.style';
import { Line } from 'components/atoms/Line/Line';
import { VscAccount } from 'react-icons/vsc';
import { BsPerson } from 'react-icons/bs';
import { RiLogoutCircleLine } from 'react-icons/ri';

const UserLogged = () => {
    const { auth } = useAuth();

    const logout = useLogout();

    const signOut = async () => {
        await logout();
    };

    return (
        <Wrapper>
            <TitleSection>
                <Icon>
                    <BsPerson />
                </Icon>
                <Title>Twoje Konto</Title>
            </TitleSection>
            <UserDescription>
                <p>Witaj {auth.userName}</p>
            </UserDescription>
            <Line />

            <List>
                <li>
                    <StyledLink to="accountSettings/Settings">
                        <div>
                            <span>
                                {' '}
                                <VscAccount />
                            </span>
                        </div>
                        <NavDescription>Konto</NavDescription>
                    </StyledLink>
                </li>
                <li>
                    <LogoutLink onClick={signOut} to="">
                        <div>
                            <span>
                                {' '}
                                <RiLogoutCircleLine />
                            </span>
                        </div>
                        <NavDescription>Wyloguj sie</NavDescription>
                    </LogoutLink>
                </li>
            </List>
        </Wrapper>
    );
};

export default UserLogged;
