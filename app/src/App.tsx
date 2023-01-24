import {createTheme, ThemeProvider} from '@mui/material/styles';
import React, {createContext, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import LandingPage from "./LandingPage";
import { LanguageContext } from './LanguageContext';

const theme = createTheme(

);

const App = () => {
    const [language, setLanguage] = useState('kr');

    return (
        <ThemeProvider theme={theme}>
            <LanguageContext.Provider value={{language, setLanguage}}>
                <LandingPage/>
            </LanguageContext.Provider>
        </ThemeProvider>
    );
}

export default App;
