import React, { useContext } from 'react';
import propTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, Average, StudentData } from './UserListItem.style';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItems = ({ userData: { average, name, attendance = '0%' } }) => {
    const { deleteUser } = useContext(UsersContext);

    return (
        <Wrapper>
            <Average average={average}>{average}</Average>
            <StudentData>
                <p>{name}</p>
                <p>attendance: {attendance}</p>
            </StudentData>
            <DeleteButton onClick={() => deleteUser(name)} />
        </Wrapper>
    );
};

UsersListItems.propTypes = {
    //declare model of data
    userData: propTypes.shape({
        average: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        attendance: propTypes.string,
    }),
};
export default UsersListItems;
