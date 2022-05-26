import React from 'react';
import { ThemeProvider } from 'styled-components'; //use styles/theme.js everywhere you want
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import DashBoard from './DashBoard';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
    return (
        <h1>Hello World</h1>
    );
};
export default Root;
