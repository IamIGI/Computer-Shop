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
import useLogout from 'hooks/useLogout';
import NoRealWebsiteAlert from 'components/molecules/NoRealWebisteAlert/NoRealWebsiteAlert';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUserReceived2Line } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';
import { RiLogoutCircleLine } from 'react-icons/ri';

const Admin_entitlements = Number(process.env.REACT_APP_ADMIN_ROLE);
const Editor_entitlements = Number(process.env.REACT_APP_EDITOR_ROLE);

const NavBar = () => {
    const { auth } = useAuth();
    const logout = useLogout();

    const signOut = async () => {
        setToggleMenu(false);
        await logout();
    };
    const [toggleMenu, setToggleMenu] = useState(false);
    console.log(Object.keys(auth).length);
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
                    {Object.keys(auth).length !== 0 ? (
                        <>
                            <StyledLinkMediumScreen>
                                <StyledLink to="accountSettings/Settings">
                                    <LinkIcon>
                                        <span>
                                            <VscAccount />
                                        </span>
                                    </LinkIcon>
                                    <LinkDescription>Konto</LinkDescription>
                                </StyledLink>
                            </StyledLinkMediumScreen>
                            <StyledLinkMediumScreen>
                                <StyledLink to="" onClick={signOut}>
                                    <LinkIcon>
                                        <span>
                                            <RiLogoutCircleLine />
                                        </span>
                                    </LinkIcon>
                                    <LinkDescription>Wyloguj się</LinkDescription>
                                </StyledLink>
                            </StyledLinkMediumScreen>
                        </>
                    ) : (
                        <StyledLinkMediumScreen to="/authorization">
                            <StyledLink to="/authorization">
                                <LinkIcon>
                                    <span>
                                        <RiUserReceived2Line />
                                    </span>
                                </LinkIcon>
                                <LinkDescription>Logowanie</LinkDescription>
                            </StyledLink>
                        </StyledLinkMediumScreen>
                    )}
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
                            {Object.keys(auth).length !== 0 ? (
                                <>
                                    <StyledLinkSmallScreen
                                        to="accountSettings/Settings"
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        <LinkIcon>
                                            <span>
                                                <VscAccount />
                                            </span>
                                        </LinkIcon>
                                        <LinkDescription>Konto</LinkDescription>
                                    </StyledLinkSmallScreen>
                                    <StyledLinkSmallScreen to="" onClick={signOut}>
                                        <LinkIcon>
                                            <span>
                                                <RiLogoutCircleLine />
                                            </span>
                                        </LinkIcon>
                                        <LinkDescription>Wyloguj się</LinkDescription>
                                    </StyledLinkSmallScreen>
                                </>
                            ) : (
                                <StyledLinkSmallScreen to="/authorization" onClick={() => setToggleMenu(false)}>
                                    <LinkIcon>
                                        <span>
                                            <RiUserReceived2Line />
                                        </span>
                                    </LinkIcon>
                                    <LinkDescription>Logowanie</LinkDescription>
                                </StyledLinkSmallScreen>
                            )}
                        </StyledLinksSmallScreenSection>
                    )}
                </NavigationSmallScreen>
            </InsideWrapper>
        </Wrapper>
    );
};

export default NavBar;
