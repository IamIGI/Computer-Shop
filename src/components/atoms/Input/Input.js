import styled from 'styled-components';

export const Input = styled.input`
    margin: 10px 10px 0 10px;
    height: 32px;
    width: 200px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.success};
    }
`;
