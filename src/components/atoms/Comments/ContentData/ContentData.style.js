import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
`;

export const StarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: fit-content;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-right: 1%;

    @media screen and (max-width: 860px) {
        padding-top: 3px;
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    @media screen and (max-width: 450px) {
        padding-top: 3px;
        font-size: ${({ theme }) => theme.fontSize.s_minus};
    }
`;

export const Date = styled.div`
    padding-top: 5px;
    margin-left: 1%;
    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const Dot = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;
