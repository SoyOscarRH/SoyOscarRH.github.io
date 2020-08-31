import React, { useReducer, useCallback } from "react"

export type languageName = "Spanish" | "English"
export type languageIndex = 0 | 1

export type LanguageOption<T> = { [key in languageName]: T }

export interface Language {
  name: languageName
  index: languageIndex
}

const defaultLanguage: Language = { name: "English", index: 0 }
const LanguageContext = React.createContext(defaultLanguage)

const reducer = (language: Language, action: "toggle"): Language => {
  if (action !== "toggle") console.warn("Error")
  switch (language.name) {
    case "English":
      return { name: "Spanish", index: 1 }
    default:
      return { name: "English", index: 0 }
  }
}

const useCreateLanguage = () => {
  const [language, changeLanguage] = useReducer(reducer, defaultLanguage)
  const toggle = useCallback(() => changeLanguage("toggle"), [])
  
  // @ts-ignore
  window.toggleLanguage = toggle;

  return [language, toggle] as [Language, () => void]
}

export { defaultLanguage, LanguageContext, useCreateLanguage }
