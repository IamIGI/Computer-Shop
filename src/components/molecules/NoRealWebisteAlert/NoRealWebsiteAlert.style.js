import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 15px;
`;

export const Icon = styled.div`
    font-size: 30px;
    color: red;
    padding: 2px 4px 0 4px;
    border: 2px solid transparent;
    border-radius: 100%;

    :hover {
        cursor: pointer;
        border: 2px solid red;
        border-radius: 50%;
    }
`;

export const Alert = styled.div`
    z-index: 5;
    position: absolute;
    top: 0px;
    left: 5px;
    border: 2px solid gray;
    background-color: white;
    border-radius: 30px;
    padding: 7px;
    min-width: 200px;
    width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: left; */
    text-align: left;
`;

export const Title = styled.div`
    text-align: center;
    color: red;
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 10px;
`;

export const Subtitle = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const ListSection = styled.div`
    li {
        line-height: 20px;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
    margin-bottom: 10px;
`;

export const GitLink = styled.div`
    text-align: center;

    a {
        color: blue;
    }
`;

export const GetPDF = styled.div`
    width: fit-content;

    a {
        color: blue;
    }

    :hover {
        cursor: pointer;
    }
`;
