import React, { FunctionComponent, useEffect } from "react"

import { LanguageContext, useCreateLanguageStore } from "./Language"

import lazyLoadImages from "../Helpers/lazyLoadImages"
import showLanguageToast from "../Toast/showLanguageToast"

import Header from "../Header"
import AboutMe from "../AboutMe"
import Links from "../Links"
import ProjectsPrograms from "../ProjectsPrograms"
import Books from "../Books"
import Footer from "../Footer"

const App: FunctionComponent = () => {
  const { language, toggle } = useCreateLanguageStore()

  useEffect(lazyLoadImages, [])
  
  // @ts-ignore
  useEffect(() => { window.toggleLanguage = toggle })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setTimeout(() => showLanguageToast(language), 3000) }, [])

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
