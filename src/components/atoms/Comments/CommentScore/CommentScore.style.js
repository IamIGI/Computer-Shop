import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ScoreDescription = styled.div`
    padding-top: 6px;
    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        padding-top: 4px;
    }

    @media screen and (max-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        padding-top: 4px;
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding-top: 4px;
    }
`;

export const Icon3 = styled.div`
    padding-top: 4px;
    margin-left: 15px;
    font-size: ${({ theme }) => theme.fontSize.xl};

    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.successDark};
    }

    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const LikeNumber = styled.div`
    padding-top: 7px;
    padding-left: 4px;
    @media screen and (max-width: 860px) {
        padding-top: 5px;
    }
`;

export const Alert = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: ${({ theme }) => theme.colors.error};
    margin: 6px 0 0 15px;
`;

export const Icon4 = styled.div`
    margin: 3px 0 0 5px;
`;
