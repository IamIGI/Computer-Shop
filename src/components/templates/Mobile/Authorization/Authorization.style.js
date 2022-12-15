import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 30px;

    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;

    form {
        width: 100%;
    }

    @media screen and (max-width: 1050px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    @media screen and (max-width: 550px) {
        padding: 30px 0px;
    }
`;

export const Section = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: fit-content;
    padding: 10px 50px;
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
    border-radius: 10px;
    gap: 15px;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};
        margin-bottom: 0px;
    }
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 550px) {
        padding: 10px 30px;
        gap: 10px;
        width: 90%;
    }
`;

export const BottomLogin = styled.div`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 10px;

    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const Title = styled.div`
    width: 100%;
    padding: 5px 0;
`;

export const Paragraph = styled.div`
    display: flex;
    align-items: center;
    height: 10px;
    padding-bottom: 8px;
`;

export const RegisterSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    p {
        width: 250px;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 600px) {
        gap: 15px;
        p {
            /* font-size: ${({ theme }) => theme.fontSize.m_plus}; */
        }
    }

    @media screen and (max-width: 410px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const RegisterParagraph = styled.div``;

export const Button = styled.div``;

// export const Wrapper = styled.div`
//     padding-top: 20px;

//     min-width: 600px;
//     width: 30%;
//     height: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;

//     align-items: flex-start;

//     @media screen and (max-width: 650px) {
//         min-width: 200px;
//         width: 100%;
//         justify-content: flex-start;
//         align-items: center;
//         flex-direction: column;
//     }
// `;

// export const LoginWrapper = styled.div`
//     max-width: 240px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     text-align: center;
// `;

// export const RegisterWrapper = styled.div`
//     max-width: 240px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
// `;
