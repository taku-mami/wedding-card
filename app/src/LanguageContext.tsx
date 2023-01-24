import {createContext} from "react";

export const LanguageContext = createContext({
    language: 'kr',
    setLanguage: (newLanguage: string) => {}
});
