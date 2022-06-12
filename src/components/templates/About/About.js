import React from 'react';

//TEST ZONE

const About = () => {
    //remove item from local storage
    localStorage.removeItem('productsInBasket');
    // try read again, but return null
    const wartosc = JSON.parse(localStorage.getItem('productsInBasket'));
    if (wartosc === null) {
        console.log('Wartosc jest nullem');
    } else {
        console.log(wartosc.products);
    }

    return (
        <>
            <h1>About</h1>
        </>
    );
};

export default About;
