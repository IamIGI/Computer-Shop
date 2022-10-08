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
    max-width: 380px;
    margin: 20px;
    height: fit-content;
    padding: 20px 20px 30px 20px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 30px;
    text-align: center;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 30px;
        cursor: pointer;

        h2 {
            color: red;
        }
    }

    @media screen and (max-width: 1100px) {
        max-width: 1000px;
    }
`;

export const InsideWrapper = styled(NavLink)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    text-decoration: none;

    @media screen and (max-width: 1100px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
    @media screen and (max-width: 650px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const ProductDescription = styled.div`
    width: 100%;
`;

export const PromoDescription = styled.div`
    width: 100%;
    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 20px;
        padding-bottom: 20px;
    }
`;

export const Title = styled.div`
    margin-top: -10px;
    margin-left: 20px;
    text-align: left;
`;

export const Image = styled.div`
    margin-top: -20px;
    img {
        width: 300px;
    }
`;

export const Description = styled.div`
    margin: 0 15px;
    p {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const Price = styled.div`
    margin-top: -10px;
    span {
        text-decoration: line-through;
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    h3 {
        margin-top: -10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
export const DescTimer = styled.div`
    h3 {
        margin-top: -10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
        span {
            color: red;
        }
    }
`;
export const Timer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const GivenTime = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0 10px;
    padding-top: 17px;
    width: 70px;
    height: 70px;
`;

export const Colon = styled.div`
    margin-top: 9px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;
