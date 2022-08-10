import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import useLogout from 'hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const UserLogged = () => {
    const { auth } = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();

    console.log(auth);

    const signOut = async () => {
        await logout();
        navigate('');
    };

    return (
        <>
            <p>Witaj {auth.userName}</p>
            <Button onClick={signOut}>Wyloguj się</Button>
        </>
    );
};

export default UserLogged;
