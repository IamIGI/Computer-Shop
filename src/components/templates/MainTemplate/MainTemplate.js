import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import SearchBar from 'components/organisms/SearchBard/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
    return (
        <>
            <Wrapper>
                <Navigation />
                <SearchBar />
                {children} {/* take elements that are between the MainTemplate element (in root f.e) */}
                <NewsSection />
            </Wrapper>
        </>
    );
};

export default MainTemplate;
