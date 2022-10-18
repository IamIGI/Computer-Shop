import React, { useState } from 'react';
import {
    Wrapper,
    NormalScreenSection,
    InsideWrapper,
    SmallScreenSection,
    HamburgerMenu,
    StyledLinksSmallScreenSection,
    SmallScreenMenuPreview,
    QuantityOfProductSmallScreen,
    QuantityOfProductMediumScreen,
    MediumScreenSection,
    XmarkLink,
    XmarkIcon,
} from './NavBar.styles';
import { VscMilestone, VscInspect } from 'react-icons/vsc';
import { BsEnvelope } from 'react-icons/bs';
import useAuth from 'hooks/useAuth';
import useLogout from 'hooks/useLogout';
import NoRealWebsiteAlert from 'components/molecules/NoRealWebisteAlert/NoRealWebsiteAlert';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUserReceived2Line } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BsBasket3 } from 'react-icons/bs';
import useBasket from 'hooks/useBasket';
import StyledLink from 'components/atoms/StyledLink/StyledLink';
import WebsiteLogo from 'components/atoms/WebsiteLogo/WebsiteLogo';
import { RiCloseFill } from 'react-icons/ri';
import { VscVm } from 'react-icons/vsc';

const Admin_entitlements = Number(process.env.REACT_APP_ADMIN_ROLE);
const Editor_entitlements = Number(process.env.REACT_APP_EDITOR_ROLE);
const MenuInitPosition = '-230px';

const NavBar = () => {
    const { auth } = useAuth();
    const logout = useLogout();
    const { basketItems } = useBasket();

    const getQuantityOfItems = () => {
        let temp = 0;
        basketItems.map((item) => (temp += item.quantity));
        return temp;
    };

    const signOut = async () => {
        setToggleMenu(false);
        await logout();
    };
    const [toggleMenu, setToggleMenu] = useState(MenuInitPosition);
    return (
        <Wrapper>
            <InsideWrapper>
                <NoRealWebsiteAlert />
                <WebsiteLogo />
                <NormalScreenSection>
                    {auth?.roles?.find((role) => Admin_entitlements === role) && (
                        <StyledLink target={'/adminSettings'} icon={<VscInspect />} description={'Administrator'} />
                    )}
                    {auth?.roles?.find((role) => Editor_entitlements === role) && (
                        <StyledLink target={'/editorSettings'} icon={<VscInspect />} description={'Edytor'} />
                    )}

                    <StyledLink target={'/allProducts'} icon={<VscInspect />} description={'Produkty'} />
                    <StyledLink target={'/about'} icon={<VscMilestone />} description={'O Nas'} />
                    <StyledLink target={'/contact'} icon={<BsEnvelope />} description={'Kontakt'} />
                    <MediumScreenSection>
                        <div style={{ position: 'relative' }}>
                            <StyledLink target={'basket'} icon={<BsBasket3 />} description={'Koszyk'} />
                            {getQuantityOfItems() !== 0 && (
                                <QuantityOfProductMediumScreen>{getQuantityOfItems()}</QuantityOfProductMediumScreen>
                            )}
                        </div>
                        {Object.keys(auth).length !== 0 ? (
                            <>
                                <StyledLink
                                    target={'accountSettings/Settings'}
                                    icon={<VscAccount />}
                                    description={'Konto'}
                                />
                                <div onClick={signOut}>
                                    <StyledLink target={''} icon={<RiLogoutCircleLine />} description={'Wyloguj się'} />
                                </div>
                            </>
                        ) : (
                            <StyledLink
                                target={'/authorization'}
                                icon={<RiUserReceived2Line />}
                                description={'Logowanie'}
                            />
                        )}
                    </MediumScreenSection>
                </NormalScreenSection>
                <SmallScreenSection>
                    <SmallScreenMenuPreview>
                        {getQuantityOfItems() !== 0 && (
                            <div style={{ position: 'relative' }}>
                                <StyledLink
                                    target={'/basket'}
                                    icon={<BsBasket3 />}
                                    description={''}
                                    smallScreen={true}
                                />
                                <QuantityOfProductSmallScreen>{getQuantityOfItems()}</QuantityOfProductSmallScreen>
                            </div>
                        )}
                        <HamburgerMenu>
                            <GiHamburgerMenu onClick={() => setToggleMenu('0px')} />
                        </HamburgerMenu>
                    </SmallScreenMenuPreview>
                    {/* {toggleMenu && ( */}
                    <StyledLinksSmallScreenSection
                        position={toggleMenu}
                        onMouseLeave={() => setToggleMenu(MenuInitPosition)}
                    >
                        <XmarkLink>
                            <XmarkIcon onClick={() => setToggleMenu(MenuInitPosition)}>
                                <RiCloseFill />
                            </XmarkIcon>
                        </XmarkLink>
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={''} icon={<VscVm />} description={'Strona Główna'} />
                        </div>
                        {auth?.roles?.find((role) => Admin_entitlements === role) && (
                            <div onClick={() => setToggleMenu(MenuInitPosition)}>
                                <StyledLink
                                    target={'/adminSettings'}
                                    icon={<VscInspect />}
                                    description={'Administrator'}
                                />
                            </div>
                        )}
                        {auth?.roles?.find((role) => Editor_entitlements === role) && (
                            <div onClick={() => setToggleMenu(MenuInitPosition)}>
                                <StyledLink target={'/editorSettings'} icon={<VscInspect />} description={'Edytor'} />
                            </div>
                        )}
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={'/allProducts'} icon={<VscInspect />} description={'Produkty'} />
                        </div>
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={'/about'} icon={<VscMilestone />} description={'O Nas'} />
                        </div>
                        <div onClick={() => setToggleMenu(MenuInitPosition)}>
                            <StyledLink target={'/contact'} icon={<BsEnvelope />} description={'Kontakt'} />
                        </div>

                        {Object.keys(auth).length !== 0 ? (
                            <>
                                <div onClick={() => setToggleMenu(MenuInitPosition)}>
                                    <StyledLink
                                        target={'/accountSettings/Settings'}
                                        icon={<VscAccount />}
                                        description={'Konto'}
                                    />
                                </div>
                                <div onClick={signOut}>
                                    <StyledLink target={''} icon={<RiLogoutCircleLine />} description={'Wyloguj się'} />
                                </div>
                            </>
                        ) : (
                            <div onClick={() => setToggleMenu(MenuInitPosition)}>
                                <StyledLink
                                    target={'/authorization'}
                                    icon={<RiUserReceived2Line />}
                                    description={'Logowanie'}
                                />
                            </div>
                        )}
                    </StyledLinksSmallScreenSection>
                    {/* )} */}
                </SmallScreenSection>
            </InsideWrapper>
        </Wrapper>
    );
};

export default NavBar;
