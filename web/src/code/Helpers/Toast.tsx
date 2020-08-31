import { useEffect, useRef } from "react"
import M from "materialize-css"
import { languageName } from "../App/Language"
import styles from "../App/GeneralStyles.module.css"

const useShowToast = (language: languageName) => {
  const showed_toast = useRef(false)

  useEffect(() => {
    const showToast = () => {
      showed_toast.current = true
      const action = "toggleLanguage(); M.Toast.dismissAll();"
      const toastHTML = `
      <div class=${styles.Toast} onclick="${action}">
        ${language === "english" ? "¿Cambiar idioma?" : "Change language?"}
      </div>`

      M.toast({ html: toastHTML, classes: 'rounded', displayLength: 5000})
    }

    if (!showed_toast.current) setTimeout(showToast, 3000)
  }, [language])
}

export default useShowToast
