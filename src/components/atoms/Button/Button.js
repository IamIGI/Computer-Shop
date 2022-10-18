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

    @media screen and (max-width: 500px) {
        min-width: 100px;
        font-size: ${({ theme }) => theme.fontSize.m};
        margin: 9px 0;
        padding: 5px 15px;
    }
`;
