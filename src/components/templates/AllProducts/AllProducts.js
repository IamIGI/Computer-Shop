import ProductsFiltersSection from 'components/organisms/ProductsFiltersSection/ProductsFiltersSection';
import React from 'react';
import { products } from 'data/Products';
import BuyButton from 'components/atoms/BuyButton/BuyButton';
import { Wrapper, Products, ProductWrapper, Top, Bottom, StyledList, StyledRecord } from './AllProducts.styles';

const AllProducts = () => {
    return (
        <>
            <Wrapper>
                <ProductsFiltersSection />
                <Products>
                    {products.map((item) => (
                        <ProductWrapper>
                            <Top>
                                <img src={item.prevImg} alt="article" />
                                <h1>{item.name}</h1>
                            </Top>
                            <StyledList>
                                <StyledRecord>{item.specification.processor.description}</StyledRecord>
                                <StyledRecord>{item.specification.ram.description}</StyledRecord>
                                <StyledRecord>{item.specification.graphics_card.description}</StyledRecord>
                                <StyledRecord>{item.specification.disk.description}</StyledRecord>
                            </StyledList>
                            <Bottom>
                                <span>{item.price} zł</span>
                                <BuyButton />
                            </Bottom>
                        </ProductWrapper>
                    ))}
                </Products>
            </Wrapper>
        </>
    );
};

export default AllProducts;
