import {
    Wrapper,
    Link,
    Top,
    Bottom,
    PriceSection,
    PriceOldValue,
    PriceValue,
    ProductInfo,
    NormalScreen,
    ItemName,
    ItemImage,
} from './MayLikeItem.style';
import BuyButton from 'components/atoms/BuyButton/BuyButton';
import ScrollTop from 'helpers/ScrollToTop';

const MayLikeItem = ({ item }) => {
    return (
        <Wrapper>
            <Link to={`/product/${item._id}`} onClick={() => ScrollTop('Top')}>
                <Top>
                    <ItemImage>
                        <img src={item.prevImg} alt="article" />
                    </ItemImage>
                    <ItemName id="ItemName">
                        <h1>{item.name}</h1>
                    </ItemName>
                </Top>
                <ProductInfo>
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
                </ProductInfo>
            </Link>
            <NormalScreen>
                <BuyButton item={item} />
            </NormalScreen>
        </Wrapper>
    );
};

export default MayLikeItem;
