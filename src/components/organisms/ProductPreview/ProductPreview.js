import React, { useState, useEffect } from 'react';
import {
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
import useProduct from 'hooks/useProduct';
import Star from 'components/atoms/Star/Star';
import BadFiltersInfo from 'components/molecules/BadFiltersInfo/BadFiltersInfo';
import { IoGitMerge } from 'react-icons/io5';

let Show = '';
const ProductPreview = ({ filterInit, allProducts, filters }) => {
    const [products, setProducts] = useState([]);
    const [waitForFetch, setWaitForFetch] = useState(true);
    const { setProduct } = useProduct();

    useEffect(() => {
        const fetchProducts = async (data) => {
            try {
                if (JSON.stringify(filterInit) !== JSON.stringify(filters)) setWaitForFetch(true);

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
        fetchProducts(filters);
    }, [filters]);

    //--------------------------------------------
    allProducts === 'yes' ? (Show = products.length) : (Show = 3);
    return (
        <>
            {waitForFetch ? (
                <>
                    <LoadingAnimation />
                </>
            ) : products.length === 0 ? (
                <>
                    <BadFiltersInfo />
                </>
            ) : (
                <>
                    {products.map((item, index) => (
                        <>
                            {index < Show && (
                                <Link onClick={() => setProduct(item)} to={`/product/${item._id}`} key={item._id}>
                                    <Wrapper>
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
                                                                <Star opinionRating={item.averageStars} rate={index} />
                                                            );
                                                        })}
                                                    </Rating>
                                                    <Opinions>({item.numberOfOpinions})</Opinions>
                                                </ProductOpinionsShort>
                                                <StyledList>
                                                    <StyledRecord>
                                                        {item.specification.processor.description}
                                                    </StyledRecord>
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
                                                        <span>{item.price} zł</span>
                                                    </PriceOldValue>
                                                    <PriceValue>
                                                        <span>{item.price - item.special_offer.price} zł</span>
                                                    </PriceValue>
                                                </PriceSection>
                                            ) : (
                                                <span>{item.price} zł</span>
                                            )}

                                            <BuyButton />
                                        </Bottom>
                                    </Wrapper>
                                </Link>
                            )}
                        </>
                    ))}
                </>
            )}
        </>
    );
};

export default ProductPreview;
