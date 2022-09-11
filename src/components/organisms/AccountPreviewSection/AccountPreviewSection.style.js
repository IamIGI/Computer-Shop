import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width: 350px;
    /* height: 79vh; */
    /* grid-row: 2/3; //comment */
    grid-column: 3/4;
    padding-top: 20px;
    /* border: 1px solid blue; */
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    justify-content: center;
    /* margin: right; */
`;

export const Separator = styled.hr`
    width: 70%;
`;
