import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border-top-left-radius: 40px;
`;

export const ImageArea = styled.div`
    justify-content: center;
    text-align: center;
    img {
        margin-top: 10px;
        margin-left: 5px;
        width: 95px;
    }
`;

export const DescriptionArea = styled.div`
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 15px;
    width: 200px;
    margin-top: 10px;
    font-weight: 700;
`;

export const DescriptionBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PriceArea = styled.div`
    width: 110px;
    padding: 0 10px;
    display: flex;
    text-align: right;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const OldPrice = styled.div`
    span {
        text-decoration: line-through;
    }
`;

export const CurrentPrice = styled.div`
    padding: 0;
    margin: 0;
`;

export const List = styled.div`
    list-style: none;

    li:not(:last-child) {
        border-bottom: 1px solid grey;
    }
`;

export const Icon = styled.div`
    justify-content: center;
    text-align: center;
    margin: 25px 44px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const DescriptionAreaMissing = styled.div`
    margin-right: 20px;
    margin-top: 12px;
    p {
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

export const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: white;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 50%;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightPurple};

        border: 1px solid ${({ theme }) => theme.colors.grey};
    }
`;
