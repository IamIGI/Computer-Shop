import React, { useState, useEffect } from 'react';
import { Slider, SlideTrack, Slide, Items } from './YouMayLike.style';
import useRefresh from 'hooks/useRefresh';
import { filterInit } from 'data/Products';
import ProductsApi from 'api/products';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import MayLikeItem from 'components/molecules/MayLikeItem/MayLikeItem';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BiBookHeart } from 'react-icons/bi';
import { handleProductsArray, NumberOfProductOnWidthChange } from './YouMayLikeLogic';

const YouMayLike = () => {
    const [products, setProducts] = useState([]);
    const [waitForFetch, setWaitForFetch] = useState(true);
    const { refresh } = useRefresh();
    const [slidesOfProducts, setSlidesOfProducts] = useState([]);
    const [divWidth, setDivWidth] = useState(10000);
    setInterval(async () => {
        setDivWidth(document.getElementById('Slider').offsetWidth);
    }, 2000);

    useEffect(() => {
        if (products.length > 0) setSlidesOfProducts(NumberOfProductOnWidthChange(divWidth, products));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [divWidth]);

    useEffect(() => {
        const fetchProducts = async (data) => {
            try {
                setWaitForFetch(true);
                const response = await ProductsApi.post('/all', data);
                setProducts(response.data);
                setWaitForFetch(false);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };
        fetchProducts(filterInit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    useEffect(() => {
        if (products.length > 0) setSlidesOfProducts(handleProductsArray(products, 2, 4));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <>
            <SectionDescription title={'Polecamy również'} icon={<BiBookHeart />} />
            {waitForFetch ? (
                <>
                    <LoadingAnimation loadingSize={15} />
                </>
            ) : (
                <>
                    {slidesOfProducts.length > 0 && (
                        <Slider id="Slider">
                            <SlideTrack>
                                {slidesOfProducts.map((slide) => (
                                    <Slide>
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
                                            <>
                                                <MayLikeItem key={index} item={item} />
                                            </>
                                        ))}
                                    </Items>
                                </Slide>
                            </SlideTrack>
                        </Slider>
                    )}
                </>
            )}
        </>
    );
};

export default YouMayLike;
