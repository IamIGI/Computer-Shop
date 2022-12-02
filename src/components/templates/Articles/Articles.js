import { useEffect, useState } from 'react';
import {
    LoadingWrapper,
    Wrapper,
    Menu,
    MenuOption,
    Category,
    ArticleContainer,
    DescriptionContainer,
    PrevImage,
    MenuOptionHover,
    MenuOptionNoHover,
    ArticleWrapper,
} from './Articles.style';
import { useParams } from 'react-router-dom';
import articlesApi from '../../../api/articles';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useWindowSize from 'hooks/useWindowSize';
import articlesUtils from './Articles.utils';
import { Author, InfoWrapper, Date } from '../Article/Article.style';

const Articles = () => {
    const articleType = useParams().type;
    const windowSize = useWindowSize();
    const [articles, setArticles] = useState({});
    const [waitForFetch, setWaitForFetch] = useState(true);
    const [descriptionSize, setDescriptionSize] = useState(300);

    useEffect(() => {
        if (windowSize.width > 700) {
            setDescriptionSize(300);
        } else if (windowSize.width <= 700) {
            setDescriptionSize(200);
        }
    }, [windowSize]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setWaitForFetch(true);
                const response = await articlesApi.getAllArticles(articleType);
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
    }, [articleType]);

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
                    <Menu>
                        <MenuOption to="/articles/all/none" $hoverClass={'MenuHover1'}>
                            Wszystkie <MenuOptionHover className="MenuHover1" />
                            <MenuOptionNoHover className="MenuNoHover1" />
                        </MenuOption>
                        <MenuOption to="/articles/all/news" $hoverClass={'MenuHover2'}>
                            Aktualności <MenuOptionHover className="MenuHover2" />
                            <MenuOptionNoHover className="MenuNoHover2" />
                        </MenuOption>
                        <MenuOption to="/articles/all/guide" $hoverClass={'MenuHover3'}>
                            Poradniki <MenuOptionHover className="MenuHover3" />
                            <MenuOptionNoHover className="MenuNoHover3" />
                        </MenuOption>
                    </Menu>
                    <Category>
                        <h1>{articlesUtils.getCategoryName(articleType)}</h1>
                    </Category>
                    <ArticleWrapper>
                        {articles.map((article) => (
                            <ArticleContainer to={`/articles/${article._id}`} key={article._id}>
                                <DescriptionContainer>
                                    <div>
                                        <h2>{article.title}</h2>
                                        <p>{articlesUtils.trimText(article.prevDescription, descriptionSize)}</p>
                                    </div>
                                    <InfoWrapper>
                                        <Date>{article.updatedAt.split('-')[0]}</Date>
                                        <Author>{article.author}</Author>
                                    </InfoWrapper>
                                </DescriptionContainer>
                                <PrevImage>
                                    <img src={article.prevImage} alt="article" />
                                </PrevImage>
                            </ArticleContainer>
                        ))}
                    </ArticleWrapper>
                </Wrapper>
            )}
        </>
    );
};

export default Articles;
