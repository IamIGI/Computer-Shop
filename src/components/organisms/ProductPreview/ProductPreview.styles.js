import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    position: relative;
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
    height: fit-content;
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
    padding-left: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    span {
        font-size: ${({ theme }) => theme.fontSize.xl};
        color: black;
    }
    padding-bottom: 10px;
`;

export const ProductOpinionsShort = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
    padding-top: 5px;
    margin: 0 3%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
`;

export const Rating = styled.div`
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSize.s};
`;

export const Opinions = styled.div`
    color: black;
    padding-top: 5px;
    font-size: ${({ theme }) => theme.fontSize.l};
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
    color: ${({ theme }) => theme.colors.black};

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

export const PriceSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: baseline;
`;
export const PriceOldValue = styled.div`
    text-decoration: line-through;
    margin-right: 10px;

    color: ${({ theme }) => theme.colors.darkGrey};
    span {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const PriceValue = styled.div`
    span {
        color: ${({ theme }) => theme.colors.successDark};
        font-weight: 700;
    }
`;
