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

export const NoOpinionsLeftSection = styled.div`
    margin-top: 40px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;
`;

export const IconNoOpinionsLeft = styled.div`
    color: green;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const DescriptionNoOpinionsLeft = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const ImagesSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    height: fit-content;
    width: fit-content;
`;

export const Image = styled.img`
    border-radius: 20px;
    min-height: 80px;
    max-height: 80px;
    width: 85px;

    :hover {
        cursor: pointer;
    }
`;
