import React, { useState, useEffect } from 'react';
import axios from 'axios';

const productCode = 734914;

const baseURL_ALL = 'http://localhost:5000/products';
const baseURL_SPECIFIC = `http://localhost:5000/product/${productCode}`;

//TEST ZONE

const About = () => {
    const [product, setProducts] = useState(null);
    // console.log(products === null);

    // useEffect(() => {
    //     axios
    //         .get(baseURL_ALL)
    //         .then(({ data }) => {
    //             setProducts(data);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    useEffect(() => {
        axios
            .get(baseURL_SPECIFIC)
            .then(({ data }) => {
                // console.log(data);
                setProducts(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {product === null ? (
                <>
                    {console.log(product)}
                    <h1>Loading</h1>
                </>
            ) : (
                <>
                    {console.log(product)}
                    {product.name}
                    {product.price}
                    {product.specification.processor.description}
                    <h1>About</h1>
                    {/* <p>{products[0].specification.processor.description}</p>
                    <p>{products[0].img[2]}</p> */}
                </>
            )}
        </>
    );
};

export default About;
