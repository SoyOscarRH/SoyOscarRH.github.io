import React, { FunctionComponent, useContext, useState, useEffect } from "react"
import M from "materialize-css"

import { ToggleLanguageContext } from "../Helpers/Language"
import NavigationMenu from "./NavigationMenu"
import SideMenu from "./SideMenu"

export const SidenavMaterialCSSContext = React.createContext<M.Sidenav | null>(null)

export const navigateTo = (element: HTMLElement | null) => {
  if (!element) return

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

const AppHeader: FunctionComponent = () => {
  const [SidenavMaterialCSS, setSideNav] = useState<M.Sidenav | null>(null)
  useEffect(() => {
    const elementNode = document.getElementById("SideBarID")
    if (elementNode) setSideNav(M.Sidenav.init(elementNode, { draggable: true, edge: "left" }))
  }, [])

  const toggleLanguage = useContext(ToggleLanguageContext)
  const toggleLanguageAndCloseSidenav = () => {
    setTimeout(() => SidenavMaterialCSS && SidenavMaterialCSS.close(), 500)
    toggleLanguage()
  }

  return (
    <ToggleLanguageContext.Provider value={toggleLanguageAndCloseSidenav}>
      <SidenavMaterialCSSContext.Provider value={SidenavMaterialCSS}>
        <NavigationMenu />
        <SideMenu />
      </SidenavMaterialCSSContext.Provider>
    </ToggleLanguageContext.Provider>
  )
}

export default AppHeader
