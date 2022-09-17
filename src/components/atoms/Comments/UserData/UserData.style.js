import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 20%;
    min-width: 200px;
    max-width: 300px;
    padding: 10px 1%;
`;

export const UserDataDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;
export const Icon1 = styled.div`
    margin-right: 10px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;
export const Icon2 = styled.div`
    margin-right: 10px;
    color: green;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ApprovedDescription = styled.div`
    margin-top: 3px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const UserName = styled.div`
    margin-top: 11px;
`;
export const UserDataApproved = styled.div`
    margin-left: 1.5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-top: 1%;
`;
