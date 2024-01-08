import spanish from './es.json';
import english from './en.json';

const LANGUAGES = {
    SPANISH: "es",
    ENGLISH: "en"
}

export const getI18n = ({currentLocale}: {currentLocale: string}) => {
    if(currentLocale === LANGUAGES.ENGLISH) return english;
    if(currentLocale === LANGUAGES.SPANISH) return spanish;
    return english;
}