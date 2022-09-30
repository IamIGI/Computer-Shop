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

export const InsideWrapper = styled.div`
    position: relative;
`;

export const OrderContent = styled(NavLink)`
    text-decoration: none;
    position: relative;
    height: 175px;
    width: 90%;
    margin: 3% 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 40px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        cursor: pointer;
    }
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

export const DateDecorator = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 600;
    margin-bottom: 5px;
`;

export const OrderDescription = styled.div`
    height: 100%;
    min-width: 350px;
    width: fit-content;
    /* grid-column: 1/2; */
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    text-align: left;
    padding-left: 5%;
    padding-top: 30px;
    h4 {
        padding: 7px 0;
        margin: 0;
    }
`;

export const OrderProducts = styled.div`
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    height: 100%;
    width: 100%;
    justify-content: left;
    padding-left: 5%;
    display: flex;
    align-items: center;
    flex-direction: row;
`;
export const ProductImage = styled.div`
    position: relative;
    height: 120px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }
`;
export const ProductImageSmall = styled.div`
    position: relative;
    margin-left: 3%;
    height: 70px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }
`;

export const ProductDescription = styled.div`
    justify-content: center;
    text-align: left;
    padding-left: 5%;
    p {
        font-size: ${({ theme }) => theme.fontSize.l};
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

export const Quantity = styled.div`
    border-radius: 50%;
    height: ${({ height }) => `${height}px`};
    width: ${({ width }) => `${width}px`};
    background-color: ${({ theme }) => theme.colors.success};
    color: white;
    font-size: 15px;
    font-weight: 700;
    padding-top: 5px;
    position: absolute;
    right: -10px;
    bottom: -10px;
`;

export const GetPDF = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 5px 6px 1px 6px;
    border: 1px solid white;
    border-radius: 50%;

    :hover {
        background-color: ${({ theme }) => theme.colors.lightLightGrey};
    }
`;

export const HandyMenu = styled.div`
    z-index: 100;
    position: absolute;
    top: 60px;
    right: 5%;
    padding: 15px 10px;
    width: fit-content;
    background-color: white;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 5px;
    box-shadow: 4px 4px 8px 1px ${({ theme }) => theme.colors.grey};
`;

export const IconPDF = styled.div``;

export const DescriptionPDF = styled.div`
    margin-left: 5px;
`;
