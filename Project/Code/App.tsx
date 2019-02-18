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

export type LanguageType = "Spanish" | "English"
export type LanguageFunction = (newLanguage: LanguageType) => void

export const LanguageContext = React.createContext<
  [LanguageType, LanguageFunction]
>(["English", (_) => {}])

const App: FunctionComponent = () => {
  const [language, setLanguage] = useState<LanguageType>("English")

  const changeLanguage = (newLanguage: LanguageType) => {
    M.Toast.dismissAll()
    setLanguage(newLanguage)
  }

  useEffect(() => {
    window["changeMessage"] = changeLanguage
    M.toast({
      html: `
        <button 
					class   = "btn-flat toast-action"
					onClick = window.changeMessage()>
					${language == "English" ? "¿Cambiar idioma?" : "Change language?"}
				</button>`,
      displayLength: 8000,
    })
  }, [])

  return (
    <LanguageContext.Provider value={[language, changeLanguage]}>
      <header>
        <AppHeader />
      </header>
      <main>
        <div id="AboutMe">
          <AboutMe AboutMe={AboutMeData[language]} />
        </div>
        <div id="Projects">
          <Projects Projects={ProjectsAndProgramsData} Language={language} />
        </div>
        <div id="Books">
          <Books
            Books={BooksData}
            AboutBooks={AboutBooksData}
            Language={language}
          />
        </div>
        <br />
        <br />
        <br />
      </main>
      <footer>
        <Footer />
      </footer>
    </LanguageContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("ReactApp"))
