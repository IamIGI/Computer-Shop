import React from 'react';
import CarouselAtom from 'components/atoms/Carousel/CarouselAtom';
import {
    Wrapper,
    TopWrapper,
    CarouselBox,
    TopInsideWrapper,
    Menu,
    Title,
    DataBuyWrapper,
    PrevData,
    BuySelector,
    BottomWrapper,
    MenuSector,
    AboutProductSector,
    Description,
    Specification,
    Separator,
} from './Product.styles';
import { BsChevronDoubleUp } from 'react-icons/bs';
import SpecificationList from 'components/molecules/SpecificationList/SpecificationList';

const Product = ({ product }) => {
    return (
        <Wrapper>
            <TopWrapper id="Top">
                <CarouselBox>
                    <CarouselAtom images={product.img} />
                </CarouselBox>
                <TopInsideWrapper>
                    <Title>{product.name}</Title>
                    <DataBuyWrapper>
                        <PrevData></PrevData>
                        <BuySelector></BuySelector>
                    </DataBuyWrapper>
                </TopInsideWrapper>
            </TopWrapper>
            <BottomWrapper>
                <MenuSector></MenuSector>
                <AboutProductSector>
                    <Menu>
                        <a href="#Top">
                            <BsChevronDoubleUp />
                        </a>
                        <a href="#Description">Opis</a>
                        <a href="#Specification">Specyfikacja</a>
                    </Menu>
                    <Separator />
                    <Description id="Description">
                        {product.description.map((item) => (
                            <>
                                <h3>{item.title}</h3>
                                {item.content.map((content) => (
                                    <p>{content.p}</p>
                                ))}
                                <img src={item.image} alt="img" />
                            </>
                        ))}
                    </Description>
                    <Separator />
                    <Specification id="Specification">
                        <SpecificationList product={product} />
                    </Specification>
                    <Separator />
                </AboutProductSector>
            </BottomWrapper>
        </Wrapper>
    );
};

export default Product;
