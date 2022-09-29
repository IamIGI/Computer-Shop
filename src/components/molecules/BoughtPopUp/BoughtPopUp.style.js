import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 18px 0 15px 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
    border-bottom: 1px solid gray;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    color: ${({ theme }) => theme.colors.successDark};
`;

export const TitleDescription = styled.div`
    margin-left: 15px;
`;

export const ListOfProducts = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin: 0 7%;
    font-size: ${({ theme }) => theme.fontSize.l};
    p {
        font-weight: 700;
    }
`;

export const Product = styled.div`
    display: grid;
    grid-template-columns: 1fr 80px;
    margin-bottom: 10px;
`;

export const Description = styled.div`
    grid-column: 1/2;

    span {
        /* font-size: ${({ theme }) => theme.fontSize.xxl}; */
        font-weight: 700;
        margin-right: 20px;
    }
`;

export const Quantity = styled.div`
    grid-column: 2/2;
    padding-left: 20px;
    border-left: 1px solid gray;
`;

export const BottomSection = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
`;
