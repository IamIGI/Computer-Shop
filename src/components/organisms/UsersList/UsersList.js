import React from 'react';
import UsersListItems from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.style';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users }) => {
    return (
        <>
            <Title>Students list</Title>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItems key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </>
    );
};

export default UsersList;
