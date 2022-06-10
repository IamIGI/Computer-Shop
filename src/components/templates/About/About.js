import React from 'react';

//TEST ZONE

const About = () => {
    //remove item from local storage
    localStorage.removeItem('productInfo');
    // try read again, but return null
    const wartosc = JSON.parse(localStorage.getItem('productInfo'));
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
