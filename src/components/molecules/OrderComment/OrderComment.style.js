import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: left;
    text-align: left;
    width: 47%;
    padding: 10px;
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: left;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const CommentSection = styled.div`
    width: 100%;
    position: relative;
`;
export const NumOfChars = styled.div`
    position: absolute;
    right: 15px;
    bottom: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const InfoSection = styled.div`
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`;
export const InfoIcon = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-right: 12px;
`;
export const InfoDesc = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m};
`;

export const TextArea = styled.textarea`
    width: 100%;

    min-height: 220px;
    margin-top: 10px;
    padding: 12px 20px;
    border: 1px solid lightgrey;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    color: grey;
    border-radius: 20px;
    resize: none;

    :hover {
        border: 2px solid grey;
    }

    :focus {
        outline: none !important;
        border: 2px solid grey;
        /* box-shadow: 0 0 10px #719ece; */
    }
`;
