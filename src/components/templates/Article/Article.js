import React, { useEffect, useState } from 'react';
import {
    Wrapper,
    LoadingWrapper,
    ArticleWrapper,
    ContentsWrapper,
    Contents,
    TitlesWrapper,
    TitleContainer,
    Number,
    TitleContents,
    Legend,
    InfoWrapper,
    Title,
    Date,
    Author,
    PrevDescription,
    DescriptionWrapper,
    DescriptionTitle,
    ContentWrapper,
    Content,
    DescriptionImg,
    BigScreen,
    SmallScreen,
} from './Article.style';
import { useParams } from 'react-router-dom';
import articlesApi from '../../../api/articles';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import articlesUtils from '../Articles/Articles.utils';
import { map } from 'lodash';
import articles from '../../../api/articles';

const Article = () => {
    const articleId = useParams().id;
    const [article, setArticle] = useState({});
    const [waitForFetch, setWaitForFetch] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setWaitForFetch(true);
                const response = await articlesApi.getArticle(articleId);
                setArticle(response);
                setWaitForFetch(false);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };
        fetchArticle();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {waitForFetch ? (
                <LoadingWrapper>
                    <LoadingAnimation loadingSize={15} />
                </LoadingWrapper>
            ) : article === {} ? (
                <p>Błąd serwera</p>
            ) : (
                <Wrapper>
                    <ArticleWrapper id="top">
                        <BigScreen>
                            <Legend>
                                {`HotShoot > ${articlesUtils.getCategoryName(article.type)} > ${articlesUtils.trimText(
                                    article.title,
                                    50
                                )} `}
                            </Legend>
                            <h1>{article.title}</h1>
                            <InfoWrapper>
                                <Date>{article.updatedAt.split('-')[0]}</Date>
                                <Author>{article.author}</Author>
                            </InfoWrapper>
                            <p>{article.prevDescription}</p>
                        </BigScreen>
                        {article.description.map((desc, index) => (
                            <DescriptionWrapper id={`desc_${index}`}>
                                <h2>{desc.title}</h2>
                                {desc.image && (
                                    <DescriptionImg>
                                        <img src={desc.image} alt="description" />
                                    </DescriptionImg>
                                )}
                                {desc.content.map((item) => (
                                    <p>{item.p}</p>
                                ))}
                            </DescriptionWrapper>
                        ))}
                    </ArticleWrapper>
                    <ContentsWrapper>
                        <h3>Spis treści</h3>
                        <TitlesWrapper>
                            <a href={`#top`}>
                                <TitleContainer>
                                    <Number>0</Number>
                                    <TitleContents>{article.title}</TitleContents>
                                </TitleContainer>
                            </a>
                            {article.description.map((desc, index) => (
                                <a href={`#desc_${index}`}>
                                    <TitleContainer>
                                        <Number>{index + 1}</Number>
                                        <TitleContents>{desc.title}</TitleContents>
                                    </TitleContainer>
                                </a>
                            ))}
                        </TitlesWrapper>
                    </ContentsWrapper>

                    <SmallScreen>
                        <Legend>
                            {`HotShoot > ${articlesUtils.getCategoryName(article.type)} > ${articlesUtils.trimText(
                                article.title,
                                50
                            )} `}
                        </Legend>
                        <h1>{article.title}</h1>
                        <InfoWrapper>
                            <Date>{article.updatedAt.split('-')[0]}</Date>
                            <Author>{article.author}</Author>
                        </InfoWrapper>
                        <p>{article.prevDescription}</p>
                    </SmallScreen>
                </Wrapper>
            )}
        </>
    );
};

export default Article;
