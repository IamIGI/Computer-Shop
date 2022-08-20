import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-top: 2%;
    width: 100%;
`;

export const StyledLink = styled(NavLink)`
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 90%;
    margin-right: 5%;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 15px;
    div {
        margin-right: 10px;
    }
    border-bottom: 1px solid white;

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
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    li: {
        margin: 0;
        padding: 0;
    }
`;

export const Nav = styled.nav``;

export const Icon = styled.div``;
