import React from 'react';
import { Wrapper, Nav, StyledLink, Description } from './AccountMenu.style';
import { FiSettings, FiPackage } from 'react-icons/fi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const AccountMenu = () => {
    return (
        <Wrapper>
            <h2>Menu Konta</h2>
            <Nav>
                <StyledLink to="/accountSettings/Settings">
                    <div>
                        <span>
                            <FiSettings />
                        </span>
                    </div>
                    <Description>Ustawienia</Description>
                </StyledLink>

                <StyledLink to="/accountSettings/Orders">
                    <div>
                        <span>
                            <FiPackage />
                        </span>
                    </div>
                    <Description> Zamowienia</Description>
                </StyledLink>

                <StyledLink to="/accountSettings/recipientTemplates">
                    <div>
                        <span>
                            <BsFillPersonLinesFill />
                        </span>
                    </div>
                    <Description>Odbiorcy</Description>
                </StyledLink>
            </Nav>
        </Wrapper>
    );
};

export default AccountMenu;
