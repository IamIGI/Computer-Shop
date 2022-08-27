import styled from 'styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid brown; */
    height: 300px;
    width: 40%;
    /* width: 300px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`;

export const QuantityOfGivenScore = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 30px;
    justify-content: center;
    margin-top: 2%;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    color: grey;
    font-weight: 500;

    :hover {
        color: orange;
    }
`;

export const ScoreStar = styled.div`
    grid-column: 1/2;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Icon = styled.div`
    /* padding-top: 4px; */
`;

export const Bar = styled.div`
    grid-column: 2/3;
    width: 95%;
    margin-left: 2.5%;
    height: 15px;
    border-radius: 40px;
    background-color: lightgrey;
    margin-top: 3px;

    div {
        width: ${({ percentage }) => `${percentage}%`};
        transition: width 1s;
        height: 100%;
        background-color: orange;
        border-radius: 40px;
    }
`;

export const Number = styled.div`
    grid-column: 3/3;
    text-align: center;
`;
