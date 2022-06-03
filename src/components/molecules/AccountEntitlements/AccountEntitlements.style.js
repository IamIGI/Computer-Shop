import styled from 'styled-components';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';

export const Wrapper = styled.div`
    width: 70%;
    margin-left: 17%;
    display: inline-grid;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    z-index: 1;

    input {
        display: block;
        box-sizing: border-box;
    }
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
`;

export const SectionChange = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const LabelArea = styled.div`
    width: 80%;
    border-left: 1px solid grey;
    text-align: left;
    justify-content: center;
    padding-top: 5px;
    padding-left: 5%;
`;

export const CheckboxLocal = styled(Checkbox)`
    color: black;
    margin: 0px;
    margin-right: 10px;
    margin-top: 4px;
    cursor: pointer;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    }
`;
