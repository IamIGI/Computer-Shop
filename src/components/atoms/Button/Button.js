import styled from 'styled-components';

export const Button = styled.button`
    margin: 15px 0;
    padding: 9px 25px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.darkPurple};
    }
`;
