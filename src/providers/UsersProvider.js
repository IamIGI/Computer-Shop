import React, { useState } from 'react';
import { users as usersData } from 'data/users';

export const UsersContext = React.createContext({
    // create init context and export it to elements that are contain between tags
    users: [],
    handleAddUser: () => {},
    deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState(usersData);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name);
        setUsers(filteredUsers);
    };

    const handleAddUser = (values) => {
        const newUser = {
            name: values.name,
            attendance: `${values.attendance}%`,
            average: values.average,
        };
        setUsers([newUser, ...users]);
    };

    return (
        <>
            <UsersContext.Provider
                value={{
                    users,
                    handleAddUser,
                    deleteUser,
                }}
            >
                {children}
            </UsersContext.Provider>
        </>
    );
};

UsersProvider.propTypes = {};
export default UsersProvider;
