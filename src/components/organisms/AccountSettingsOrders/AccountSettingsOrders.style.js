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

    width: 100%;
    height: 100%;
    padding-top: 5%;
    display: grid;
    grid-template-rows: 70px 1fr 1px 100px;
`;

export const TitleSection = styled.div`
    height: 100%;
    width: 100%;
    grid-row: 1/2;
    justify-content: left;
    text-align: left;
    padding-left: 5%;
`;

export const BodySection = styled.div`
    height: 100%;
    width: 100%;
    grid-row: 2/3;
    justify-content: center;
    text-align: center;
`;

export const Line = styled.div`
    grid-row: 3/4;
    width: 80%;
    margin-left: 10%;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const FooterSection = styled.div`
    height: 100%;
    width: 100%;
    grid-row: 4/4;
    justify-content: right;
    text-align: right;
    align-items: right;
    padding-top: 15px;
    padding-right: 10%;
    display: flex;
    flex-direction: row;
`;

export const OrderContent = styled.div`
    height: 175px;
    width: 90%;
    margin: 3% 5%;
    display: grid;
    grid-template-columns: 0.35fr 0.65fr;
    border-radius: 40px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        cursor: pointer;
    }
`;

export const OrderDescription = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    text-align: left;
    padding-left: 15%;
`;

export const DateDecorator = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 600;
    margin-bottom: 5px;
`;

export const OrderProducts = styled.div`
    height: 100%;
    width: 100%;
    justify-content: left;
    grid-column: 2/2;
    padding-top: 3%;
    padding-left: 5%;
    display: flex;
    flex-direction: row;
`;
export const ProductImage = styled.div`
    height: 120px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }
`;
export const ProductImageSmall = styled.div`
    margin-top: 5%;
    margin-left: 3%;
    height: 70px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }
`;

export const ProductDescription = styled.div`
    padding-top: 4%;
    justify-content: center;
    text-align: left;
    padding-left: 5%;
    p {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        /* color: ${({ theme }) => theme.colors.darkGrey}; */
    }
`;

export const PageButton = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    margin-left: 10px;
    padding-top: 15px;
    font-size: ${({ theme }) => theme.fontSize.l};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.black};
        box-shadow: 1px 1px 12px 1px ${({ theme }) => theme.colors.grey};
        cursor: pointer;
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
`;

export const NoOrders = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 100%;
`;

export const NoOrderIcon = styled.div`
    font-size: 4vw;
`;

export const NoOrderDescription = styled.div`
    font-size: 30px;
`;
