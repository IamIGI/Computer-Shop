import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    height: 300px; //delete after
    margin-top: 2%;
    margin-left: 5%;
    width: 90%;
    border-radius: 25px;
`;

export const StyledLink = styled(NavLink)`
    font-size: ${({ theme }) => theme.fontSize.l};
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
`;

export const Nav = styled.nav``;

export const Icon = styled.div``;
