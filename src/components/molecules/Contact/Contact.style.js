import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 200px;
    height: fit-content;
    width: fit-content;
    padding: 0 20px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightPurple};

    @media screen and (max-width: 1100px) {
        justify-content: flex-start;
        width: 80%;
        gap: 10px;
    }
    @media screen and (max-width: 750px) {
        width: 90%;
    }
`;
export const Title = styled.div`
    text-align: left;
    justify-content: left;
`;

export const Info1 = styled.div`
    margin: 0 15px 0 0;
    border-right: 1px solid grey;
    width: fit-content;

    @media screen and (max-width: 650px) {
        margin: 0 0 0 20px;
    }
`;
export const Info2 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DayDesc = styled.div`
    text-align: left;
    width: 100px;
`;
export const HourDesc = styled.div`
    width: 100px;
`;

export const Section = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Icon = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-right: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};

    :hover {
        color: ${({ theme }) => theme.colors.success};
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
    }

    @media screen and (max-width: 650px) {
        display: none;
    }
`;

export const Desc = styled.div``;

export const Media = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const MediaIcon = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};

    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.success};
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
    }
`;
