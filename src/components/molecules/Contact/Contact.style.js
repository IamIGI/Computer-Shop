import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 240px;
    width: 50%;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
    display: grid;
    grid-template-rows: 0.3fr 0.7fr;
    background-color: ${({ theme }) => theme.colors.lightPurple};
`;
export const Title = styled.div`
    grid-row: 1/2;
    text-align: left;
    justify-content: left;
    padding-left: 30px;
`;

export const InsideWrapper = styled.div`
    grid-row: 2/2;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    padding: 0 10px;
`;

export const Info1 = styled.div`
    height: 80%;
    border-right: 1px solid grey;
    grid-column: 1/2;
`;
export const Info2 = styled.div`
    height: 80%;
    grid-column: 2/2;
    display: flex;
    flex-direction: column;
`;

export const DayDesc = styled.div`
    width: 150px;
    padding-left: 30px;
`;
export const HourDesc = styled.div``;

export const Media = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const Section = styled.div`
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Icon = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-right: 20px;
    margin-left: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};

    :hover {
        color: ${({ theme }) => theme.colors.success};
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
    }
`;

export const Desc = styled.div``;

export const MediaIcon = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};

    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.success};
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
    }
`;
