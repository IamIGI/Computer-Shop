import React from 'react';
import { Wrapper } from './NavBar.styles';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    padding: 0 1rem;

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        gap: 1rem;
    }

    li:hover {
        background-color: #777;
    }

    a {
        color: inherit;
        text-decoration: none;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0.25rem;
    }
`;

const SiteTitle = styled.a`
    font-size: 2rem;
`;

const StyledLink = styled(NavLink)`
    &:hover {
        background-color: #777;
    }

    &.active {
        background-color: #555;
    }
`;

const NavBar = () => {
    return (
        <Wrapper>
            <Nav>
                <NavLink to="/">
                    <SiteTitle>Site Name</SiteTitle>
                </NavLink>
                <ul>
                    <CustomLink to="/allProducts">Products</CustomLink>
                    <CustomLink to="/accountSettings">Konto</CustomLink>
                    <CustomLink to="/basket">Basket</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </ul>
            </Nav>
        </Wrapper>
    );
};

function CustomLink({ to, children, ...props }) {
    return (
        <li>
            <StyledLink to={to} {...props}>
                {children}
            </StyledLink>
        </li>
    );
}

export default NavBar;
