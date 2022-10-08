import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 200px;
    height: fit-content;

    width: fit-content;
    padding: 0 10px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightPurple};

    @media screen and (max-width: 1100px) {
        justify-content: flex-start;
        width: 80%;
        align-items: center;
    }

    @media screen and (max-width: 750px) {
        width: 90%;
        gap: 10px;
    }
`;

export const LeftWrapper = styled.div`
    margin: 0 20px 0 0;
`;

export const RightWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    min-width: 135px;
`;

export const DescriptionContent = styled.div`
    padding-left: 10px;
    @media screen and (max-width: 1100px) {
        padding-left: 10px;
    }
`;

export const Icon = styled.div`
    margin-top: 30px;
    height: 100px;
    font-size: ${({ theme }) => theme.fontSize.omegaBigBrother};
`;
