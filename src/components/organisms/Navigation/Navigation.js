import React from 'react';
import { Logo, Wrapper, StyledLink } from './Navigation.styles';

const Navigation = () => {
    return (
        <>
            <Wrapper>
                <Logo>
                    <h1>
                        Study <br /> App
                    </h1>
                </Logo>
                <StyledLink active_class_name="active" to="/">
                    Dashboard
                </StyledLink>
                <StyledLink active_class_name="active" to="/add-user">
                    Add user
                </StyledLink>
                <StyledLink active_class_name="active" to="/settings">
                    Settings
                </StyledLink>
                <StyledLink active_class_name="active" to="/logout">
                    Logout
                </StyledLink>
            </Wrapper>
        </>
    );
};

export default Navigation;
