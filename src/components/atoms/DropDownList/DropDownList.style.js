import styled from 'styled-components';
import { Multiselect } from 'multiselect-react-dropdown';

export const DropDownList = styled(Multiselect)`
    cursor: pointer;
`;
export const Title = styled.p`
    padding-left: 10px;
    text-align: left;
    height: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
`;
