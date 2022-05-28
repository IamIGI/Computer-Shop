import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: white;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    //center childs
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 4%;

    &:hover {
        color: ${({ theme }) => theme.colors.success};
        border: 1px solid ${({ theme }) => theme.colors.success};
    }
`;
