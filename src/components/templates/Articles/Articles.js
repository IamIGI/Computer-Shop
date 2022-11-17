import { useEffect, useState } from 'react';
import {
    LoadingWrapper,
    Wrapper,
    Menu,
    MenuOption,
    Category,
    ArticleContainer,
    DescriptionContainer,
    Date,
    PrevImage,
    MenuOptionHover,
    MenuOptionNoHover,
    ArticleWrapper,
} from './Articles.style';
import { useParams } from 'react-router-dom';
import articlesApi from '../../../api/articles';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useWindowSize from 'hooks/useWindowSize';

function getCategoryName(type) {
    switch (type) {
        case 'news':
            return 'Aktualności';
        case 'guide':
            return 'Poradniki';
        case 'none':
            return 'Wszystko';
        default:
            console.log('Bade type');
            break;
    }
}

function getPrevDescription(desc, limit) {
    let description = [];
    if (desc.length > limit) {
        description.push(desc.substr(0, limit));
        description.push('...');
        return `${description[0]} ${description[1]}`;
    } else {
        return desc;
    }
}

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
                        <MenuOption to="/articles/all/none" hoverClass={'MenuHover1'}>
                            Wszystkie <MenuOptionHover className="MenuHover1" />
                            <MenuOptionNoHover className="MenuNoHover1" />
                        </MenuOption>
                        <MenuOption to="/articles/all/news" hoverClass={'MenuHover2'}>
                            Aktualności <MenuOptionHover className="MenuHover2" />
                            <MenuOptionNoHover className="MenuNoHover2" />
                        </MenuOption>
                        <MenuOption to="/articles/all/guide" hoverClass={'MenuHover3'}>
                            Poradniki <MenuOptionHover className="MenuHover3" />
                            <MenuOptionNoHover className="MenuNoHover3" />
                        </MenuOption>
                    </Menu>
                    <Category>
                        <h1>{getCategoryName(articleType)}</h1>
                    </Category>
                    <ArticleWrapper>
                        {articles.map((article) => (
                            <ArticleContainer to={`/articles/${article._id}`}>
                                <DescriptionContainer>
                                    <div>
                                        <h2>{article.title}</h2>
                                        <p>{getPrevDescription(article.prevDescription, descriptionSize)}</p>
                                    </div>
                                    <Date>{article.updatedAt.split('-')[0]}</Date>
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
