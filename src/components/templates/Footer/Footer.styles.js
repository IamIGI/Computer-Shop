import styled from 'styled-components';

export const Wrapper = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
    grid-row: 3/3;
    grid-column: 1/5;
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
`;
