import React from 'react';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { VscBook } from 'react-icons/vsc';
import { Wrapper, InsideWrapper } from './ProductDescription.style';

const ProductDescription = ({ product }) => {
    return (
        <>
            <Wrapper>
                <SectionDescription title={'Opis'} icon={<VscBook />} />
                {product.description.map((item, index) => (
                    <InsideWrapper key={index}>
                        <h3>{item.title}</h3>
                        {item.content.map((content, index) => (
                            <p key={index}>{content.p}</p>
                        ))}
                        <img src={item.image} alt="img" />
                    </InsideWrapper>
                ))}
            </Wrapper>
        </>
    );
};

export default ProductDescription;
