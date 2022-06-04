import React from 'react';
import { DescriptionArea, ImageArea, PriceArea, Section, Wrapper, List, Line } from './BasketPreview.style';

const BasketPreview = () => {
    return (
        <>
            <Wrapper>
                <List>
                    <li>
                        <Section>
                            <ImageArea>
                                <img
                                    src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/3/pr_2021_3_9_12_16_38_202_08.jpg"
                                    alt="Product img"
                                />
                            </ImageArea>
                            <DescriptionArea>
                                <h4>MSI GF76 i7-11800H/16GB/512/Win10X RTX3060 144Hz</h4>
                                <p>1 szt.</p>
                            </DescriptionArea>
                            <PriceArea>
                                <p>5799,00zl</p>
                            </PriceArea>
                        </Section>
                        <Line />
                    </li>
                    <li>
                        <Section>
                            <ImageArea>
                                <img
                                    src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/3/pr_2021_3_9_12_16_38_202_08.jpg"
                                    alt="Product img"
                                />
                            </ImageArea>
                            <DescriptionArea>
                                <h4>MSI GF76 i7-11800H/16GB/512/Win10X RTX3060 144Hz</h4>
                                <p>1 szt.</p>
                            </DescriptionArea>
                            <PriceArea>
                                <p>5799,00zl</p>
                            </PriceArea>
                        </Section>
                        <Line />
                    </li>
                </List>
            </Wrapper>
        </>
    );
};

export default BasketPreview;
