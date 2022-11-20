import { useEffect, useState } from 'react';
import { Wrapper, ArticleWrapper, Description, Image, ContentWrapper } from './HomePrevArticles.style';
import articlesApi from 'api/articles';
import { LoadingWrapper } from 'components/templates/Articles/Articles.style';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import ArticlesUtils from 'components/templates/Articles/Articles.utils';
import useWindowSize from 'hooks/useWindowSize';
import { Author, Date, InfoWrapper } from 'components/templates/Article/Article.style';

const initDescriptionSize = 70;

const HomePrevArticles = () => {
    const windowSize = useWindowSize();
    const [articles, setArticles] = useState({});
    const [numberOfArticles, setNumberOfArticles] = useState({});
    const [waitForFetch, setWaitForFetch] = useState(true);
    const [sizeOfPrevDescription, setSizeOfPrevDescription] = useState(initDescriptionSize);
    let showArticles = [];

    const handleNumberOfArticles = () => {
        if (windowSize.width <= 964 && windowSize.width > 685) {
            setSizeOfPrevDescription(initDescriptionSize);
            setNumberOfArticles(2);
        } else if (windowSize.width <= 964 && windowSize.width > 475) {
            setSizeOfPrevDescription(200);
            setNumberOfArticles(1);
        } else if (windowSize.width <= 475 && windowSize.width > 0) {
            setSizeOfPrevDescription(100);
        } else {
            setNumberOfArticles(3);
            setSizeOfPrevDescription(initDescriptionSize);
        }
    };

    useEffect(() => {
        handleNumberOfArticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize, articles]);

    if (articles.length > 0) {
        for (let i = 0; i < numberOfArticles; i++) {
            showArticles.push(articles[i]);
        }
    }

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setWaitForFetch(true);
                const response = await articlesApi.getAllArticles('none');
                setArticles(response);
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
        fetchArticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {waitForFetch ? (
                <LoadingWrapper>
                    <LoadingAnimation loadingSize={15} />
                </LoadingWrapper>
            ) : articles === {} ? (
                <p>Błąd serwera</p>
            ) : (
                <Wrapper>
                    {showArticles.map((article) => (
                        <ArticleWrapper to={`/articles/${article._id}`}>
                            <ContentWrapper>
                                <Image>
                                    <img src={article.prevImage} alt="article" />
                                </Image>
                                <Description>
                                    <h1>{article.title}</h1>
                                    <p>{ArticlesUtils.trimText(article.prevDescription, sizeOfPrevDescription)}</p>
                                </Description>
                            </ContentWrapper>
                            <InfoWrapper>
                                <Date>{article.updatedAt.split('-')[0]}</Date>
                                <Author>{article.author}</Author>
                            </InfoWrapper>
                        </ArticleWrapper>
                    ))}
                </Wrapper>
            )}
        </>
    );
};

export default HomePrevArticles;
