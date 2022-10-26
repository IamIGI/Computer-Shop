import React, { useState, useEffect } from 'react';
import { Slider, SlideTrack, Slide, Items } from './YouMayLike.style';
import useRefresh from 'hooks/useRefresh';
import { filterInit } from 'data/Products';
import ProductsApi from 'api/products';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import ProductPreviewItem from 'components/molecules/ProductPreviewItem/ProductPreviewItem';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BiBookHeart } from 'react-icons/bi';

const YouMayLike = () => {
    const [products, setProducts] = useState([]);
    const [waitForFetch, setWaitForFetch] = useState(true);
    const { refresh } = useRefresh();
    const [slidesOfProducts, setSlidesOfProducts] = useState([]);

    useEffect(() => {
        console.log(products);
    }, [products]);

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

    let slides = [];
    const handleProductsArray = (products, numberOfSlides, numberOfProductsInSlide) => {
        slides = [];
        switch (numberOfSlides) {
            case 1:
                slides = [[]];
                break;
            case 2:
                slides = [[], []];
                break;
            case 3:
                slides = [[], [], []];
                break;
            case 4:
                slides = [[], [], [], []];
                break;
            default:
                break;
        }

        const createArrayOfProducts = (products, slideNumber, numberOfProductsInSlide) => {
            for (
                let i = (slideNumber + 1) * numberOfProductsInSlide - numberOfProductsInSlide;
                i < (slideNumber + 1) * numberOfProductsInSlide;
                i++
            ) {
                slides[slideNumber].push(products[i]);
            }
            return slides;
        };

        for (let j = 0; j < numberOfSlides; j++) {
            createArrayOfProducts(products, j, numberOfProductsInSlide);
        }
        setSlidesOfProducts(slides);
    };

    useEffect(() => {
        if (products.length > 0) handleProductsArray(products, 2, 4);
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
                        <>
                            <Slider>
                                <SlideTrack>
                                    {slidesOfProducts.map((slide) => (
                                        <Slide>
                                            <Items>
                                                {slide.map((item, index) => (
                                                    <>
                                                        <ProductPreviewItem
                                                            key={index}
                                                            item={item}
                                                            allProducts={'no'}
                                                        />
                                                    </>
                                                ))}
                                            </Items>
                                        </Slide>
                                    ))}
                                    <Slide>
                                        <Items>
                                            {slidesOfProducts[0].map((item, index) => (
                                                <>
                                                    <ProductPreviewItem key={index} item={item} allProducts={'no'} />
                                                </>
                                            ))}
                                        </Items>
                                    </Slide>
                                </SlideTrack>
                            </Slider>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default YouMayLike;
