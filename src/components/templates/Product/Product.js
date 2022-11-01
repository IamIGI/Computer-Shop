import React, { useState, useEffect } from 'react';
import {
    Wrapper,
    TopWrapper,
    MidWrapper,
    BottomWrapper,
    HandyMenuBigScreen,
    TitleWhenSmallScreen,
} from './Product.styles';
import ProductTopContent from 'components/organisms/ProductTopContent/ProductTopContent';
import ProductMiddleContent from 'components/organisms/ProductMiddleContent/ProductMiddleContent';
import useProduct from 'hooks/useProduct';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import CommentsSection from 'components/templates/CommentsSection/CommentsSection';
import { getProduct } from 'api/products';
import { useParams } from 'react-router-dom';
import ProductHandyMenu from 'components/molecules/ProductHandyMenu/ProductHandyMenu';
import TitleContent from 'components/molecules/TitleContent/TitleContent';
import { Separator } from 'components/atoms/Separator/Separator';

const Product = () => {
    const code = useParams().id;
    const [waitForFetchProduct, setWaitForFetchProduct] = useState(true);
    const { product, setProduct } = useProduct();

    useEffect(() => {
        const fetchProduct = async (code) => {
            const response = await getProduct(code);
            setProduct(response);
            setWaitForFetchProduct(false);
        };

        fetchProduct(code);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);

    return (
        <Wrapper>
            {waitForFetchProduct ? (
                <>
                    <LoadingAnimation loadingSize={15} />
                </>
            ) : (
                <>
                    <TitleWhenSmallScreen>
                        <TitleContent product={product} />
                        <Separator />
                    </TitleWhenSmallScreen>
                    <HandyMenuBigScreen>
                        <ProductHandyMenu productId={product._id} />
                    </HandyMenuBigScreen>
                    <TopWrapper id="Top">
                        <ProductTopContent product={product} />
                    </TopWrapper>
                    <MidWrapper>
                        <ProductMiddleContent product={product} />
                    </MidWrapper>
                    <BottomWrapper>
                        <CommentsSection product={product} />
                    </BottomWrapper>
                </>
            )}
        </Wrapper>
    );
};

export default Product;
