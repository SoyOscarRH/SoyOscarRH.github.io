import React from "react"

/*
 * We for now only have 2 languages, we will use an index to refer to them
 * so we can use a pattern like: `[val1, val2, val3, ...][index]` to get
 * a text in the correct language, maybe is not the best idea, but I like it
 * and work for this simple project, also, in this file I used simple logic
 * to make Typescript happy.
 */

export type languageName = "Spanish" | "English"
export type languageIndex = 0 | 1
export type toggleFunction = () => void
export interface Language {
  name: languageName
  index: languageIndex
}

export type LanguageOption<T> = { [key in languageName]: T }

export const defaultLanguage: Language = { name: "English", index: 0 }
const defaultToggle = () => {
  throw Error()
}
export const LanguageContext = React.createContext<Language>(defaultLanguage)
export const ToggleLanguageContext = React.createContext<toggleFunction>(defaultToggle)

export const getNewLanguage = (language: Language): Language => {
  switch (language.name) {
    case "English":
      return { name: "Spanish", index: 1 }
      break
    case "Spanish":
      return { name: "English", index: 0 }
      break
  }
}
