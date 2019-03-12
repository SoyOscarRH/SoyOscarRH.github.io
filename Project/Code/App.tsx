import React, { FunctionComponent, useEffect, useReducer } from "react"
import ReactDOM from "react-dom"

import M from "materialize-css"

import { LanguageContext, ToggleLanguageContext } from "./Helpers/Language"
import { Language, defaultLanguage, getNewLanguage } from "./Helpers/Language"

import AboutMeData from "./PageData/AboutMe"
import ProjectsData from "./PageData/Projects"
import ProgramsData from "./PageData/Programs"
import { Books as BooksData, AboutBooks as AboutBooksData } from "./PageData"

import AppHeader from "./AppHeader"
import AboutMe from "./AboutMe"
import ProjectsPrograms from "./ProjectsPrograms"
import Books from "./Books"
import Footer from "./Footer"

interface Action {
  type: "toggle"
}

const ShowToastToChangeLanguage = (dispatch: (action: Action) => void) => {
  // [WTF]! If someone know a better way tell me :c
  window["changeMessage"] = () => {
    M.Toast.dismissAll()
    dispatch({ type: "toggle" })
  }

  M.toast({
    html: `
    <button 
      class   = "btn-flat toast-action"
      onClick = window.changeMessage()>
      ${["¿Cambiar idioma?", "Change language?"][defaultLanguage.index]}
    </button>`,
    displayLength: 8000,
  })
}

const reducer = (language: Language, action: Action) => {
  switch (action.type) {
    case "toggle":
      return getNewLanguage(language)
    default:
      throw new Error()
  }
}

const App: FunctionComponent = () => {
  const [language, dispatch] = useReducer(reducer, defaultLanguage)
  useEffect(() => ShowToastToChangeLanguage(dispatch), [])

  return (
    <LanguageContext.Provider value={language}>
      <ToggleLanguageContext.Provider value={() => dispatch({ type: "toggle" })}>
        <header>
          <AppHeader />
        </header>
      </ToggleLanguageContext.Provider>

      <main id="start">
        <section id="AboutMe">
          <AboutMe AboutMe={AboutMeData[language.name]} />
        </section>
        <section id="Projects">
          <ProjectsPrograms Projects={ProjectsData} Programs={ProgramsData} />
        </section>
        <section id="Books">
          <Books Books={BooksData} AboutBooks={AboutBooksData} />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </LanguageContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("ReactApp")
)
