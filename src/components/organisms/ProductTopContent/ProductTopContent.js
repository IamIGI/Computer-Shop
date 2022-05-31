import React from 'react';
import { BuySelector, CarouselBox, DataBuyWrapper, PrevData, Title, TopInsideWrapper } from './ProductTopContent.style';
import CarouselAtom from 'components/atoms/Carousel/CarouselAtom';
import TitleContent from 'components/molecules/TitleContent/TitleContent';
import PrevDataProduct from 'components/molecules/PrevDataProduct/PrevDataProduct';
import ProductBuyContent from 'components/molecules/ProductBuyContent/ProductBuyContent';
import { Separator } from 'components/atoms/Separator/Separator';

const ProductTopContent = ({ product }) => {
    return (
        <>
            <CarouselBox>
                <CarouselAtom images={product.img} />
            </CarouselBox>
            <TopInsideWrapper>
                <Title>
                    <TitleContent product={product} />
                    <Separator />
                </Title>
                <DataBuyWrapper>
                    <PrevData>
                        <PrevDataProduct productData={product.prevDataProduct} />
                    </PrevData>
                    <BuySelector>
                        <ProductBuyContent product={product} />
                    </BuySelector>
                </DataBuyWrapper>
            </TopInsideWrapper>
        </>
    );
};

export default ProductTopContent;
