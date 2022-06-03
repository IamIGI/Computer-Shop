import styled from 'styled-components';
import { Button } from '../Button/Button';

export const Wrapper = styled.div`
    width: 300px;
    position: 'fixed';
    top: 50%;
    left: 50%;
    transform: translate(70%, -130%);
    /* transform: translate(20%, -150%); */
    background-color: white;
    /* padding: 50px; */
    z-index: 3;
    border: 1px solid grey;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
`;

export const ButtonWrap = styled.div`
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const ButtonLocal = styled(Button)`
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.success};
    font-size: ${({ theme }) => theme.fontSize.m_plus};

    &:hover {
        color: black;
        background-color: ${({ theme }) => theme.colors.successDark};
    }
`;
