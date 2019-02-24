import React, { FunctionComponent, useState, useEffect } from "react"
import ReactDOM from "react-dom"

import M from "materialize-css"

import AboutMeData from "./PageData/AboutMe"
import ProjectsData from "./PageData/Projects"
import ProgramsData from "./PageData/Programs"
import { Books as BooksData, AboutBooks as AboutBooksData } from "./PageData"

import AppHeader from "./AppHeader"
import AboutMe from "./AboutMe"
import ProjectsPrograms from "./ProjectsPrograms"
import Books from "./Books"
import Footer from "./Footer"

export type languages = "Spanish" | "English"
export type toogleLanguages = () => void

export interface LanguageOption<T> {
  English: T, 
  Spanish: T
}

export const LanguageContext = React.createContext<
  [languages, toogleLanguages]
>(["English", () => {}])

const App: FunctionComponent = () => {
  const [language, setLanguage] = useState<languages>("English")

  const toggleLanguageAndDismissToasts = () => {
    M.Toast.dismissAll()
    const newLanguage = language === "English" ? "Spanish" : "English"
    setLanguage(newLanguage)
  }

  useEffect(() => {
    window["changeMessage"] = toggleLanguageAndDismissToasts
    M.toast({
      html: `
        <button 
					class   = "btn-flat toast-action"
					onClick = window.changeMessage()>
					${language === "English" ? "¿Cambiar idioma?" : "Change language?"}
				</button>`,
      displayLength: 8000,
    })
  }, [])

  return (
    <LanguageContext.Provider
      value={[language, toggleLanguageAndDismissToasts]}
    >
      <header>
        <AppHeader />
      </header>

      <main>
        <section id="AboutMe">
          <AboutMe AboutMe={AboutMeData[language]} />
        </section>
        <section id="Projects">
          <ProjectsPrograms Projects={ProjectsData} Programs={ProgramsData} />
        </section>
        <section id="Books">
          <Books
            Books={BooksData}
            AboutBooks={AboutBooksData}
            Language={language}
          />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </LanguageContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("ReactApp"))
