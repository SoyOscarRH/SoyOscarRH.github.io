import React, { StrictMode, FunctionComponent, useEffect } from "react"
import ReactDOM from "react-dom"

import { useCreateLanguage, LanguageContext } from "./Language"
import showToast from "../Helpers/showToast"

import AboutMeData from "../../data/AboutMe"
import ProjectsData from "../../data/Projects"
import ProgramsData from "../../data/Programs"
import { BooksData, AboutBooksData } from "../../data"

import Header from "../Header"
import Links from "../Links"
import AboutMe from "../AboutMe"
import ProjectsPrograms from "../ProjectsPrograms"
import Books from "../Books"
import Footer from "../Footer"

const App: FunctionComponent = () => {
  const [language, toggleLanguage] = useCreateLanguage()

  useEffect(() => {
    setTimeout(() => showToast(language, toggleLanguage), 3000)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LanguageContext.Provider value={language}>
      <Header toggleLanguage={toggleLanguage} />

      <main id="start">
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

import lazyLoadImages from "../Helpers/lazyLoadImages"
document.addEventListener("DOMContentLoaded", lazyLoadImages)

const DOM_NODE = document.getElementById("ReactApp")
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  DOM_NODE
)
