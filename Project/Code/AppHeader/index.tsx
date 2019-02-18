import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react"
import M from "materialize-css"

import NavigationMenu from "./NavigationMenu"
import SideMenu from "./SideMenu"
import { LanguageContext } from "../App"

const AppHeader: FunctionComponent = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  const [SidenavMaterialCSS, setSideNav] = useState<M.Sidenav | null>(null)
  const setLanguageAndCloseSidenav = () => {
    setLanguage()
    setTimeout(() => SidenavMaterialCSS && SidenavMaterialCSS.close(), 500)
  }

  useEffect(() => {
    const elementNode = document.getElementById("SideBarID")!
    setSideNav(M.Sidenav.init(elementNode, { draggable: true, edge: "left" }))
  }, [])

  return (
    <React.Fragment>
      <NavigationMenu />
      <SideMenu
        manageChangeLanguage={setLanguageAndCloseSidenav}
        Language={language}
      />
    </React.Fragment>
  )
}

export default AppHeader
