import React, { useEffect } from 'react';
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
import { useParams } from 'react-router-dom';
import ProductHandyMenu from 'components/molecules/ProductHandyMenu/ProductHandyMenu';
import TitleContent from 'components/molecules/TitleContent/TitleContent';
import { Separator } from 'components/atoms/Separator/Separator';
import { CommentsProvider } from 'context/CommentsProvider';

const Product = () => {
    const { fetchProduct, waitForFetchProduct, refreshProduct } = useProduct();
    const code = useParams().id;

    useEffect(() => {
        fetchProduct(code);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code, refreshProduct]);

    return (
        <Wrapper>
            {waitForFetchProduct ? (
                <LoadingAnimation loadingSize={15} />
            ) : (
                <>
                    <TitleWhenSmallScreen>
                        <TitleContent />
                        <Separator />
                    </TitleWhenSmallScreen>
                    <HandyMenuBigScreen>
                        <ProductHandyMenu />
                    </HandyMenuBigScreen>
                    <TopWrapper id="Top">
                        <ProductTopContent />
                    </TopWrapper>
                    <MidWrapper>
                        <ProductMiddleContent />
                    </MidWrapper>
                    <BottomWrapper>
                        <CommentsProvider>
                            <CommentsSection />
                        </CommentsProvider>
                    </BottomWrapper>
                </>
            )}
        </Wrapper>
    );
};

export default Product;
