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

export const DescriptionBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PriceArea = styled.div`
    justify-content: center;
    text-align: center;
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
    /* top | right | bottom | left */
    padding: 30px 10px 0 10px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    margin: 10px 0;
`;

export const List = styled.div`
    list-style: none;

    li:not(:last-child) {
        /* margin: 2px 0; */
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
    //center childs
    display: flex;
    justify-content: center;
    align-items: center;

    /* margin-bottom: 20px; */

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightPurple};
        /* color: ${({ theme }) => theme.colors.white}; */
        border: 1px solid ${({ theme }) => theme.colors.grey};
    }
`;
