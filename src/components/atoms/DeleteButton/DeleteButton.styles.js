import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 22.5px;
    height: 22.5px;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 50%;
    border: none;
    color: white;
    cursor: pointer;
    //center childs
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 4%;
    svg {
        height: 100%;
        width: 100%;
    }
`;
