import HotShootContent from 'components/molecules/HotShootContent/HotShootContent';
import React from 'react';
import {
    Advertisement,
    HotShootWrapper,
    ProductPrevWrapper,
    Recommended,
    RightTopWrapper,
} from './HomeTopContent.style';
import { products } from 'data/Products';
import ProductPreview from '../ProductPreview/ProductPreview';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { AiOutlineHeart } from 'react-icons/ai';

const HomeTopContent = () => {
    console.log(products[0].img);
    return (
        <>
            <HotShootWrapper>
                <HotShootContent />
            </HotShootWrapper>
            <RightTopWrapper>
                <Advertisement>
                    <img src={require('../../../data/WelcomeIMG_resize.jpg')} alt="Missing img"></img>
                </Advertisement>
                <Recommended>
                    <SectionDescription title={'Polecane'} icon={<AiOutlineHeart />} />
                    <ProductPrevWrapper>
                        <ProductPreview products={products} allProducts="no" />
                    </ProductPrevWrapper>
                </Recommended>
            </RightTopWrapper>
        </>
    );
};

export default HomeTopContent;
