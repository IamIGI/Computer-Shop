import { BuySelector, CarouselBox, DataBuyWrapper, PrevData, Title, TopInsideWrapper } from './ProductTopContent.style';
import TitleContent from 'components/molecules/TitleContent/TitleContent';
import PrevDataProduct from 'components/molecules/PrevDataProduct/PrevDataProduct';
import ProductBuyContent from 'components/molecules/ProductBuyContent/ProductBuyContent';
import { Separator } from 'components/atoms/Separator/Separator';
import ProductGallery from 'components/atoms/ProductGallery/ProductGallery';

const ProductTopContent = ({ product }) => {
    return (
        <>
            <CarouselBox>
                <ProductGallery images={product.img} />
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
