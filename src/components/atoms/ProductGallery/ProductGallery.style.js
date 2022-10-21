import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin: 40px;
    margin-top: 10px;
`;

export const ImageContainer = styled.div`
    border-radius: 20px;
    img {
        width: 100%;
    }
`;

export const SmallImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const SmallImage = styled.img`
    border-radius: 8px;
    width: 70px;
    height: 70px;
    cursor: pointer;
    border: 1px solid ${(props) => (props.border ? 'green' : 'gray')};
    transform: scale(${(props) => (props.border ? 1.1 : 1)}, ${(props) => (props.border ? 1.1 : 1)});
    transition: transform 0.5s ease;
`;
