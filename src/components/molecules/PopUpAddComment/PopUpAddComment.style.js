import styled from 'styled-components';

export const WrapperOutside = styled.div`
    /* height: 400px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const WrapperInside = styled.div`
    /* height: 400px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin: 0 5%;
`;

export const Title = styled.div`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    padding: 20px 0px 20px 7%;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    border-bottom: 1px solid grey;
`;

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    flex-wrap: nowrap;
    margin-top: 1%;
    padding-bottom: 1%;
    border-bottom: 1px solid grey;
    margin-bottom: 2%;
`;

export const Image = styled.div`
    padding: 0;
    img {
        width: 160px;
        height: auto;
    }
`;

export const ProductName = styled.div`
    padding-top: 3%;
    padding-left: 5%;
    font-size: ${({ theme }) => theme.fontSize.xl}; ;
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    padding-bottom: 2%;
    margin-bottom: 2%;
    border-bottom: 1px solid grey;
`;

export const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 2%;
    padding-left: 1%;
`;

export const RatingStars = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;

export const Information = styled.div`
    padding-bottom: 2%;
    margin-bottom: 2%;
    border-bottom: 1px solid grey;
`;

export const LittleDescription = styled.div`
    margin-bottom: 2%;
    padding-left: 1%;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: grey;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 160px;
    margin-top: 10px;
    padding: 12px 20px;
    border: 1px solid lightgrey;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    color: grey;
    border-radius: 20px;
    resize: none;

    :hover {
        border: 1px solid grey;
    }

    :focus {
        outline: none !important;
        border: 1px solid grey;
        /* box-shadow: 0 0 10px #719ece; */
    }
`;

export const AnonymousUser = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
`;

export const UserDescription = styled.div`
    margin-top: 9px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
`;

export const Input = styled.input`
    width: 50%;
    border-radius: 10px;
    border: 1px solid lightgrey;
    margin-left: 3%;
    padding: 9px 20px;
    color: grey;
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    :hover {
        border: 1px solid grey;
    }
    :focus {
        outline: none !important;
        border: 1px solid grey;
        /* box-shadow: 0 0 10px #719ece; */
    }
`;

export const AddComment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    p {
        margin: 0;
        padding: 5px 20px;
        font-size: 20px;
    }
    margin-bottom: 14px;
`;

export const Alert = styled.div`
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 2%;
`;

export const OpinionSection = styled.div`
    position: relative;
`;

export const NumOfChars = styled.div`
    position: absolute;
    right: 15px;
    bottom: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
`;
