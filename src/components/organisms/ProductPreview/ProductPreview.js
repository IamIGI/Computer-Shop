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
} from './ProductPreview.styles';
import BuyButton from 'components/atoms/BuyButton/BuyButton';
import ProductsApi from 'api/products';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useProduct from 'hooks/useProduct';
import Star from 'components/atoms/Star/Star';

let Show = '';
const ProductPreview = ({ allProducts }) => {
    const [products, setProducts] = useState([]);
    const { setProduct } = useProduct();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const dataInit = {
                    filters: {
                        producers: [],
                        processors: [],
                        ram: {
                            min: 4,
                            max: 128,
                        },
                        disk: {
                            min: 128,
                            max: 2000,
                        },
                    },
                    sortBy: 'none',
                };
                const response = await ProductsApi.post('/all', dataInit);
                setProducts(response.data);
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
        //##DEV ---- timeout
        // setTimeout(() => {
        //     fetchProducts();
        // }, 500);
        fetchProducts();
    }, []);

    //--------------------------------------------
    allProducts === 'yes' ? (Show = products.length) : (Show = 3);
    return (
        <>
            {products.length === 0 ? (
                <>
                    <LoadingAnimation />
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
                                            <span>{item.price} zł</span>
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
