import { useState, useEffect } from 'react';
import {
    OutsideWrapper,
    Bottom,
    Link,
    StyledList,
    StyledRecord,
    Top,
    Wrapper,
    ProductOpinionsShort,
    Rating,
    Opinions,
    PriceSection,
    PriceValue,
    PriceOldValue,
} from './ProductPreview.styles';
import BuyButton from 'components/atoms/BuyButton/BuyButton';
import ProductsApi from 'api/products';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import Star from 'components/atoms/Star/Star';
import BadFiltersInfo from 'components/molecules/BadFiltersInfo/BadFiltersInfo';
import useRefresh from 'hooks/useRefresh';
import useWindowSize from 'hooks/useWindowSize';

const ProductPreview = ({ filterInit, allProducts, filters }) => {
    const [products, setProducts] = useState([]);
    const [waitForFetch, setWaitForFetch] = useState(true);
    const { refresh } = useRefresh();
    const [numberOfProducts, setNumberOfProducts] = useState();
    const windowSize = useWindowSize();
    // console.log(windowSize);
    let showProducts = [];

    useEffect(() => {
        const fetchProducts = async (data) => {
            try {
                if (JSON.stringify(filterInit) !== JSON.stringify(filters)) setWaitForFetch(true);

                const response = await ProductsApi.post('/all', data);
                setProducts(response.data);
                setNumberOfProducts(response.data.length);
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
        fetchProducts(filters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, refresh]);

    //--------------------------------------------
    const handleNumberOfProducts = () => {
        console.log(allProducts);
        if (allProducts !== 'yes') {
            if (windowSize.width <= 1620 && windowSize.width > 1100) {
                setNumberOfProducts(2);
            } else if (windowSize.width <= 947 && windowSize.width > 650) {
                setNumberOfProducts(4);
            } else {
                setNumberOfProducts(3);
            }
        }
    };

    useEffect(() => {
        handleNumberOfProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize, products]);

    //---------------

    if (products.length > 0) {
        for (let i = 0; i < numberOfProducts; i++) {
            showProducts.push(products[i]);
        }
    }

    return (
        <>
            {waitForFetch ? (
                <>
                    <LoadingAnimation loadingSize={15} />
                </>
            ) : products.length === 0 ? (
                <>
                    <BadFiltersInfo />
                </>
            ) : (
                <>
                    {showProducts.map((item, index) => (
                        <OutsideWrapper key={index}>
                            <Wrapper>
                                {console.log(item._id)}
                                <Link to={`/product/${item._id}`}>
                                    <Top>
                                        <img src={item.prevImg} alt="article" />
                                        <h1>{item.name}</h1>
                                    </Top>
                                    {allProducts === 'yes' ? (
                                        <>
                                            <ProductOpinionsShort>
                                                <Rating>
                                                    {[...Array(6)].map((star, index) => {
                                                        index += 1;
                                                        return (
                                                            <Star
                                                                opinionRating={item.averageStars}
                                                                rate={index}
                                                                key={index}
                                                            />
                                                        );
                                                    })}
                                                </Rating>
                                                <Opinions>({item.numberOfOpinions})</Opinions>
                                            </ProductOpinionsShort>
                                            <StyledList>
                                                <StyledRecord>{item.specification.processor.description}</StyledRecord>
                                                <StyledRecord>{item.specification.ram.description}</StyledRecord>
                                                <StyledRecord>
                                                    {item.specification.graphics_card.description}
                                                </StyledRecord>
                                                <StyledRecord>{item.specification.disk.description}</StyledRecord>
                                            </StyledList>
                                        </>
                                    ) : (
                                        <span></span>
                                    )}

                                    <Bottom>
                                        {item.special_offer.mode ? (
                                            <PriceSection>
                                                <PriceOldValue>
                                                    <span>{item.price + item.special_offer.price} zł</span>
                                                </PriceOldValue>
                                                <PriceValue>
                                                    <span>{item.price} zł</span>
                                                </PriceValue>
                                            </PriceSection>
                                        ) : (
                                            <span>{item.price} zł</span>
                                        )}
                                    </Bottom>
                                </Link>
                                <BuyButton item={item} />
                            </Wrapper>
                        </OutsideWrapper>
                    ))}
                </>
            )}
        </>
    );
};

export default ProductPreview;
