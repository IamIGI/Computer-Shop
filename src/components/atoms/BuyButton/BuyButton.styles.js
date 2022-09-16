import styled from 'styled-components';

export const StyledButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 20px;
    z-index: 1;
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

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightPurple};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.error};
    }
`;
