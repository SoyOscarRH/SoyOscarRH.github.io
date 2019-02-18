import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react"
import M from "materialize-css"

import { LanguageContext, LanguageType, LanguageFunction } from "../App"
import NavigationMenu from "./NavigationMenu"
import SideMenu from "./SideMenu"

export const LanguageHeaderContext = React.createContext<
  [LanguageType, LanguageFunction]
>(["English", () => {}])

const AppHeader: FunctionComponent = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  const [SidenavMaterialCSS, setSideNav] = useState<M.Sidenav | null>(null)

  const setLanguageAndCloseSidenav = (newLanguage: LanguageType) => {
    setTimeout(() => SidenavMaterialCSS && SidenavMaterialCSS.close(), 500)
    setLanguage(newLanguage)
  }

  useEffect(() => {
    const elementNode = document.getElementById("SideBarID")!
    setSideNav(M.Sidenav.init(elementNode, { draggable: true, edge: "left" }))
  }, [])

  return (
    <LanguageHeaderContext.Provider value={[language, setLanguageAndCloseSidenav]}>
      <NavigationMenu />
      <SideMenu />
    </LanguageHeaderContext.Provider>
  )
}

export default AppHeader
