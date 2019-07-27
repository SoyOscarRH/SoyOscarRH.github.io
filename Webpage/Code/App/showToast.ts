import Toastify from "./Toastify"
import * as Styles from "./GeneralStyles.css"
import { Language } from "./Language"

const style = { duration: 80000, gravity: "top", position: "right", backgroundColor: "#0f3443" }

const showToast = (language: Language, toggleLanguage: () => void) => {
  let hideToast = () => {}
  const onClick = () => {
    toggleLanguage(), hideToast()
  }

  const options = { className: Styles.Toast, onClick, stopOnFocus: true }
  const text = { English: "¿Cambiar idioma?", Spanish: "Change language?" }[language.name]

  const toast = Toastify({ ...style, ...options, text })
  hideToast = () => toast.hideToast()
  toast.showToast()
}

export default showToast
