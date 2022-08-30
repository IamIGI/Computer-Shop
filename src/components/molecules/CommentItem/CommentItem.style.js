import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 2% 7%;
    padding-bottom: 25px;
`;

export const NumberOfComments = styled.div``;

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

export const UserData = styled.div`
    width: 20%;
    min-width: 200px;
    max-width: 300px;
    padding: 10px 1%;
`;
export const UserDataDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;
export const Icon1 = styled.div`
    margin-right: 10px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;
export const Icon2 = styled.div`
    margin-right: 10px;
    color: green;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ApprovedDescription = styled.div`
    margin-top: 3px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const UserName = styled.div`
    margin-top: 11px;
`;
export const UserDataApproved = styled.div`
    margin-left: 1.5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-top: 1%;
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

export const ContentData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
`;

export const StarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 150px;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding-top: 8px;
    margin-right: 1%;
`;

export const Date = styled.div`
    padding-top: 14px;
    margin-left: 1%;
    font-size: ${({ theme }) => theme.fontSize.l};
`;
export const Dot = styled.div`
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const Opinion = styled.div`
    line-height: 22px;
    padding: 1% 0;
`;

export const CommentScore = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ScoreDescription = styled.div`
    padding-top: 6px;
`;

export const Icon3 = styled.div`
    padding-top: 4px;
    margin-left: 15px;
    font-size: ${({ theme }) => theme.fontSize.xl};

    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.successDark};
    }
`;

export const LikeNumber = styled.div`
    padding-top: 7px;
    padding-left: 4px;
`;

export const Alert = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: ${({ theme }) => theme.colors.error};
    margin: 6px 0 0 15px;
`;

export const Icon4 = styled.div`
    margin: 3px 0 0 5px;
`;

export const NoOpinionsLeft = styled.div`
    text-align: center;
    margin: 20px 0;
`;

export const UnWrap = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    :hover {
        color: black;
        cursor: pointer;
    }
`;
