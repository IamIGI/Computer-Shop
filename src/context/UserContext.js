import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();
let value = {};

const UserProvider = ({ children }) => {
    const [userAuth, setUserAuth] = useState(() => {
        const localData = localStorage.getItem('user');
        console.log(localData);
        return localData ? JSON.parse(localData) : 'no User authenticated';
    });
    // const [userAuth, setUserAuth] = useState('peach');

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userAuth));
        // setUserAuth(userData ? userData : null);
    }, [userAuth]);

    return <UserContext.Provider value={{ userAuth, setUserAuth }}>{children}</UserContext.Provider>;
};
export default UserProvider;
