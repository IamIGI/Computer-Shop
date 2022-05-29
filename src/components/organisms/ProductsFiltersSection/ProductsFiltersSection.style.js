import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    border: 1px solid green;
`;

export const Title = styled.p`
    padding-left: 10px;
    text-align: left;
    height: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Price = styled.input`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    height: 25px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: right;
    padding-right: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }
`;
