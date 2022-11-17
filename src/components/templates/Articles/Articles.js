import React, { useEffect, useState } from 'react';
import { Wrapper } from './Articles.style';
import articlesApi from '../../../api/articles';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

const Articles = () => {
    const [articles, setArticles] = useState({});
    const [waitForFetch, setWaitForFetch] = useState(true);
    const articleType = 'none';

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
    }, []);

    return (
        <Wrapper>
            {waitForFetch ? (
                <LoadingAnimation loadingSize={15} />
            ) : articles === {} ? (
                <p>Błąd serwera</p>
            ) : (
                <Wrapper>{articles[0].title}</Wrapper>
            )}
        </Wrapper>
    );
};

export default Articles;
