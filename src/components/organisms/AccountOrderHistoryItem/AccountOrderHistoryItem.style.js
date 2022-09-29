import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding-top: 3%;
    width: 90%;
    margin-left: 5%;
`;

export const OrderTitleSection = styled.div`
    width: 100%;
    justify-content: left;
    text-align: left;
    margin-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey}; ;
`;

export const HistorySection = styled.div`
    width: 100%;
    margin-bottom: 100px;
`;

export const OrderSection = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-bottom: 30px;
`;
export const OrderSectionTitle = styled.div`
    height: 40px;
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
    justify-content: left;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
`;

export const OrderSectionDescription = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 20px;
    padding-top: 20px;
    padding-left: 3%;
`;

export const UserDataDescription = styled.div`
    padding-left: 10px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 20px;

    ul {
        margin-top: 10px;
        padding-left: 10px;
    }

    li {
        list-style: none;
        padding: 3px 0;

        a {
            text-decoration: none;
        }
    }
`;

export const Icon = styled.div`
    margin-right: 20px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;

export const Desc = styled.div`
    padding-top: 15px;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const UserDataSection = styled.div`
    margin-top: 2%;
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const DeliveryData = styled.div`
    height: 100%;
    width: 45%;
    margin-right: 10%;
`;

export const UserData = styled.div`
    height: 100%;
    width: 45%;
`;

export const ProductSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
`;

export const ProductElement = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const ProductImage = styled.div`
    height: 120px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }
`;

export const ProductDescription = styled.div`
    width: 70%;
    padding-top: 1%;
    justify-content: center;
    text-align: left;
    padding-left: 5%;
    p {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        /* color: ${({ theme }) => theme.colors.darkGrey}; */

        span {
            text-decoration: line-through;
            font-weight: 400;
        }
    }

    p:last-child {
        font-weight: 700;
    }
`;

export const ProductQuantity = styled.div`
    margin: 20px 0;
    padding-left: 2%;
    padding-top: 27px;
    text-align: right;
    justify-content: right;
    align-items: right;
    border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.l_plus};
`;

export const SummarySection = styled.div`
    width: 40%;
    margin-left: 60%;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    ul {
        margin-top: 10px;
        padding-left: 10px;
    }

    li {
        list-style: none;
        padding: 7px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    li:last-child {
        font-weight: 700;
    }
`;

export const Line = styled.div`
    width: 100%;
    margin-bottom: 3%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
