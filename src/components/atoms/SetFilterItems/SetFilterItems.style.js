import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 10px 0;
`;

export const InputSection = styled.div`
    position: relative;
`;
export const InputDescription = styled.div`
    position: absolute;
    top: -10px;
    right: 10px;
    background-color: white;
    padding: 0 5px;
`;

export const InputField = styled.input`
    text-align: left;
    height: 25px;
    width: ${(props) => props.width};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.darkGrey};
    padding-left: 20px;
    text-align: left;
    height: 30px;

    &:hover {
        border: 1px solid grey;
        cursor: pointer;
    }

    &:focus {
        outline-width: 0;
        border: 1px solid grey;
    }
`;

export const FilterOptions = styled.div`
    display: ${(props) => (props.display ? 'flex' : 'none')};
    width: ${(props) => props.width};
    height: fit-content;
    gap: 5px;
    position: absolute;
    top: 10px;
    right: 0px;
    background-color: white;
    padding: 0 10px 8px 10px;
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;
    z-index: 5;
    width: 100%;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const FilterOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    width: 100%;
    padding: 2px 0;
    border-radius: 3px;
    border: 1px solid transparent;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightLightGrey};
        cursor: pointer;
    }
`;

export const Checkbox = styled.input`
    transform: scale(1.2);
    height: 15px;
    width: auto;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }
`;

export const OptionDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const SmallScreen = styled.div`
    display: none;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    @media screen and (max-width: 500px) {
        border-radius: 10px;
        margin-top: 10px;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        display: flex;
        width: 100%;
        padding: 3px;
    }
`;

export const ApproveButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    width: 100%;
    padding: 2px 0;
    border-radius: 3px;
    border: 1px solid transparent;
    font-weight: 700;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightLightGrey};
        cursor: pointer;
    }
`;