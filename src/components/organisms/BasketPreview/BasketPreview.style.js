import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Section = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
`;

export const ImageArea = styled.div`
    /* width: 80px; */
    justify-content: center;
    text-align: center;
    img {
        margin-top: 23px;
        margin-left: 5px;
        width: 95px;
    }
`;

export const DescriptionArea = styled.div`
    margin-left: 20px;
    p {
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

export const PriceArea = styled.div`
    justify-content: center;
    text-align: center;
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
    /* top | right | bottom | left */
    padding: 30px 10px 0 10px;
    /* background-color: ${({ theme }) => theme.colors.grey}; */
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    /* height: 40%; */
    margin: 10px 0;
`;

export const List = styled.div`
    list-style: none;
    li {
        margin: 2px 0;
    }
`;

export const Line = styled.div`
    margin-left: 10%;
    width: 80%;
    border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
