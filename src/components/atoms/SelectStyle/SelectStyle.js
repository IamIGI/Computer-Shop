import styled from 'styled-components';

export const SelectStyle = styled.div`
    select {
        width: ${(props) => props.width};
        padding: 5px 35px 5px 5px;
        font-size: 16px;
        border: 1px solid ${({ theme }) => theme.colors.darkPurple};
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: 34px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-align: center;
        background-image: linear-gradient(gray, gray),
            linear-gradient(-135deg, transparent 50%, ${({ theme }) => theme.colors.lightLightGrey} 50%),
            linear-gradient(-225deg, transparent 50%, ${({ theme }) => theme.colors.lightLightGrey} 50%),
            linear-gradient(${({ theme }) => theme.colors.lightLightGrey} 42%, gray 42%);
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        background-size: 1px 100%, 40px 22px, 40px 22px, 40px 100%;
        background-position: right 40px center, right bottom, right bottom, right bottom;

        :hover {
            cursor: pointer;
            border: 1px solid gray;
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
