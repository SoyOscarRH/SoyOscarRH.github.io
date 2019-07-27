import React, { useReducer, useCallback } from "react"

export type languageName = "Spanish" | "English"
export type LanguageOption<T> = { [key in languageName]: T }

export interface Language {
  name: languageName
  index: languageIndex
}

export const defaultLanguage: Language = { name: "English", index: 0 }

export const LanguageContext = React.createContext(defaultLanguage)
export const ToggleLanguageContext = React.createContext(() => {
  console.warn("Error")
})

export type languageIndex = 0 | 1


const reducer = (language: Language, action: "toggle"): Language => {
  if (action !== "toggle") console.warn("Error")
  switch (language.name) {
    case "English": return { name: "Spanish", index: 1 }
    default: return { name: "English", index: 0 }
  }
}

const useCreateLanguage = () => {
  const [language, changeLanguage] = useReducer(reducer, defaultLanguage)
  const toggle = useCallback( () => changeLanguage("toggle"), [])

  return [language, toggle] as [Language, () => void]
}

export {useCreateLanguage}
