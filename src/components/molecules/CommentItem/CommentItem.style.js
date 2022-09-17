import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 10px 7%;
    padding-bottom: 25px;
`;

export const CommentSection = styled.div`
    width: 91%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin: 15px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;

export const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 80%;
    padding-left: 5%;
    min-width: 200px;
`;

export const NoOpinionsLeft = styled.div`
    text-align: center;
    margin: 20px 0;
`;
