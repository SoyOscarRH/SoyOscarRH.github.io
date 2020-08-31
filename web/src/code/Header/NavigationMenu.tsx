import React, { FunctionComponent } from "react"
import navigateTo from "../Helpers/navigateTo"

import Styles from "./Styles.module.css"

const goToTop = () => navigateTo(document.getElementById("start"))


const NavigationMenu: FunctionComponent = () => (
  <div className={"navbar-fixed " + Styles.Header}>
    <nav className={Styles.Nav} style={{backgroundColor: "#263238"}}>
      <div className="nav-wrapper">
        <span className={Styles.Title}>
          <b>Soy</b>Oscar<b>RH</b>
        </span>

        <span data-target="SideBarID" className={"sidenav-trigger show-on-large " + Styles.Icon}>
          <i className="material-icons white-text">menu</i>
        </span>

        <span onClick={goToTop} className={"right " + Styles.Home}>
          <img alt="go-home" className={Styles.MyIcon} src="Images/Icons/LogoWhite.png" />
        </span>
      </div>
    </nav>
  </div>
)

export default NavigationMenu
