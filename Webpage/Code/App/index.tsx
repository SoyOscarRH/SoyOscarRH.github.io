import React, { StrictMode, FunctionComponent, useEffect } from "react"
import ReactDOM from "react-dom"

import M from "materialize-css"

import { useCreateLanguage, LanguageContext, ToggleLanguageContext } from "./Language"
import lazyLoadImages from "./lazyLoadImages"

import AboutMeData from "../PageData/AboutMe"
import ProjectsData from "../PageData/Projects"
import ProgramsData from "../PageData/Programs"
import { Books as BooksData, AboutBooks as AboutBooksData } from "../PageData"

import AppHeader from "../AppHeader"
import Links from "../Links"
import AboutMe from "../AboutMe"
import ProjectsPrograms from "../ProjectsPrograms"
import Books from "../Books"
import Footer from "../Footer"

const App: FunctionComponent = () => {
  const [language, toggleLanguage] = useCreateLanguage()
  console.log(language)

  useEffect(() => {

    M.toast({
      html: `
      <button 
        class   = "btn-flat toast-action"
        onClick = window.changeMessage()>
        ${["¿Cambiar idioma?", "Change language?"][language.index]}
      </button>`,
      displayLength: 8000,
    })

    // [WTF]! If someone know a better way tell me :c
    window["toggleLanguage"] = toggleLanguage
  }, [language, toggleLanguage])

  return (
    <LanguageContext.Provider value={language}>
      <ToggleLanguageContext.Provider value={toggleLanguage}>
        <header>
          <AppHeader />
        </header>
      </ToggleLanguageContext.Provider>

      <main id="start">
        <section id="AboutMe">
          <AboutMe AboutMe={AboutMeData[language.name]} />
        </section>

        <Links id="Links" />

        <section id="ProjectsAndPrograms">
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

document.addEventListener("DOMContentLoaded", lazyLoadImages)

const DOM_NODE = document.getElementById("ReactApp")
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  DOM_NODE
)
