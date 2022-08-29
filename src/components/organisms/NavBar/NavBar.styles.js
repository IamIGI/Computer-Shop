import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    grid-row: 1/2;
    grid-column: 1/5;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    margin-top: 40px;
    padding: 0 4%;
    box-sizing: border-box;
`;

export const Nav = styled.nav`
    background-color: white;
    height: 55px;
    border-radius: 15px;

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
    }
`;

export const SiteTitle = styled(NavLink)`
    padding: 15px;
    padding-right: 20px;
    border-radius: 15px 0 0 15px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
    background-color: ${({ theme }) => theme.colors.lightPurple};

    span {
        padding-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    :hover {
        background-color: ${({ theme }) => theme.colors.grey};

        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.successDark};

        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const StyledLink = styled(NavLink)`
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    padding: 0.25rem;

    span {
        margin-right: 5px;
    }

    &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.success};
    }

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.successDark};
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }

    :hover {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const List = styled.ul`
    li {
        :not(:first-child) {
            padding-left: 50px;
            border-left: 2px solid ${({ theme }) => theme.colors.grey};
            /* border: 1px solid red; */
        }
    }
`;
