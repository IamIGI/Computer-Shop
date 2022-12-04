import React from 'react';
import {
    DescriptionArea,
    ImageArea,
    PriceArea,
    Section,
    Wrapper,
    List,
    Icon,
    DescriptionAreaMissing,
    DescriptionBottom,
    StyledButton,
    OldPrice,
    CurrentPrice,
    Title,
    ItemSection,
} from './BasketPreview.style';
import useBasket from 'hooks/useBasket';
import { BsBasket3 } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from '../CartHint/CartHint.style';

const BasketPreview = () => {
    const { basketItems, deleteProduct } = useBasket();

    return (
        <>
            <Wrapper>
                {basketItems.length === 0 ? (
                    <Section>
                        <Icon>
                            <BsBasket3 />
                        </Icon>
                        <DescriptionAreaMissing>
                            <h4>Brak produktów w koszyku </h4>
                        </DescriptionAreaMissing>
                    </Section>
                ) : (
                    <List>
                        {basketItems.map((item, index) => (
                            <li id={index} key={index}>
                                <ItemSection>
                                    <ImageArea>
                                        <img src={item.prevImg} alt="Product prev" />
                                    </ImageArea>
                                    <DescriptionArea>
                                        <Link to={`/product/${item._id}`}>
                                            <Title>{item.name}</Title>
                                        </Link>
                                        <DescriptionBottom>
                                            <div>{item.quantity} szt.</div>
                                            <div>
                                                <StyledButton onClick={() => deleteProduct(item._id)}>
                                                    <AiOutlineDelete />
                                                </StyledButton>
                                            </div>
                                        </DescriptionBottom>
                                    </DescriptionArea>
                                    <PriceArea>
                                        {item.isDiscount ? (
                                            <>
                                                <OldPrice>
                                                    <span>{item.priceBeforeDiscount} zł</span>
                                                </OldPrice>
                                                <CurrentPrice>{item.price} zł</CurrentPrice>
                                            </>
                                        ) : (
                                            <CurrentPrice>
                                                <p>{item.price} zł</p>
                                            </CurrentPrice>
                                        )}
                                    </PriceArea>
                                </ItemSection>
                            </li>
                        ))}
                    </List>
                )}
            </Wrapper>
        </>
    );
};

export default BasketPreview;
