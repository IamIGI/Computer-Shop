import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-top: 2%;
    margin-left: 10%;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 700;
`;

export const Icon = styled.div`
    margin-top: 3px;
    margin-right: 10px;
    font-size: 35px;
`;

export const Title = styled.div``;

export const UserDescription = styled.div``;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    width: 83%;
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

export const LogoutLink = styled(NavLink)`
    text-decoration: none;
    width: 83%;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 15px;
    div {
        margin-right: 10px;
    }
    border-bottom: 1px solid white;

    span {
        font-size: 24px;
        margin: 0px;
        padding: 0px;
    }

    :hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
        span {
            color: ${({ theme }) => theme.colors.success};
        }
    }
`;

export const NavDescription = styled.div`
    padding-bottom: 4px;
`;

export const Line = styled.div`
    /* margin-left: 15%;
    width: 70%; */
    margin-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
