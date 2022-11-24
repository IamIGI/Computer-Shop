import { useEffect, useState } from 'react';
import {
    BuyButton,
    NumberInput,
    Separator,
    Wrapper,
    DiscountSize,
    OldPrice,
    PriceSection,
    CurrentPrice,
    BuySection,
    BuyIcon,
    ArticleLink,
} from './ProductBuyContent.style';
import useBasket from 'hooks/useBasket';
import { BsCartPlus, BsTruck } from 'react-icons/bs';
import { RiCoinLine } from 'react-icons/ri';
import toast from 'react-hot-toast';
import ProductBuyHint from 'components/atoms/ProductBuyHint/ProductBuyHint';
import PopUpInstallment from 'components/organisms/PopUpInstallment/PopUpInstallment';
import { FiSmartphone } from 'react-icons/fi';
import PopUpFreeDelivery from 'components/organisms/PopUpFreeDelivery/PopUpFreeDelivery';

const ProductBuyContent = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { basketItems, setBasketItems } = useBasket();
    const [priceBeforeDiscount, setPriceBeforeDiscount] = useState(0);
    const [isDiscount, setIsDiscount] = useState(false);
    const notify = () =>
        toast.success('Produkt dodany do koszyka', {
            icon: '💻',
            duration: 2000,
        });

    const getPrice = (product) => {
        if (product.special_offer.mode) {
            setPriceBeforeDiscount(product.price + product.special_offer.price);
            setIsDiscount(true);
        } else {
            setPriceBeforeDiscount(0); // don't matter
            setIsDiscount(false);
        }
    };

    useEffect(() => {
        getPrice(product);
    }, [product]);

    const addProduct = () => {
        let q = Number(quantity);
        // 👇️ check if array contains object with given product id
        const isFound = basketItems.some((item, index) => {
            if (item._id === product._id) {
                //set quantity to given product
                setBasketItems((prevItems) => {
                    return prevItems.map((item) => {
                        return item._id === product._id ? { ...item, quantity: item.quantity + q } : item;
                    });
                });
                return true;
            }
            return false;
        });

        if (!isFound) {
            notify();
            setBasketItems((prevItems) => {
                return [
                    ...prevItems,
                    {
                        prevImg: product.prevImg,
                        _id: product._id,
                        quantity: q,
                        name: product.name,
                        price: product.price,
                        isDiscount,
                        priceBeforeDiscount: priceBeforeDiscount,
                    },
                ];
            });
        }
    };

    return (
        <>
            <Wrapper>
                {isDiscount ? (
                    <>
                        <DiscountSize>Oszczędzasz {product.special_offer.price} zł </DiscountSize>
                        <PriceSection>
                            <OldPrice>{priceBeforeDiscount} zł</OldPrice>
                            <CurrentPrice> {product.price} zł</CurrentPrice>
                        </PriceSection>
                    </>
                ) : (
                    <>
                        <PriceSection>
                            <CurrentPrice> {product.price} zł</CurrentPrice>
                        </PriceSection>
                    </>
                )}

                <BuySection>
                    <NumberInput placeholder="1" onChange={(e) => setQuantity(e.target.value)} />
                    <BuyButton onClick={() => addProduct()}>
                        <BuyIcon>
                            <BsCartPlus />
                        </BuyIcon>
                        <div> Dodaj do koszyka</div>
                    </BuyButton>
                </BuySection>
                <ArticleLink to={'/articles/63754235f4d73ff45867a613'}>
                    <ProductBuyHint icon={<FiSmartphone />} title="Zakupy z aplikacji" ask="Dowiedz się więcej" />
                </ArticleLink>
                <Separator />
                <ProductBuyHint
                    icon={<BsTruck />}
                    title="Darmowa dostawa"
                    ask="Sprawdź szczegóły"
                    popUp={<PopUpFreeDelivery product={product} />}
                />
                <Separator />
                <ProductBuyHint
                    icon={<RiCoinLine />}
                    title={` Rata tylko ${(product.price / 24).toFixed(2)} zł`}
                    ask="Oblicz ratę"
                    popUp={<PopUpInstallment product={product} />}
                />
            </Wrapper>
        </>
    );
};

export default ProductBuyContent;
