import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-row: 2/3;
    grid-column: 3/4;
    padding-top: 20px;
    /* border: 1px solid blue; */
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    justify-content: center;
`;

export const Separator = styled.hr`
    width: 70%;
`;
