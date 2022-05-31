import { Separator } from 'components/atoms/Separator/Separator';
import ProductDescription from 'components/molecules/ProductDescription/ProductDescription';
import ProductMenu from 'components/molecules/ProductMenu/ProductMenu';
import SpecificationList from 'components/molecules/SpecificationList/SpecificationList';
import React from 'react';
import { AboutProductSector, Description, MenuSector, Specification } from './ProductBottomContent.style';

const ProductBottomContent = ({ product }) => {
    return (
        <>
            <MenuSector>
                <Separator />
                <ProductMenu />
            </MenuSector>
            <AboutProductSector>
                <Description id="Description">
                    <ProductDescription product={product} />
                </Description>
                <Specification id="Specification">
                    <SpecificationList product={product} />
                </Specification>
                <Separator />
            </AboutProductSector>
        </>
    );
};

ProductBottomContent.propTypes = {};
export default ProductBottomContent;
