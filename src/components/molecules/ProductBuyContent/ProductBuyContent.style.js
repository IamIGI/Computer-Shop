import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
    width: 260px;
    border: 1px solid grey;
    border-radius: 25px;
    padding: 0 15px;

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

export const Separator = styled.hr`
    width: 70%;
`;

export const BuyButton = styled(Button)`
    color: white;
    background-color: green;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.success};
    }
`;

export const NumberInput = styled(Input)`
    width: 50px;
    padding: 0;
    margin: 0 10px 0 0;
`;
