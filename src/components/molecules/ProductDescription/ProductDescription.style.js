import styled from 'styled-components';

export const DescWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const IconTitle = styled.div`
    padding-top: 7px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;

export const ContentTitle = styled.div`
    padding-top: 7px;
    margin-left: 30px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const Line = styled.div`
    margin-left: 30px;
    width: 95%;
    margin-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey}; ;
`;
