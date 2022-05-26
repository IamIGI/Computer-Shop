import { ArticleWrapper, NewsSectionHeader, Wrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import React, { useState, useEffect } from 'react';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

export const query = `
{
    allArticles{
      id
      title
      category
      content
      image{
        url
      }
    }
  }`;

const NewsSection = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log(process.env.REACT_APP_API_TOKEN);
        axios
            .post(
                'https://graphql.datocms.com/',
                {
                    query,
                },
                {
                    headers: {
                        authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                }
            )
            .then(({ data: { data } }) => {
                setArticles(data.allArticles);
            })
            .catch((err) => console.log(err));
    }, []); //remember about table dependencies, other wise you will get inside of use effect running in circle

    return (
        <>
            <Wrapper>
                <NewsSectionHeader> University news feed</NewsSectionHeader>
                {articles.length > 0 ? (
                    articles.map(({ id, title, category, content, image = null }) => (
                        <ArticleWrapper key={id}>
                            <TitleWrapper>
                                <h3>{title}</h3>
                                <p>{category}</p>
                            </TitleWrapper>
                            <ContentWrapper>
                                <p>{content}</p>
                                {image ? <img src={image.url} alt="article" /> : null}
                            </ContentWrapper>
                            <Button isBig>Read More</Button>{' '}
                            {/* isBig is a flag, that is checked inside styles of Button */}
                        </ArticleWrapper>
                    ))
                ) : (
                    <NewsSectionHeader> Loading ...</NewsSectionHeader>
                )}
            </Wrapper>
        </>
    );
};

NewsSection.propTypes = {};
export default NewsSection;
