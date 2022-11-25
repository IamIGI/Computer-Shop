import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-top: 2%;
    width: 100%;
    z-index: 3;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 1210px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l_plus};
        }
    }

    @media screen and (max-width: 1050px) {
        h2 {
            display: none;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;

    @media screen and (max-width: 1050px) {
        flex-direction: row;
    }

    @media screen and (max-width: 800px) {
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 560px) {
        gap: 7px;
    }
`;

export const StyledLink = styled(NavLink)`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    width: 91%;
    margin-right: 5%;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    div {
        margin-right: 10px;
    }
    border-bottom: 1px solid transparent;

    :hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
        span {
            color: ${({ theme }) => theme.colors.success};
        }
    }

    &.active {
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
        span {
            color: ${({ theme }) => theme.colors.success};
        }
    }

    @media screen and (max-width: 1210px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 1050px) {
        width: 250px;
    }

    @media screen and (max-width: 800px) {
        justify-content: center;
    }

    @media screen and (max-width: 560px) {
        width: 200px;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 470px) {
        width: fit-content;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;
