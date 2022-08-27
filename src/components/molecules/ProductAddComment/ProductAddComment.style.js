import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 30px;
    height: 300px;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;
export const Description = styled.div`
    padding: 0 1%;
`;

export const AddComment = styled.div`
    p {
        margin: 0;
        padding: 5px 0;
        font-size: 20px;
    }
`;
