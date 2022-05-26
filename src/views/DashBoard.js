import React, { useContext } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';

const DashBoard = () => {
    const { users } = useContext(UsersContext);

    return (
        <ViewWrapper>
            <UsersList users={users} />
        </ViewWrapper>
    );
};

export default DashBoard;
