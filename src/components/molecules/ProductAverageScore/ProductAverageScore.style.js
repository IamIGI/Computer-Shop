import styled from 'styled-components';

export const Wrapper = styled.div`
    /* width: 100%; */
    height: 200px;
    /* border: 1px solid pink; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`;

export const Score = styled.div`
    font-size: ${({ theme }) => theme.fontSize.omegaBig};

    span {
        font-size: ${({ theme }) => theme.fontSize.xxl};
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;
export const Stars = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
`;

export const NumberOfOpinions = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    color: ${({ theme }) => theme.colors.darkGrey};
`;
