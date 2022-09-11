import styled from 'styled-components';

export const DataShortSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    /* align-items: flex-end; */
`;

export const Data = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin-top: 20px;
`;

export const Icon = styled.div`
    font-size: 80px;
    margin-bottom: 20px;
`;

export const Numbers = styled.div`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.successDark};
    margin-bottom: 10px;
`;

export const Desc = styled.div`
    font-weight: 700;
`;
