import React, { FunctionComponent, useEffect } from "react"

import { LanguageContext, useCreateLanguageStore } from "./Language"

import lazyLoadImages from "../Helpers/lazyLoadImages"
import showLanguageToast from "../Helpers/showLanguageToast"

import Header from "../Header"
import AboutMe from "../AboutMe"
import Links from "../Links"
import ProjectsPrograms from "../ProjectsPrograms"
import Books from "../Books"
import Footer from "../Footer"

import "./appStyle.css"

const App: FunctionComponent = () => {
  const { language, toggle } = useCreateLanguageStore()

  useEffect(lazyLoadImages, [])
  useEffect(() => {
    setTimeout(() => showLanguageToast(language), 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LanguageContext.Provider value={language}>
      <Header toggleLanguage={toggle} />

      <main>
        <AboutMe />
        <Links />
        <ProjectsPrograms />
        <Books />
      </main>

      <Footer />
    </LanguageContext.Provider>
  )
}

export default App
