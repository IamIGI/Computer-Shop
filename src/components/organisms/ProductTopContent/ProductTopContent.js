import {
    BuySelector,
    CarouselBox,
    DataBuyWrapper,
    PrevData,
    Title,
    TopWrapper,
    BottomWrapper,
    HandyMenuSmallScreen,
} from './ProductTopContent.style';
import TitleContent from 'components/molecules/TitleContent/TitleContent';
import PrevDataProduct from 'components/molecules/PrevDataProduct/PrevDataProduct';
import ProductBuyContent from 'components/molecules/ProductBuyContent/ProductBuyContent';
import { Separator } from 'components/atoms/Separator/Separator';
import ProductGallery from 'components/atoms/ProductGallery/ProductGallery';
import ProductHandyMenu from 'components/molecules/ProductHandyMenu/ProductHandyMenu';

const ProductTopContent = ({ product }) => {
    return (
        <>
            <TopWrapper>
                <CarouselBox>
                    <ProductGallery images={product.img} />
                </CarouselBox>
                <HandyMenuSmallScreen>
                    <ProductHandyMenu productId={product._id} />
                </HandyMenuSmallScreen>
            </TopWrapper>
            <BottomWrapper>
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
            </BottomWrapper>
        </>
    );
};

export default ProductTopContent;
