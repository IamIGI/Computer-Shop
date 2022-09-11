import styled from 'styled-components';

export const UniversitySection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const UniversityInfo = styled.div`
    width: 40%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin-right: 10%;
`;

export const UniversityDescription = styled.div``;

export const UniversityData = styled.div`
    a {
        color: blue;
        text-decoration: none;
    }
    ul {
        list-style-type: none;
    }
`;

export const UniversityImage = styled.div`
    width: 45%;
    min-width: 600px;
    margin-right: 5%;
    img {
        border-radius: 30px;
        width: 100%;
        max-height: auto;
    }
`;
