import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
`;

export const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    gap: 20px;
`;

export const TemplateContainer = styled.div`
    position: relative;
    padding: 0 20px;
    flex: 1 0 45%;
    height: fit-content;
    font-size: ${({ theme }) => theme.fontSize.l};
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
    border-radius: 10px;

    ul {
        padding: 0px;
        list-style-type: none;
    }
    li:not(:last-child) {
        margin-bottom: 3px;
    }

    li:first-child {
        font-weight: 700;
    }
`;

export const ChangeRecipient = styled.button`
    position: absolute;
    top: 15px;
    right: 12px;
    border-radius: 6px;
    border: 0px;
    background-color: white;
    padding: 6px 9px;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;

    :hover {
        cursor: pointer;
        box-shadow: rgb(0 100 0 / 30%) 0px 4px 8px 0px, rgb(0 100 0 / 30%) 0px 0px 4px 2px;
    }
`;

export const DeleteRecipient = styled.button`
    position: absolute;
    top: 53px;
    right: 15px;
    color: red;
    border-radius: 50%;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 3px 3px 0px 3px;

    font-size: ${({ theme }) => theme.fontSize.xl};

    transform: scale(1, 1);
    transition: transform 0.3s ease;

    :hover {
        cursor: pointer;
        color: white;
        background-color: red;
        transform: scale(1.1, 1.1);
    }
`;

export const NoTemplates = styled.div`
    margin-left: 10px;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const FormWrapper = styled.div`
    margin-left: 10px;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;
