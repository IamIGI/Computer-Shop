import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'; //Imported icon is a ReactComponent
import { StyledButton } from './DeleteButton.styles';

const Button = (props) => (
    <StyledButton {...props}>
        {/* you give all the props, f.e: onClick given in UsersListItem */}
        <DeleteIcon />
    </StyledButton>
);

export default Button;
