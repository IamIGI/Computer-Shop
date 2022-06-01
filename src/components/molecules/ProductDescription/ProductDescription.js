import React from 'react';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { VscBook } from 'react-icons/vsc';

const ProductDescription = ({ product }) => {
    return (
        <>
            <SectionDescription title={'Opis'} icon={<VscBook />} />
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
