import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
`;

export const IconTitle = styled.div`
    padding-top: 7px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;

export const ContentTitle = styled.div`
    padding-top: 7px;
    margin-left: 30px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    /* width: 50%; */
`;

export const Line = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    width: 75%;
    margin-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey}; ;
`;
