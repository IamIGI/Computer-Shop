import styled from 'styled-components';

export const Wrapper = styled.div`
    justify-content: center;
    text-align: center;
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const InsideWrapper = styled.div`
    max-width: 2100px;
    padding: 0 4%;
    height: 83vh;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: left;

    @media (min-width: 700px) {
        min-width: 700px;
        width: 100%;
    }
`;
