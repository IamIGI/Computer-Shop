import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    let value = {
        userData: null,
    };

    let userExists = JSON.parse(localStorage.getItem('user'));
    if (userExists !== null) {
        // console.log(userExists.userLogged);
        value = {
            userData: userExists,
        };
    } else {
        value = {
            userData: null,
        };
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserProvider;
