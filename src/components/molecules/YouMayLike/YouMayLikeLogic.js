export const handleProductsArray = (products, numberOfSlides, numberOfProductsInSlide) => {
    let slides = [];
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
    return slides;
};

export const NumberOfProductOnWidthChange = (divWidth, products) => {
    if (products.length > 0) {
        switch (divWidth) {
            case 600:
                return handleProductsArray(products, 2, 3);

            case 360:
                return handleProductsArray(products, 2, 2);

            default:
                return handleProductsArray(products, 2, 4);
        }
    }
};
