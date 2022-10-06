import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    margin-top: 10px;
    padding: 10px 0;
    padding-right: 3%;
`;

export const InsideWrapper = styled.div`
    position: relative;
    margin: auto;
    max-width: 2100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;

    min-height: fit-content;

    a {
        color: black;
        text-decoration: none;
    }
`;

export const Home = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    border-bottom-left-radius: 30px;
    border-bottom: 2px solid grey;
    border-left: 2px solid grey;

    :hover {
        border-color: ${({ theme }) => theme.colors.successDark};
        /* background-color: ${({ theme }) => theme.colors.grey}; */
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;
export const Title = styled.div`
    margin-left: 20px;
    color: black;
`;

export const Icon = styled.div`
    border: 2px solid gray;
    border-radius: 50%;
    padding: 6px 8px 2px 8px;
    background-color: ${({ theme }) => theme.colors.lightPurple};
`;

export const SiteTitle = styled(NavLink)`
    &.active {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const Navigation = styled.div`
    margin-right: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 950px) {
        display: none;
    }
`;
export const StyledLink = styled(NavLink)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;

    margin-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 6px 10px 6px 15px;
    /* border-bottom-left-radius: 15px;
    border-bottom: 2px solid grey; */
    /* border: 1.3px solid grey; */
    border-left: 1.3px solid grey;
    transition: 0.5s ease;

    &:hover {
        /* border-color: ${({ theme }) => theme.colors.successDark}; */
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }

    &.active {
        /* border-color: ${({ theme }) => theme.colors.successDark}; */
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const LinkIcon = styled.div``;
export const LinkDescription = styled.div`
    margin-left: 10px;
`;

//-------------MEDIUM SCREEN--------------
export const StyledLinkMediumScreen = styled.div`
    display: none;
    @media screen and (max-width: 1370px) {
        display: flex;
        flex-direction: row;
        transition: 0.5s ease;
    }
`;

export const NavigationSmallScreen = styled.div`
    display: none;
    margin-right: 2%;

    @media screen and (max-width: 950px) {
        display: flex;
        flex-direction: column;
        transition: 0.5s ease;
    }
`;

export const HamburgerMenu = styled.div`
    margin-top: 5px;
    padding: 0;
    font-size: 27px;
    transition: 0.5s ease;
    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.successDark};
    }
`;

export const StyledLinksSmallScreenSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: left;
    position: fixed;
    top: 40px;
    right: 0;
    width: 200px;
    height: fit-content;
    background: var(--color-black);
    border: 1px solid gray;

    background-color: white;
    z-index: 5;

    @media screen and (max-width: 650px) {
        align-items: center;
        top: 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        transition: 0.5s ease;
    }
`;

export const StyledLinkSmallScreen = styled(NavLink)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    /* border: 1px solid gray; */
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 10px;
    transition: 0.5s ease;

    &:hover {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }

    &.active {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;
