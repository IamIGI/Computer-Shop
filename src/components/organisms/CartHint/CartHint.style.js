import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
`;

export const TitleSection = styled.div`
    position: relative;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
`;

export const Quantity = styled.div`
    position: absolute;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: ${({ theme }) => theme.colors.successDark};
    color: white;
    font-weight: 700;
    padding-top: 7px;
    font-size: 20px;

    right: -12px;
    top: -12px;
`;

export const ProductQuantity = styled.div`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-color: ${({ theme }) => theme.colors.success};
    color: white;
    font-size: 15px;
    font-weight: 700;
    padding-top: 5px;
    position: absolute;
    right: -12px;
    top: -12px;
`;

export const ProductsSection = styled.div`
    width: 100%;
    height: 100%;
    padding: 3% 9%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Image = styled.div`
    position: relative;
    margin: 3%;
    height: 80px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
        border-radius: 20px;
    }
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 1px 1px 6px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 10px;
        cursor: pointer;
    }
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const Link = styled(NavLink)`
    color: black;
    text-decoration: none;
`;

export const RemoveBasket = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 12px 0;
    padding: 0 8px;
    padding-top: 7px;
    border: 2px solid white;
    border-radius: 50%;
    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.successDark};
        border: 2px solid ${({ theme }) => theme.colors.successDark};
        border-radius: 50%;
    }
`;
