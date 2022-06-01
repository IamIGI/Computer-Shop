import React from 'react';

import { Wrapper, List, Nav, StyledLink } from './AccountMenu.style';
import { FiSettings, FiPackage } from 'react-icons/fi';

const AccountMenu = () => {
    return (
        <Wrapper>
            <h2>Menu Konta</h2>
            <Nav>
                <List>
                    <li>
                        <StyledLink to="/accountSettings/Settings">
                            <div>
                                <FiSettings />
                            </div>
                            <div>Ustawienia konta</div>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/accountSettings/Orders">
                            <div>
                                <FiPackage />
                            </div>
                            <div> Zamowienia</div>
                        </StyledLink>
                    </li>
                </List>
            </Nav>
        </Wrapper>
    );
};

export default AccountMenu;
