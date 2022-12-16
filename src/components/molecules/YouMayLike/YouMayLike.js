import React, { useState, useEffect } from 'react';
import { Slider, SlideTrack, Slide, Items } from './YouMayLike.style';

import { filterInit } from 'data/Products';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import MayLikeItem from 'components/molecules/MayLikeItem/MayLikeItem';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BiBookHeart } from 'react-icons/bi';
import { handleProductsArray, NumberOfProductOnWidthChange } from './YouMayLikeLogic';
import { store } from 'app/store';
import {
    fetchMayLikeItems,
    getMayLikeProducts,
    getMayLikeProductsStatus,
    getProductsErrors,
} from 'features/products/productsSlice';
import { useSelector } from 'react-redux';

const YouMayLike = () => {
    const products = useSelector(getMayLikeProducts);
    const productsStatus = useSelector(getMayLikeProductsStatus);
    const productsError = useSelector(getProductsErrors);

    useEffect(() => {
        store.dispatch(fetchMayLikeItems(filterInit));
    }, []);

    const [slidesOfProducts, setSlidesOfProducts] = useState([]);
    const [divWidth, setDivWidth] = useState(10000);
    setInterval(async () => {
        setDivWidth(document.getElementById('Slider') !== null && document.getElementById('Slider').offsetWidth);
    }, 2000);

    useEffect(() => {
        if (products.length > 0) setSlidesOfProducts(NumberOfProductOnWidthChange(divWidth, products));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [divWidth]);

    useEffect(() => {
        if (products.length > 0) setSlidesOfProducts(handleProductsArray(products, 2, 4));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <>
            <SectionDescription title={'Polecamy również'} icon={<BiBookHeart />} />
            {productsStatus === 'loading' ? (
                <LoadingAnimation loadingSize={15} />
            ) : productsStatus === 'succeeded' ? (
                <>
                    {slidesOfProducts.length > 0 && (
                        <Slider id="Slider">
                            <SlideTrack>
                                {slidesOfProducts.map((slide, index) => (
                                    <Slide key={index}>
                                        <Items>
                                            {slide.map((item, index) => (
                                                <MayLikeItem
                                                    key={index}
                                                    item={item}
                                                    allProducts={'no'}
                                                    MayLikeComponent={true}
                                                />
                                            ))}
                                        </Items>
                                    </Slide>
                                ))}
                                <Slide>
                                    <Items>
                                        {slidesOfProducts[0].map((item, index) => (
                                            <MayLikeItem key={index} item={item} />
                                        ))}
                                    </Items>
                                </Slide>
                            </SlideTrack>
                        </Slider>
                    )}
                </>
            ) : (
                <p>{productsError}</p>
            )}
        </>
    );
};

export default YouMayLike;
