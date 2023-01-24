import {createTheme, ThemeProvider} from '@mui/material/styles';
import React, {useState} from 'react';
import LandingPage from "./LandingPage";
import {LanguageContext} from './LanguageContext';

const theme = createTheme(

);

const App = () => {
    const [language, setLanguage] = useState('kr');

    return (
        <ThemeProvider theme={theme}>
            <LanguageContext.Provider value={{language, setLanguage}}>
                <div className={"my-background-color"}>
                    <LandingPage/>
                </div>
            </LanguageContext.Provider>
        </ThemeProvider>
    );
}

export default App;
