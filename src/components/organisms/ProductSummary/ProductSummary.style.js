import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
`;

export const NoComments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-left: 10%;

    div {
        font-size: ${({ theme }) => theme.fontSize.omegaBig};
    }
`;
