import { Separator } from 'components/organisms/AccountPreviewSection/AccountPreviewSection.style';
import React from 'react';
import { BsJustifyRight } from 'react-icons/bs';
import { VscBook } from 'react-icons/vsc';
import { ContentTitle, DescWrapper, IconTitle, Line } from './ProductDescription.style';

const ProductDescription = ({ product }) => {
    return (
        <>
            <DescWrapper>
                <IconTitle>
                    <VscBook />
                </IconTitle>
                <ContentTitle>Opis </ContentTitle>
                <Line />
            </DescWrapper>
            {product.description.map((item) => (
                <>
                    <h3>{item.title}</h3>
                    {item.content.map((content) => (
                        <p>{content.p}</p>
                    ))}
                    <img src={item.image} alt="img" />
                </>
            ))}
        </>
    );
};

export default ProductDescription;
