import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    padding-right: 30px;
    border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const Title = styled.p`
    padding-left: 10px;
    text-align: left;
    height: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const InputField = styled.input`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    height: 25px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        border: 1px solid grey;
    }
`;
