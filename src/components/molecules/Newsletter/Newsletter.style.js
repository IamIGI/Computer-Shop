import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 240px;
    width: 35%;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
    display: grid;
    grid-template-rows: 0.65fr 0.35fr;
    background-color: ${({ theme }) => theme.colors.lightPurple};
`;

export const TopWrapper = styled.div`
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 0.7fr 0.3fr;
`;

export const BottomWrapper = styled.div`
    grid-row: 2/2;
    justify-content: center;
    text-align: center;
`;

export const DescriptionContent = styled.div`
    padding-left: 30px;
    grid-column: 1/2;
`;

export const Icon = styled.div`
    grid-column: 2/2;
    margin-right: 20px;
    margin-top: 30px;
    height: 100px;
    justify-content: center;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.omegaBigBrother};
`;
