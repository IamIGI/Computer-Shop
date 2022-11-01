import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 20%;
    min-width: 200px;
    max-width: 300px;
    padding: 10px 1%;
    @media screen and (max-width: 600px) {
        min-width: 140px;
    }

    @media screen and (max-width: 500px) {
        padding: 0px 1%;
        padding-top: 5px;
    }
`;

export const UserDataDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;
export const Icon1 = styled.div`
    margin-right: 10px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
export const Icon2 = styled.div`
    margin-right: 10px;
    color: green;
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const ApprovedDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};

    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const UserName = styled.div`
    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;
export const UserDataApproved = styled.div`
    margin-left: 1.5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-top: 4px;

    @media screen and (max-width: 500px) {
        margin-top: 0px;
    }
`;
