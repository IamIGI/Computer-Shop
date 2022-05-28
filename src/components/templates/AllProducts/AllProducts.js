import ProductsFiltersSection from 'components/organisms/ProductsFiltersSection/ProductsFiltersSection';
import React from 'react';
import styled from 'styled-components';
import { products } from 'data/Products';
import BuyButton from 'components/atoms/BuyButton/BuyButton';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
    text-align: center;
    justify-content: center;
`;

const Products = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 2/3;
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

const ProductWrapper = styled.div`
    justify-content: left;
    text-align: left;
    margin: 15px 15px;
    height: 430px;
    width: 290px;
    border: 1px solid white;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 10px;
        cursor: pointer;
    }
`;

const Top = styled.div`
    justify-content: center;
    text-align: center;
    img {
        max-height: 150px;
        max-width: auto;
    }

    h1 {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
    }
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    span {
        font-size: ${({ theme }) => theme.fontSize.l};
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const StyledRecord = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px;
    padding: 5px 0px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    &:not(:last-child)::after {
        //every element without last
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;

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
