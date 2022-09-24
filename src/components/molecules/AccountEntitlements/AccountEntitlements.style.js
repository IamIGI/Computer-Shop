import styled from 'styled-components';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';

export const Wrapper = styled.div`
    width: 70%;
    margin-left: 17%;
    display: inline-grid;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    /* z-index: 1; */

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

export const BottomWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
`;

export const SavedInfo = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: baseline;
    color: ${({ theme }) => theme.colors.successDark};
    font-weight: 700;
`;

export const SavedIcon = styled.div`
    margin: 0 10px;
`;
export const SavedDescription = styled.div``;
