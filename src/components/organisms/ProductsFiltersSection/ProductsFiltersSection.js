import React from 'react';
import styled from 'styled-components';
import { Producers, Places, Processors, RAM, OS } from 'data/ProductsFilters';
import DropDownCheckbox from 'components/atoms/DropDownList/DropDownList';

const Wrapper = styled.div`
    padding: 10px;
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    border: 1px solid green;
`;

export const Title = styled.p`
    padding-left: 10px;
    text-align: left;
    height: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
`;

const Price = styled.input`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    height: 25px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: right;
    padding-right: 10px;
`;

const ProductsFiltersSection = () => {
    return (
        <>
            <Wrapper>
                <DropDownCheckbox filterData={Producers} />
                <Title>Cena</Title>
                <Price placeholder="od        zł" /> - <Price placeholder="do        zł" />
                <DropDownCheckbox filterData={Places} />
                <DropDownCheckbox filterData={Processors} />
                <DropDownCheckbox filterData={RAM} />
                <DropDownCheckbox filterData={OS} />
            </Wrapper>
        </>
    );
};

export default ProductsFiltersSection;
