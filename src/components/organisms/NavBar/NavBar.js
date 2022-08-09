import React from 'react';
import { Wrapper, Nav, SiteTitle, StyledLink, List } from './NavBar.styles';
import { VscArchive, VscMilestone, VscAccount, VscVm, VscInspect } from 'react-icons/vsc';
import useAuth from 'hooks/useAuth';

//move to env
const Admin_entitlements = Number(process.env.REACT_APP_ADMIN_ROLE);
const Editor_entitlements = Number(process.env.REACT_APP_EDITOR_ROLE);

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
    const { auth } = useAuth();
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
                    {auth?.roles?.find((role) => Admin_entitlements === role) && (
                        <CustomLink to="/adminSettings">
                            <span>
                                <VscInspect />
                            </span>
                            Admin
                        </CustomLink>
                    )}
                    {auth?.roles?.find((role) => Editor_entitlements === role) && (
                        <>
                            <CustomLink to="/editorSettings">
                                <span>
                                    <VscInspect />
                                </span>
                                Editor
                            </CustomLink>
                        </>
                    )}

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
