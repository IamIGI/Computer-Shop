import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import useLogout from 'hooks/useLogout';
import { useNavigate } from 'react-router-dom';
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
    Line,
} from './UserLogged.style';
import { VscAccount } from 'react-icons/vsc';
import { BsPerson } from 'react-icons/bs';

const UserLogged = () => {
    const { auth } = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();

    const signOut = async () => {
        await logout();
        navigate('');
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
            </List>
            <Line />
            <Button onClick={signOut}>Wyloguj się</Button>
        </Wrapper>
    );
};

export default UserLogged;
