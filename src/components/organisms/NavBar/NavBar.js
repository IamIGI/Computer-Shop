import React from 'react';
import { Wrapper, Nav, SiteTitle, StyledLink, List } from './NavBar.styles';
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
                <SiteTitle to="/">
                    {' '}
                    <span>
                        <VscVm />
                    </span>
                    HotShoot
                </SiteTitle>
                <List>
                    <CustomLink to="/allProducts">
                        <span>
                            <VscInspect />
                        </span>
                        Products
                    </CustomLink>
                    <CustomLink to="accountSettings/Settings">
                        <span>
                            <VscAccount />
                        </span>
                        Konto
                    </CustomLink>
                    <CustomLink to="/basket">
                        <span>
                            <VscArchive />
                        </span>
                        Basket
                    </CustomLink>
                    <CustomLink to="/about">
                        <span>
                            <VscMilestone />
                        </span>
                        About
                    </CustomLink>
                </List>
            </Nav>
        </Wrapper>
    );
};

export default NavBar;
