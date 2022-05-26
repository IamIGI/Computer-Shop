import styled from 'styled-components';

export const Wrapper = styled.li`
    // styled.<html element>
    display: flex;
    align-items: center;
    position: relative;
    margin: 20px;
    padding: 10px 0px;

    &:not(:last-child)::after {
        //every element without last
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;

export const Average = styled.div`
    background-color: ${({ theme, average }) => {
        if (Number(average) >= 4) return theme.colors.success;
        if (Number(average) >= 3) return theme.colors.warning;
        if (Number(average) > 2) return theme.colors.error;
        return theme.colors.grey;
    }};

    height: 34px;
    width: 34px;
    border-radius: 50%;
    border: none;

    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.m};
    //center
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 10px;
    margin-right: 8%;
`;

export const StudentData = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0px;
    padding: 0px;
    margin-right: 5%;
    font-weight: bold;

    p {
        color: ${({ theme }) => theme.colors.darkGrey};
        display: block;
        margin: 0;
    }

    p:nth-child(2) {
        font-size: ${({ theme }) => theme.fontSize.s};
        font-weight: normal;
    }
`;
