import React, { useEffect, useState } from 'react';
import { Wrapper } from './Article.style';
import { useParams } from 'react-router-dom';
import articlesApi from '../../../api/articles';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

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
        <Wrapper>
            {waitForFetch ? (
                <LoadingAnimation loadingSize={15} />
            ) : article === {} ? (
                <p>Błąd serwera</p>
            ) : (
                <Wrapper>{article.title}</Wrapper>
            )}
        </Wrapper>
    );
};

export default Article;
