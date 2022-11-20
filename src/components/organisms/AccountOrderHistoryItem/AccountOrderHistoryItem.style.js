import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding-top: 3%;
    width: 90%;
    margin-left: 5%;
`;

export const OrderTitleSection = styled.div`
    width: 100%;
    justify-content: left;
    text-align: left;
    margin-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

    @media screen and (max-width: 1050px) {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 600px) {
        padding-bottom: 5px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const HistorySection = styled.div`
    width: 100%;
    margin-bottom: 100px;

    @media screen and (max-width: 1050px) {
        margin-bottom: 50px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 400px) {
        margin-bottom: 20px;
    }
`;

export const OrderSection = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        height: 120px;
    }

    @media screen and (max-width: 600px) {
        height: fit-content;

        margin-bottom: 20px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: 10px;
    }
`;

export const OrderSectionTitle = styled.div`
    height: 40px;
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
    justify-content: left;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin-bottom: 0px;
        height: 35px;
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-bottom: 0px;
        height: 30px;
    }

    @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-bottom: 0px;
        height: 25px;
    }
`;

export const OrderSectionDescription = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px;
    padding-left: 3%;

    @media screen and (max-width: 800px) {
        height: 80px;
    }

    @media screen and (max-width: 600px) {
        height: 70px;
    }

    @media screen and (max-width: 500px) {
        height: 60px;
    }

    @media screen and (max-width: 430px) {
        height: 50px;
    }
`;

export const Icon = styled.div`
    margin-right: 20px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin-right: 14px;
    }
`;

export const Desc = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding-right: 6px;

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const UserDataSection = styled.div`
    margin-top: 2%;
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media screen and (max-width: 750px) {
        justify-content: space-between;
        height: fit-content;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 450px) {
        flex-direction: column;
        height: fit-content;
        margin-bottom: 10px;
        gap: 10px;
    }
`;

export const DeliveryData = styled.div`
    height: 100%;
    width: 45%;
    margin-right: 10%;

    @media screen and (max-width: 750px) {
        width: 48%;
        margin-right: 0%;
    }

    @media screen and (max-width: 450px) {
        width: 100%;
    }
`;

export const UserData = styled.div`
    height: 100%;
    width: 45%;

    @media screen and (max-width: 750px) {
        width: 48%;
    }

    @media screen and (max-width: 450px) {
        width: 100%;
    }
`;

export const UserDataDescription = styled.div`
    padding-left: 10px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px;

    ul {
        margin-top: 10px;
        padding-left: 10px;
    }

    li {
        list-style: none;
        padding: 3px 0;

        a {
            text-decoration: none;
        }
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        padding-left: 5px;
    }

    @media screen and (max-width: 450px) {
        padding-left: 0px;
    }
`;

export const ProductSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;

    @media screen and (max-width: 800px) {
        margin-top: 20px;
    }

    @media screen and (max-width: 600px) {
        margin-top: 10px;
    }
`;

export const ProductElement = styled(NavLink)`
    border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: black;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 800px) {
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const ProductImage = styled.div`
    height: 120px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }

    @media screen and (max-width: 810px) {
        height: 110px;
    }

    @media screen and (max-width: 600px) {
        height: 90px;
    }

    @media screen and (max-width: 450px) {
        height: 80px;
    }
`;

export const ProductDescription = styled.div`
    width: 70%;
    padding-top: 1%;
    justify-content: center;
    text-align: left;
    padding-left: 5%;
    padding-right: 10px;
    p {
        span {
            text-decoration: line-through;
            font-weight: 400;
        }
    }

    p:last-child {
        font-weight: 700;
    }

    @media screen and (max-width: 450px) {
        padding-left: 2%;
        padding-top: 0%;
        p {
            margin: 3px;
        }

        p:first-child {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
`;

export const ProductQuantity = styled.div`
    margin: 20px 0;
    border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
    height: 80%;
    width: 65px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        width: 60px;
    }
`;

export const SummarySection = styled.div`
    width: 40%;
    margin-left: 60%;
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    ul {
        margin-top: 10px;
        padding-left: 10px;
    }

    li {
        list-style: none;
        padding: 7px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    li:last-child {
        font-weight: 700;
    }

    @media screen and (max-width: 950px) {
        width: 50%;
        margin-left: 50%;
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-bottom: 60px;
    }

    @media screen and (max-width: 650px) {
        width: 60%;
        margin-left: 40%;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 450px) {
        width: 70%;
        margin-left: 30%;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 370px) {
        width: 75%;
        margin-left: 25%;
    }
`;

export const Line = styled.div`
    width: 100%;
    margin-bottom: 3%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
