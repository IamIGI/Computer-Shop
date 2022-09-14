import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width: 300px;
    grid-column: 3/4;
    padding-top: 20px;
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    flex-wrap: nowrap;
    padding-left: 20px;
`;

export const InsideWrapper = styled.div`
    max-width: 300px;
`;

export const Separator = styled.hr`
    width: 70%;
`;
