import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
    border: 1px solid grey;
    border-radius: 25px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    a {
        text-decoration: none;
    }

    h1 {
        margin-left: 40px;
    }

    p {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
    span {
        color: ${({ theme }) => theme.colors.darkGrey};
    }
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
`;

export const OldPrice = styled.div`
    text-decoration: line-through;
`;

export const CurrentPrice = styled.div`
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const BuySection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
`;
export const NumberInput = styled(Input)`
    width: 50px;
    height: 50px;
    padding: 0;
    margin: 0;
`;

export const BuyButton = styled(Button)`
    color: white;
    background-color: green;
    font-size: 20px;
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
`;

export const BuyIcon = styled.div`
    font-size: 25px;
    margin-right: 10px;
`;

export const HintSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
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
`;

export const HintAsk = styled.div`
    color: gray;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const Separator = styled.hr`
    width: 80%;
`;
