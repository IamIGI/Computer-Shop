import styled from 'styled-components';

export const AboutMe = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const PageSection = styled.div`
    width: 500px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    border-radius: 40px;
    padding: 10px 10px 20px 10px;
    a {
        color: black;
        text-decoration: none;
    }

    :hover {
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 30px;
    }
`;

export const PageImage = styled.div`
    margin-bottom: 20px;
    img {
        max-height: 250px;
        max-width: auto;
    }
`;

export const PageDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
`;
