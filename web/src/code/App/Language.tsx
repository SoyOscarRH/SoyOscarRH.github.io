import { useReducer, createContext, useContext } from "react"

export type languageName = "spanish" | "english"

const defaultLanguage = "english"
const LanguageContext = createContext<languageName>(defaultLanguage)

const reducer = (language: languageName): languageName => {
  switch (language) {
    case "english":
      return "spanish"
    case "spanish":
      return "english"
  }
}

const useCreateLanguageStore = () => {
  const [language, toggle] = useReducer(reducer, defaultLanguage)

  // @ts-ignore
  window.toggleLanguage = toggle

  return { language, toggle }
}

const useCurrentLanguage = () => useContext(LanguageContext)

export type LanguageOption<T> = { [key in languageName]: T }

export { defaultLanguage, LanguageContext, useCreateLanguageStore, useCurrentLanguage }
