import styled from 'styled-components';

export const MenuSector = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: white;
    height: 70px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
`;

export const AboutProductSector = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
`;

export const Description = styled.div`
    width: 70%;
    margin-left: 10%;
    margin-bottom: 10%;

    p {
        line-height: 30px;
    }

    img {
        margin-left: 10%;
        width: 80%;
    }
`;

export const Specification = styled.div`
    margin-left: 7%;
    margin-bottom: 2%;
    width: 86%;
    span {
        color: ${({ theme }) => theme.colors.darkGrey};
        font-weight: 700;
    }
`;

export const YouMayLikeSector = styled.div`
    width: 95%;
    border-right: 5%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
