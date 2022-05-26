import styled from 'styled-components';

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    display: flex;
    justify-content: left;
    text-align: left;
    margin-left: 5%;
    padding-bottom: 5%;
`;
