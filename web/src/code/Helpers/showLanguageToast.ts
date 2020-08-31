import M from "materialize-css"
import { languageName } from "../App/Language"

const action = "toggleLanguage(); M.Toast.dismissAll();"
const colorText = "amber-text text-accent-2"
const classes = `languageToast ${colorText}`

const showLanguageToast = (language: languageName) => {
  const html = `
      <div onclick="${action}">
        ${language === "english" ? "¿Cambiar idioma?" : "Change language?"}
      </div>`

  M.toast({ html, classes, displayLength: 6000 })
}

export default showLanguageToast
