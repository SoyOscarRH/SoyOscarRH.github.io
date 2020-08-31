import Toastify from "./Toastify"
import Styles from "../App/GeneralStyles.module.css"
import { Language } from "../App/Language"

const style = { duration: 5000, gravity: "top", position: "right", backgroundColor: "#0f3443" }

const showToast = (language: Language, toggleLanguage: () => void) => {
  let hideToast = () => {}
  const onClick = () => {
    toggleLanguage()
    hideToast()
  }

  const options = { className: Styles.Toast, onClick, stopOnFocus: true }
  const text = { English: "¿Cambiar idioma?", Spanish: "Change language?" }[language.name]

  const toast = Toastify({ ...style, ...options, text })
  // @ts-ignore
  hideToast = () => toast.hideToast()

  // @ts-ignore
  toast.showToast()
}

export default showToast
