import React, { useState, useEffect } from 'react';
import { Bottom, Link, StyledList, StyledRecord, Top, Wrapper } from './ProductPreview.styles';
import BuyButton from 'components/atoms/BuyButton/BuyButton';
import ProductsApi from 'api/products';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

let Show = '';
const ProductPreview = ({ allProducts }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductsApi.get('/all');
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
        setTimeout(() => {
            fetchProducts();
        }, 1000);
    }, []);

    //--------------------------------------------
    allProducts === 'yes' ? (Show = products.length) : (Show = 2);
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
                                <Link to={`/product/${item.code}`}>
                                    <Wrapper>
                                        <Top>
                                            <img src={item.prevImg} alt="article" />
                                            <h1>{item.name}</h1>
                                        </Top>
                                        {allProducts === 'yes' ? (
                                            <StyledList>
                                                <StyledRecord>{item.specification.processor.description}</StyledRecord>
                                                <StyledRecord>{item.specification.ram.description}</StyledRecord>
                                                <StyledRecord>
                                                    {item.specification.graphics_card.description}
                                                </StyledRecord>
                                                <StyledRecord>{item.specification.disk.description}</StyledRecord>
                                            </StyledList>
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
