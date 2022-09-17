import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
`;

export const StarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 150px;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding-top: 8px;
    margin-right: 1%;
`;

export const Date = styled.div`
    padding-top: 14px;
    margin-left: 1%;
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Dot = styled.div`
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;
