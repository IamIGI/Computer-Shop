import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    /* padding-left: 5%; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 40px;
    /* border: 1px solid grey */
    border-top: 1px solid gray;
`;

export const Section = styled.div`
    margin-left: 5%;
    width: 80%;
`;

export const ListSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const List = styled.ul`
    list-style: none;
    li {
        margin-bottom: 15px;
    }

    li:last-child {
        /* background-color: red; */
        padding-top: 30px;
        border-top: 1px solid grey;
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 700;
    }
`;

export const Name = styled.div`
    /* width: 200px; */
    text-align: left;
    padding-left: 20px;
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
