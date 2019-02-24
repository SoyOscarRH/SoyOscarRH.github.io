import React, { FunctionComponent, useState, useEffect } from "react"
import ReactDOM from "react-dom"

import M from "materialize-css"

import { AboutMe as AboutMeData } from "./PageData"
import { ProjectsAndPrograms as ProjectsAndProgramsData } from "./PageData"
import { Books as BooksData, AboutBooks as AboutBooksData } from "./PageData"

import AppHeader from "./AppHeader"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Books from "./Books"
import Footer from "./Footer"

export type languages = "Spanish" | "English"
export type toogleLanguages = () => void

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
          <Projects Projects={ProjectsAndProgramsData} Language={language} />
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
