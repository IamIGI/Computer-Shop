import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
    width: 100%;
    min-width: 220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const Title = styled.div`
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    text-align: left;
    padding-left: 6%;
    color: red;
    padding-top: 8px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const FormSection = styled.div``;

export const InputLocal = styled(Input)``;

export const ButtonLocal = styled(Button)`
    background-color: red;
    color: white;

    :hover {
        background-color: ${({ theme }) => theme.colors.warning};
    }
`;
