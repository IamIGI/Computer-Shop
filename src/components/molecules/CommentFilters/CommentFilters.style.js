import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 10px;
`;

export const Title = styled.div`
    padding-top: 7px;
    padding-right: 15px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 700;
`;
export const NumberOfComments = styled.div`
    margin-right: 5%;
    padding-top: 7px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 700;
`;

export const SelectStyle = styled.div`
    select {
        width: 200px;
        padding: 5px 35px 5px 5px;
        font-size: 16px;
        border: 1px solid gray;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: 34px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-align: center;
        /* background: url(https://stackoverflow.com/favicon.ico) 96% / 15% no-repeat #eee; */
        background-image: linear-gradient(gray, gray),
            linear-gradient(-135deg, transparent 50%, ${({ theme }) => theme.colors.lightLightGrey} 50%),
            linear-gradient(-225deg, transparent 50%, ${({ theme }) => theme.colors.lightLightGrey} 50%),
            linear-gradient(${({ theme }) => theme.colors.lightLightGrey} 42%, gray 42%);
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        background-size: 1px 100%, 40px 22px, 40px 22px, 40px 100%;
        background-position: right 40px center, right bottom, right bottom, right bottom;

        :hover {
            background-image: linear-gradient(
                    ${({ theme }) => theme.colors.lightGrey},
                    ${({ theme }) => theme.colors.lightGrey}
                ),
                linear-gradient(-135deg, transparent 50%, ${({ theme }) => theme.colors.lightGrey} 50%),
                linear-gradient(-225deg, transparent 50%, ${({ theme }) => theme.colors.lightGrey} 50%),
                linear-gradient(${({ theme }) => theme.colors.lightGrey} 42%, gray 42%);
        }
    }

    select::-ms-expand {
        display: none; /* Remove default arrow in Internet Explorer 10 and 11 */
    }
`;

export const Filters = styled.div`
    /* border: 1px solid ${({ theme }) => theme.colors.lightGrey}; */
`;

export const Confirmed = styled.div`
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
`;

export const ConfirmedDesc = styled.div`
    margin-top: 7px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 700;

    :hover {
        cursor: pointer;
    }
`;

export const Sort = styled.div``;

export const Checkbox = styled.input`
    transform: scale(1.8);
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
