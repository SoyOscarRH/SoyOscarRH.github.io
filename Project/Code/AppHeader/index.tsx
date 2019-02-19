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

const AppHeader: FunctionComponent = () => {
  const [language, toggleLanguage] = useContext(LanguageContext)
  const [SidenavMaterialCSS, setSideNav] = useState<M.Sidenav | null>(null)

  const toggleLanguageAndCloseSidenav = () => {
    setTimeout(() => SidenavMaterialCSS && SidenavMaterialCSS.close(), 500)
    toggleLanguage()
  }

  useEffect(() => {
    const elementNode = document.getElementById("SideBarID")
    if (elementNode)
      setSideNav(M.Sidenav.init(elementNode, { draggable: true, edge: "left" }))
  }, [])

  return (
    <LanguageHeaderContext.Provider
      value={[language, toggleLanguageAndCloseSidenav]}
    >
      <NavigationMenu />
      <SideMenu />
    </LanguageHeaderContext.Provider>
  )
}

export default AppHeader
