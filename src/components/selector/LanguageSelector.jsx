import React, {useState} from "react";
import i18next from "../../i18n";
import './LanguageSelector.scss'

export default function LanguageSelector() {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18next.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18next.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
    }

    return (
        <select  className="selectLang" defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
    );
};