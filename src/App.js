import { useState, useEffect } from 'react'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Main from './components/Main'
import Instruction from './components/Instruction'
import Input from './components/Input'
import List from './components/List'

import { GlobalStyle } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "./styles/themes"

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [language, setLanguage] = useState("pt-br")
  const [items, setItems] = useState([])

  useEffect(() => {
    function handleLoadingDataFromLocalStorage() {
      const storedTheme = JSON.parse(localStorage.getItem("isDarkTheme"))
      if (storedTheme === null) {
        localStorage.setItem("isDarkTheme", false)
        setIsDarkTheme(false)
      } else {
        setIsDarkTheme(JSON.parse(localStorage.getItem("isDarkTheme")))
      }

      const storedLanguage = localStorage.getItem("language")
      if (storedLanguage === null) {
        localStorage.setItem("language", "pt-br")
        setLanguage("pt-br")
      } else {
        setLanguage(localStorage.getItem("language"))
      }

      const storedItems = JSON.parse(localStorage.getItem("items"))
      if (storedItems === null) {
        localStorage.setItem("items", JSON.stringify([]))
        setItems([])
      } else {
        setItems(storedItems)
      }
    }

    handleLoadingDataFromLocalStorage()
  }, [items])

  return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navigation 
          isDarkTheme={isDarkTheme} 
          setIsDarkTheme={setIsDarkTheme}
          language={language}
          setLanguage={setLanguage}/>
        <Header />
        <Main>
          <Instruction language={language}/>
          <Input language={language} items={items} setItems={setItems}/>
          <List items={items} setItems={setItems} />
        </Main>
      </ThemeProvider>
  )
}

export default App
