import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
    &.active {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
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
