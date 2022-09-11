import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 10px 4%;
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
    font-size: ${({ theme }) => theme.fontSize.xxl};
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
    margin-right: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
`;

export const StyledLink = styled(NavLink)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;

    margin-right: 40px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 10px;
    border-bottom-left-radius: 15px;
    border-bottom: 2px solid grey;
    border-left: 2px solid grey;

    &:hover {
        border-color: ${({ theme }) => theme.colors.successDark};
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }

    &.active {
        border-color: ${({ theme }) => theme.colors.successDark};
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const LinkIcon = styled.div``;
export const LinkDescription = styled.div`
    margin-left: 10px;
`;
