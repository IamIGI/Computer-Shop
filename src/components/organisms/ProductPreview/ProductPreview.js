import React from 'react';
import { Bottom, Link, StyledList, StyledRecord, Top, Wrapper } from './ProductPreview.styles';
import BuyButton from 'components/atoms/BuyButton/BuyButton';

let Show = '';
const ProductPreview = ({ products, allProducts }) => {
    {
        allProducts === 'yes' ? (Show = products.length) : (Show = 2);
    }
    return (
        <>
            {products.map((item, index) => (
                <>
                    {/* {console.log(products.length)} */}

                    {index < Show && (
                        <Link to={`/product/${item.code}`}>
                            <Wrapper>
                                <Top>
                                    <img src={item.prevImg} alt="article" />
                                    <h1>{item.name}</h1>
                                </Top>
                                {allProducts === 'yes' ? (
                                    <StyledList>
                                        <StyledRecord>{item.specification.processor.description}</StyledRecord>
                                        <StyledRecord>{item.specification.ram.description}</StyledRecord>
                                        <StyledRecord>{item.specification.graphics_card.description}</StyledRecord>
                                        <StyledRecord>{item.specification.disk.description}</StyledRecord>
                                    </StyledList>
                                ) : (
                                    <span></span>
                                )}

                                <Bottom>
                                    <span>{item.price} zł</span>
                                    <BuyButton />
                                </Bottom>
                            </Wrapper>
                        </Link>
                    )}
                </>
            ))}
        </>
    );
};

export default ProductPreview;
