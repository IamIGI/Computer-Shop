import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
    text-align: center;
    justify-content: center;
`;

export const Products = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 2/3;
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const ProductWrapper = styled.div`
    justify-content: left;
    text-align: left;
    margin: 15px 15px;
    height: 430px;
    width: 290px;
    border: 1px solid white;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 10px;
        cursor: pointer;

        button {
            color: ${({ theme }) => theme.colors.success};
            border: 1px solid ${({ theme }) => theme.colors.success};
        }
    }
`;

export const Top = styled.div`
    justify-content: center;
    text-align: center;
    img {
        max-height: 150px;
        max-width: auto;
    }

    h1 {
        height: 45px;
        width: 90%;
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    span {
        font-size: ${({ theme }) => theme.fontSize.l};
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
export const StyledRecord = styled.li`
    height: 40px;
    width: 90%;
    display: flex;
    align-items: center;
    position: relative;

    padding-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    &:not(:last-child)::after {
        //every element without last
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;
