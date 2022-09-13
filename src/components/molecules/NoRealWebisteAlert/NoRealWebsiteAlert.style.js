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
    border: 2px solid white;
    border-radius: 100%;

    :hover {
        border: 2px solid red;
        border-radius: 50%;
    }
`;

export const Alert = styled.div`
    z-index: 1;
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
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-bottom: 10px;
`;

export const Subtitle = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const ListSection = styled.div`
    li {
        line-height: 20px;
    }
`;

export const GitLink = styled.div`
    text-align: center;
    margin-bottom: 10px;

    a {
        color: blue;
    }
`;
