import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width: 350px;
    grid-column: 3/4;
    padding-top: 20px;
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    justify-content: center;
`;

export const Separator = styled.hr`
    width: 70%;
`;
