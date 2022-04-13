import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext([])

export function LanguageProvider({children}) {
    const[language, setLanguage] = useState("pt-br")

    function handleSelectedLanguage(value) {
        localStorage.setItem("language", value)
        setLanguage(value)
    }

    useEffect(() => {
        function handleDefaultLanguage() {
            const storedLanguage = localStorage.getItem("language")
            if (storedLanguage === null) {
              localStorage.setItem("language", "pt-br")
              setLanguage("pt-br")
            } else {
              setLanguage(localStorage.getItem("language"))
            }
        }

        handleDefaultLanguage()
    }, [])

    return (
        <LanguageContext.Provider 
            value={{language, setLanguage: handleSelectedLanguage}}>
            {children}
        </LanguageContext.Provider>
    ) 
}