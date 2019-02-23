import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react"
import M from "materialize-css"

import { LanguageContext, languages, toogleLanguages } from "../App"
import NavigationMenu from "./NavigationMenu"
import SideMenu from "./SideMenu"

export const LanguageHeaderContext = React.createContext<
  [languages, toogleLanguages]
>(["English", () => {}])

export const SidenavMaterialCSSContext = React.createContext<M.Sidenav | null>(
  null
)

const AppHeader: FunctionComponent = () => {
  const [language, toggleLanguage] = useContext(LanguageContext)
  const [SidenavMaterialCSS, setSideNav] = useState<M.Sidenav | null>(null)

  const toggleLanguageAndCloseSidenav = () => {
    setTimeout(() => SidenavMaterialCSS && SidenavMaterialCSS.close(), 500)
    toggleLanguage()
  }
  const languageContext = [language, toggleLanguageAndCloseSidenav] as [
    languages,
    () => void
  ]
  useEffect(() => {
    const elementNode = document.getElementById("SideBarID")
    if (elementNode)
      setSideNav(M.Sidenav.init(elementNode, { draggable: true, edge: "left" }))
  }, [])

  return (
    <LanguageHeaderContext.Provider value={languageContext}>
      <SidenavMaterialCSSContext.Provider value={SidenavMaterialCSS}>
        <NavigationMenu />
        <SideMenu />
      </SidenavMaterialCSSContext.Provider>
    </LanguageHeaderContext.Provider>
  )
}

export default AppHeader
