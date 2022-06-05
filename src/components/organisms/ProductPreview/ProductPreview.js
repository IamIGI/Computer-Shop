import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bottom, Link, StyledList, StyledRecord, Top, Wrapper } from './ProductPreview.styles';
import BuyButton from 'components/atoms/BuyButton/BuyButton';

const baseURL = 'http://localhost:5000/products';
let Show = '';
const ProductPreview = ({ allProducts }) => {
    //API section---------------------
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(baseURL)
            .then(({ data }) => {
                setProducts(data);
            })
            .catch((err) => console.log(err));
    }, []);
    //--------------------------------------------
    allProducts === 'yes' ? (Show = products.length) : (Show = 2);
    return (
        <>
            {products.map((item, index) => (
                <>
                    {/* {console.log(products.length)} */}

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
                                        <StyledRecord>{item.specification.graphics_card.description}</StyledRecord>
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
    );
};

export default ProductPreview;
