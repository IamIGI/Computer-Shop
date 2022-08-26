import styled from 'styled-components';
import { Button } from '../Button/Button';

export const OutsideWrapper = styled.div`
    position: 'fixed';
    width: 300px;
    transform: translate(40vw, -60vh);
    background-color: white;
    /* z-index: 1000; */
    border: 1px solid grey;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const InsideWrapper = styled.div`
    position: relative;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* z-index: 1000; */
`;

export const ButtonWrap = styled.div`
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Close = styled.div`
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding-left: 16px;
    padding-top: 16px;
    font-size: 19px;
    top: 5px;
    right: 5px;

    &:hover {
        color: black;
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;
