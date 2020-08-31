import React, { FunctionComponent, useEffect } from "react"

import { LanguageContext, useCreateLanguageStore } from "./Language"

import AboutMeData from "../../data/AboutMe"
import ProjectsData from "../../data/Projects"
import ProgramsData from "../../data/Programs"
import { BooksData, AboutBooksData } from "../../data"

import Header from "../Header"
import AboutMe from "../AboutMe"
import Links from "../Links"
import ProjectsPrograms from "../ProjectsPrograms"
import Books from "../Books"
import Footer from "../Footer"

import lazyLoadImages from "../Helpers/lazyLoadImages"
import useShowToast from "../Helpers/Toast"

const App: FunctionComponent = () => {
  const { language, toggle } = useCreateLanguageStore()

  useEffect(lazyLoadImages, [])
  useShowToast(language)

  return (
    <LanguageContext.Provider value={language}>
      <Header toggleLanguage={toggle} />

      <main id="start" style={{backgroundColor: "white"}}>
        <AboutMe id="AboutMe" AboutMe={AboutMeData[language]} />
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

export default App
