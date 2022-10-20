import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 20px;

    min-width: 600px;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    align-items: flex-start;

    @media screen and (max-width: 650px) {
        min-width: 200px;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
`;

export const LoginWrapper = styled.div`
    max-width: 230px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    /* @media screen and (max-width: 500px) {
        max-width: 310px;
    } */
`;

export const RegisterWrapper = styled.div`
    max-width: 230px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* @media screen and (max-width: 500px) {
        max-width: 310px;
    } */
`;
