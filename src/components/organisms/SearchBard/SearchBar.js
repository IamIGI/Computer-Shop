import React from 'react';
import { SearchBarWrapper, StatusInfo } from './SearchBar.style';
import { Input } from 'components/atoms/Input/Input';

const SearchBar = () => (
    //remember about right braces
    <SearchBarWrapper>
        <StatusInfo>
            <p>Logged as:</p>
            <p>
                <strong>Teacher</strong>
            </p>
        </StatusInfo>
        <Input />
    </SearchBarWrapper>
);

export default SearchBar;
