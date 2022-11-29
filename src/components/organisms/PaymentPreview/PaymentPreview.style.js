import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border-top: 1px solid gray;
`;

export const PromoCodeAlertSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const PromoCodeIcon = styled.div`
    color: ${({ theme }) => theme.colors.successDark};
    font-size: ${({ theme }) => theme.fontSize.l_plus};
`;

export const PromoCodeAlert = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    padding-bottom: 2px;
`;

export const PromoSection = styled.div`
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 15px;
    padding-bottom: 10px;
`;

export const PromoDescription = styled.div`
    font-weight: 700;
    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const CustomPromoForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 440px) {
        margin-top: 10px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;

export const PromoInput = styled.input`
    padding: 6px 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 8px 0px, rgb(0 0 0 / 8%) 0px 0px 4px 2px;
    border-radius: 10px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;

    :focus {
        outline: none !important;
        border: 1px solid grey;
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 440px) {
        width: 80%;
    }
`;

export const Section = styled.div`
    margin-left: 5%;
    width: 80%;

    @media screen and (max-width: 1510px) {
        width: 90%;
    }
`;

export const ListSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const List = styled.ul`
    padding: 0px;

    list-style: none;
    li {
        width: 100%;

        margin-bottom: 15px;
    }

    li:last-child {
        padding-top: 30px;
        border-top: 1px solid grey;
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 700;
    }

    @media screen and (max-width: 500px) {
        li {
            margin-bottom: 10px;
        }

        li:last-child {
            padding-top: 15px;
        }
    }
`;

export const Name = styled.div`
    text-align: left;
    padding-left: 20px;

    @media screen and (max-width: 500px) {
        padding-left: 10px;
    }
`;

export const Price = styled.div`
    padding-right: 20px;
`;

export const FinishSection = styled.div`
    width: 100%;
`;

export const PromoButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.success};
    padding: 5.5px 25px;
    :hover {
        background-color: ${({ theme }) => theme.colors.successDark};
        color: black;
    }

    @media screen and (max-width: 1510px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 440px) {
        width: 80%;
    }
`;

export const LocalButton = styled(Button)`
    margin-left: 5%;
    width: 90%;
    background-color: ${({ theme }) => theme.colors.success};
    font-size: ${({ theme }) => theme.fontSize.xl};

    :hover {
        background-color: ${({ theme }) => theme.colors.successDark};
        color: black;
    }

    @media screen and (max-width: 1510px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const AlertDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSize.s};
    width: 60%;
`;

export const NoUserAlert = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const AlertIcon = styled.div`
    margin-right: 14px;
    color: red;
`;
