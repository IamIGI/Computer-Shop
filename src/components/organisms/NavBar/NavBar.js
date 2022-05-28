import React from 'react';
import { Wrapper, Nav, SiteTitle, StyledLink } from './NavBar.styles';
import { NavLink } from 'react-router-dom';
import { VscArchive, VscMilestone, VscAccount, VscVm, VscInspect } from 'react-icons/vsc';

function CustomLink({ to, children, ...props }) {
    return (
        <li>
            <StyledLink to={to} {...props}>
                {children}
            </StyledLink>
        </li>
    );
}

const NavBar = () => {
    return (
        <Wrapper>
            <Nav>
                <NavLink to="/">
                    <SiteTitle>
                        {' '}
                        <span>
                            <VscVm />
                        </span>
                        Computer Shop
                    </SiteTitle>
                </NavLink>
                <ul>
                    <CustomLink to="/allProducts">
                        <VscInspect />
                        Products
                    </CustomLink>
                    <CustomLink to="/accountSettings">
                        {' '}
                        <VscAccount /> Konto
                    </CustomLink>
                    <CustomLink to="/basket">
                        {' '}
                        <VscArchive /> Basket
                    </CustomLink>
                    <CustomLink to="/about">
                        {' '}
                        <VscMilestone /> About
                    </CustomLink>
                </ul>
            </Nav>
        </Wrapper>
    );
};

export default NavBar;
