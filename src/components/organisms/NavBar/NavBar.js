import React, { useState } from 'react';
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
    NavigationSmallScreen,
    HamburgerMenu,
    StyledLinkSmallScreen,
    StyledLinksSmallScreenSection,
    StyledLinkMediumScreen,
} from './NavBar.styles';
import { VscMilestone, VscVm, VscInspect } from 'react-icons/vsc';
import { BsEnvelope } from 'react-icons/bs';
import useAuth from 'hooks/useAuth';
import NoRealWebsiteAlert from 'components/molecules/NoRealWebisteAlert/NoRealWebsiteAlert';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUserReceived2Line } from 'react-icons/ri';

const Admin_entitlements = Number(process.env.REACT_APP_ADMIN_ROLE);
const Editor_entitlements = Number(process.env.REACT_APP_EDITOR_ROLE);

const NavBar = () => {
    const { auth } = useAuth();
    const [toggleMenu, setToggleMenu] = useState(false);

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
                    <StyledLinkMediumScreen>
                        <StyledLink to="/authorization">
                            <LinkIcon>
                                <span>
                                    <RiUserReceived2Line />
                                </span>
                            </LinkIcon>
                            <LinkDescription>Logowanie</LinkDescription>
                        </StyledLink>
                    </StyledLinkMediumScreen>
                </Navigation>
                <NavigationSmallScreen>
                    <HamburgerMenu>
                        <GiHamburgerMenu onClick={() => setToggleMenu(true)} />
                    </HamburgerMenu>
                    {toggleMenu && (
                        <StyledLinksSmallScreenSection onMouseLeave={() => setToggleMenu(false)}>
                            {/* <CloseMarkSmallScreen>
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />
                            </CloseMarkSmallScreen> */}

                            {auth?.roles?.find((role) => Admin_entitlements === role) && (
                                <StyledLinkSmallScreen to="/adminSettings">
                                    <LinkIcon>
                                        <span>
                                            <VscInspect />
                                        </span>
                                    </LinkIcon>
                                    <LinkDescription>Administrator</LinkDescription>
                                </StyledLinkSmallScreen>
                            )}
                            {auth?.roles?.find((role) => Editor_entitlements === role) && (
                                <StyledLinkSmallScreen to="/editorSettings">
                                    <LinkIcon>
                                        <VscInspect />
                                    </LinkIcon>
                                    <LinkDescription>Edytor</LinkDescription>
                                </StyledLinkSmallScreen>
                            )}

                            <StyledLinkSmallScreen to="/allProducts" onClick={() => setToggleMenu(false)}>
                                <LinkIcon>
                                    <span>
                                        <VscInspect />
                                    </span>
                                </LinkIcon>
                                <LinkDescription>Produkty</LinkDescription>
                            </StyledLinkSmallScreen>
                            <StyledLinkSmallScreen to="/about" onClick={() => setToggleMenu(false)}>
                                <LinkIcon>
                                    <span>
                                        <VscMilestone />
                                    </span>
                                </LinkIcon>
                                <LinkDescription>O Nas</LinkDescription>
                            </StyledLinkSmallScreen>
                            <StyledLinkSmallScreen to="/contact" onClick={() => setToggleMenu(false)}>
                                <LinkIcon>
                                    <span>
                                        <BsEnvelope />
                                    </span>
                                </LinkIcon>
                                <LinkDescription>Kontakt</LinkDescription>
                            </StyledLinkSmallScreen>
                            <StyledLinkSmallScreen to="/authorization" onClick={() => setToggleMenu(false)}>
                                <LinkIcon>
                                    <span>
                                        <RiUserReceived2Line />
                                    </span>
                                </LinkIcon>
                                <LinkDescription>Logowanie</LinkDescription>
                            </StyledLinkSmallScreen>
                        </StyledLinksSmallScreenSection>
                    )}
                </NavigationSmallScreen>
            </InsideWrapper>
        </Wrapper>
    );
};

export default NavBar;
