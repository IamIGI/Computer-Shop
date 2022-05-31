import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    grid-row: 1/1;
    grid-column: 1/5;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    padding: 2%;
    box-sizing: border-box;
    margin: 0;
`;

export const Nav = styled.nav`
    background-color: white;
    height: 55px;
    border-radius: 15px;
    box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 1rem;

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        gap: 3rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        /* padding: 0.25rem; */
    }
`;

export const SiteTitle = styled.a`
    padding: 3px;
    padding-right: 20px;
    border-radius: 15px 0 0 15px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    background-color: ${({ theme }) => theme.colors.grey};

    span {
        padding-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    &:hover {
        span {
            color: ${({ theme }) => theme.colors.lightOrangePro};
        }
    }
`;

export const StyledLink = styled(NavLink)`
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    /* border-radius: 15px; */
    box-shadow: 0 20px 2px -16px ${({ theme }) => theme.colors.lightDarkPro};
    padding: 0.25rem;

    &:hover {
        box-shadow: 0 20px 2px -16px ${({ theme }) => theme.colors.lightOrangePro};
    }

    &.active {
        box-shadow: 0 20px 2px -16px ${({ theme }) => theme.colors.OrangePro};
    }
`;
