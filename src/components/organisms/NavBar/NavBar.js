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
    InsideWrapper,
} from './NavBar.styles';
import { VscMilestone, VscVm, VscInspect } from 'react-icons/vsc';
import { BsEnvelope } from 'react-icons/bs';
import useAuth from 'hooks/useAuth';
import NoRealWebsiteAlert from 'components/molecules/NoRealWebisteAlert/NoRealWebsiteAlert';

const Admin_entitlements = Number(process.env.REACT_APP_ADMIN_ROLE);
const Editor_entitlements = Number(process.env.REACT_APP_EDITOR_ROLE);

const NavBar = () => {
    const { auth } = useAuth();
    return (
        <Wrapper>
            <InsideWrapper>
                <NoRealWebsiteAlert />
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
                    <StyledLink to="/about">
                        <LinkIcon>
                            <span>
                                <VscMilestone />
                            </span>
                        </LinkIcon>
                        <LinkDescription>O Nas</LinkDescription>
                    </StyledLink>
                    <StyledLink to="/contact">
                        <LinkIcon>
                            <span>
                                <BsEnvelope />
                            </span>
                        </LinkIcon>
                        <LinkDescription>Kontakt</LinkDescription>
                    </StyledLink>
                </Navigation>
            </InsideWrapper>
        </Wrapper>
    );
};

export default NavBar;
