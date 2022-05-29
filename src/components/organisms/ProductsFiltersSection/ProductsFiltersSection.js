import React from 'react';
import { Producers, Places, Processors, RAM, OS } from 'data/ProductsFilters';
import DropDownCheckbox from 'components/atoms/DropDownList/DropDownList';
import { Price, Title, Wrapper } from './ProductsFiltersSection.style';

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
