import React from 'react';
import { Wrapper, Nav, StyledLink } from './AccountMenu.style';
import { FiSettings, FiPackage } from 'react-icons/fi';

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
                    <div>Ustawienia konta</div>
                </StyledLink>

                <StyledLink to="/accountSettings/Orders">
                    <div>
                        <span>
                            <FiPackage />
                        </span>
                    </div>
                    <div> Zamowienia</div>
                </StyledLink>
            </Nav>
        </Wrapper>
    );
};

export default AccountMenu;
