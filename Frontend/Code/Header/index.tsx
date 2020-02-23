import React, { FunctionComponent as FC } from "react"

import NavigationMenu from "./NavigationMenu"
import SideMenu from "./SideMenu"

const Header: FC<{ toggleLanguage: () => void }> = props => (
  <header>
    <NavigationMenu />
    <SideMenu toggleLanguage={props.toggleLanguage} />
  </header>
)

export default Header
