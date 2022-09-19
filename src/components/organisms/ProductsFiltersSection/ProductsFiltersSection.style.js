import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    padding-right: 30px;
    justify-content: center;
    border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const Title = styled.p`
    padding-left: 10px;
    text-align: left;
    height: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const InputField = styled.input`
    margin: 10px 10px 0px 10px;
    height: 25px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        border: 1px solid grey;
    }

    &:focus {
        outline-width: 0;
        border: 1px solid grey;
    }
`;
export const SearchSection = styled.div`
    position: relative;
`;
export const SearchDescription = styled.div`
    position: absolute;
    top: 1px;
    right: 5px;
    background-color: white;
    padding: 0 5px;
`;

export const SearchField = styled.input`
    /* margin: 10px 10px 20px 10px; */
    margin: 10px 0;
    height: 40px;
    width: 250px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: left;
    padding-left: 20px;
    padding-right: 10px;

    &:hover {
        border: 1px solid grey;
    }

    &:focus {
        outline-width: 0;
        border: 1px solid grey;
    }
`;

export const DiscountFilter = styled.div`
    margin: 10px 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
`;
export const DiscountDesc = styled.div`
    margin-top: 9px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};

    :hover {
        cursor: pointer;
    }
`;

export const DiscountCheckbox = styled.input`
    transform: scale(1.5);
    margin: 8px 10px 0 10px;
    height: 20px;
    width: auto;
    /* border-radius: 16px; */
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }
`;
