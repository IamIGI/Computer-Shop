import styled from 'styled-components';

export const StackSection = styled.div`
    margin: 0 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`;

export const UsePopUp = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    :hover {
        color: green;
    }
`;
export const PopUp = styled.div`
    position: absolute;
    border: 1px solid gray;
    padding-right: 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    top: 50px;
    right: -60px;
    z-index: 1;
    background-color: white;
`;

export const Stack = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 30px;
    margin-top: 20px;
    padding-top: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    position: relative;

    :hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 30px;
    }
`;

export const StackImage = styled.div`
    img {
        max-height: 100px;
        max-width: auto;
    }
`;

export const StackTitle = styled.div``;
export const StackLibrarySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
`;

export const StackLibrary = styled.div``;
export const StackStars = styled.div`
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;
