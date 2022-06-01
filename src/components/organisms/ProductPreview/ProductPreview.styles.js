import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    a,
    a:hover,
    a:visited,
    a:active {
        color: inherit;
        text-decoration: none;
    }
    justify-content: left;
    text-align: left;
    margin: 15px 15px;
    width: 290px;
    border: 1px solid white;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 10px;
        cursor: pointer;

        button {
            color: ${({ theme }) => theme.colors.success};
            border: 1px solid ${({ theme }) => theme.colors.success};
        }
    }
`;

export const Top = styled.div`
    justify-content: center;
    text-align: center;
    img {
        max-height: 150px;
        max-width: auto;
    }

    h1 {
        height: 45px;
        width: 90%;
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    span {
        font-size: ${({ theme }) => theme.fontSize.l};
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
export const StyledRecord = styled.li`
    height: 40px;
    width: 90%;
    display: flex;
    align-items: center;
    position: relative;

    padding-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    &:not(:last-child)::after {
        //every element without last
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
`;
