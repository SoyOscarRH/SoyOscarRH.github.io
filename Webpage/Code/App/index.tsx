import React, { StrictMode, FunctionComponent, useEffect } from "react"
import ReactDOM from "react-dom"

import { useCreateLanguage, LanguageContext, ToggleLanguageContext } from "./Language"
import lazyLoadImages from "./lazyLoadImages"
import showToast from "./showToast"

import AboutMeData from "../PageData/AboutMe"
import ProjectsData from "../PageData/Projects"
import ProgramsData from "../PageData/Programs"
import { BooksData, AboutBooksData } from "../PageData"

import AppHeader from "../AppHeader"
import Links from "../Links"
import AboutMe from "../AboutMe"
import ProjectsPrograms from "../ProjectsPrograms"
import Books from "../Books"
import Footer from "../Footer"

const App: FunctionComponent = () => {
  const [language, toggleLanguage] = useCreateLanguage()

  useEffect(() => {
    setTimeout(() => showToast(language, toggleLanguage), 1500)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps 

  return (
    <LanguageContext.Provider value={language}>
      <ToggleLanguageContext.Provider value={toggleLanguage}>
        <header>
          <AppHeader />
        </header>
      </ToggleLanguageContext.Provider>

      <main>
        <AboutMe id="AboutMe" AboutMe={AboutMeData[language.name]} />
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
