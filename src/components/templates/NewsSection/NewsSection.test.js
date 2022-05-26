import React from 'react';
import { screen } from '@testing-library/react'; //allow to download data from website screen
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, { query } from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProviders';

const DATA_CMS_LINK = 'https://graphql.datocms.com/';

const mock = new MockAdapter(axios);

describe('News Section', () => {
    afterEach(() => {
        //reset after each test
        mock.reset();
    });

    it('Display Loading when data is not show on screen yet', async () => {
        //axios is asynchornic function, so you also have to wait for it
        mock.onPost(DATA_CMS_LINK, { query }).reply(500);
        renderWithProviders(<NewsSection />);
        await screen.findByText(/Loading/); //wait until find 'Loading'
    });

    it('Display the articles', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
            data: {
                allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
            },
        });
        renderWithProviders(<NewsSection />);
        screen.queryByText('Test'); //the previous one didn't work ....
    });
});
