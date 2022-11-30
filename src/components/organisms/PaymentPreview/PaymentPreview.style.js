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
