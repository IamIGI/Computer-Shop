import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
    border: 1px solid grey;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const DiscountSize = styled.div`
    margin-left: auto; //that could be problem
    text-align: right;
    justify-content: right;
    align-items: right;
`;

export const PriceSection = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
    margin-left: auto;

    @media screen and (max-width: 1100px) {
        margin-top: 5px;
    }
`;

export const OldPrice = styled.div`
    text-decoration: line-through;
`;

export const CurrentPrice = styled.div`
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media screen and (max-width: 1400px) {
        font-size: 22px;
    }
`;

export const BuySection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;

    @media screen and (max-width: 1300px) {
        width: 100%;
        justify-content: center;
    }

    @media screen and (max-width: 1100px) {
        margin-bottom: 5px;
    }
`;
export const NumberInput = styled(Input)`
    width: 50px;
    height: 50px;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 1400px) {
        width: 45px;
        height: 45px;
    }
`;

export const BuyButton = styled(Button)`
    color: white;
    background-color: green;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 400;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-left: 10px;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.success};
    }

    @media screen and (max-width: 1400px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 625px) {
        width: 100%;
    }
`;

export const BuyIcon = styled.div`
    font-size: 25px;
    margin-right: 10px;

    @media screen and (max-width: 1400px) {
        font-size: 22px;
    }
`;

export const HintSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom-right-radius: 20px;

    :hover {
        cursor: pointer;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
        border-bottom-right-radius: 20px;
    }
`;

export const HintIcon = styled.div`
    font-size: 30px;
    padding-top: 10px;
    margin-right: 20px;

    @media screen and (max-width: 1400px) {
        font-size: 25px;
    }

    @media screen and (max-width: 1100px) {
        padding-top: 5px;
    }
`;

export const HintDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: left;
`;

export const HintTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 24px;
    color: black;

    @media screen and (max-width: 1400px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const HintAsk = styled.div`
    color: gray;
    font-size: ${({ theme }) => theme.fontSize.m_plus};

    @media screen and (max-width: 1400px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const Separator = styled.hr`
    width: 80%;
`;
