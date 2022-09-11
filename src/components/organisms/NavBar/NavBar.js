import React from 'react';
import {
    Wrapper,
    Home,
    SiteTitle,
    StyledLink,
    Navigation,
    Icon,
    Title,
    LinkIcon,
    LinkDescription,
} from './NavBar.styles';
import { VscArchive, VscMilestone, VscVm, VscInspect } from 'react-icons/vsc';
import useAuth from 'hooks/useAuth';

const Admin_entitlements = Number(process.env.REACT_APP_ADMIN_ROLE);
const Editor_entitlements = Number(process.env.REACT_APP_EDITOR_ROLE);

const NavBar = () => {
    const { auth } = useAuth();
    return (
        <Wrapper>
            <SiteTitle to="/">
                <Home>
                    {' '}
                    <Icon>
                        <span>
                            <VscVm />
                        </span>
                    </Icon>
                    <Title>
                        H<span>o</span>tSh<span>o</span>
                        <span>o</span>t
                    </Title>
                </Home>
            </SiteTitle>
            <Navigation>
                {auth?.roles?.find((role) => Admin_entitlements === role) && (
                    <StyledLink to="/adminSettings">
                        <LinkIcon>
                            <span>
                                <VscInspect />
                            </span>
                        </LinkIcon>
                        <LinkDescription>Administrator</LinkDescription>
                    </StyledLink>
                )}
                {auth?.roles?.find((role) => Editor_entitlements === role) && (
                    <StyledLink to="/editorSettings">
                        <LinkIcon>
                            <VscInspect />
                        </LinkIcon>
                        <LinkDescription>Edytor</LinkDescription>
                    </StyledLink>
                )}

                <StyledLink to="/allProducts">
                    <LinkIcon>
                        <span>
                            <VscInspect />
                        </span>
                    </LinkIcon>
                    <LinkDescription>Produkty</LinkDescription>
                </StyledLink>
                <StyledLink to="/basket">
                    <LinkIcon>
                        <span>
                            <VscArchive />
                        </span>
                    </LinkIcon>
                    <LinkDescription>Koszyk</LinkDescription>
                </StyledLink>
                <StyledLink to="/about">
                    <LinkIcon>
                        <span>
                            <VscMilestone />
                        </span>
                    </LinkIcon>
                    <LinkDescription>O Nas</LinkDescription>
                </StyledLink>
            </Navigation>
        </Wrapper>
    );
};

export default NavBar;
