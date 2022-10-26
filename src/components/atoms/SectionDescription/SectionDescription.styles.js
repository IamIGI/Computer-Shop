import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const IconTitle = styled.div`
    padding-top: 7px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`;

export const ContentTitle = styled.div`
    min-width: fit-content;
    padding: 0;
    margin: 0;
    margin-left: 30px;
    font-size: ${({ theme }) => theme.fontSize.xxl};

    @media screen and (max-width: 650px) {
        margin-left: 10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
export const ContentDescription = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-left: 30px;
    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const Line = styled.div`
    margin-right: 30px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
