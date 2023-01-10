import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from 'react';
import LandingPage from "./LandingPage";

const theme = createTheme(

);

const App = () => (
    <ThemeProvider theme={theme}>
        <LandingPage/>
    </ThemeProvider>
);

export default App;
