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

        <a data-target="SideBarID" className={"sidenav-trigger show-on-large " + Styles.Icon}>
          <i className="material-icons white-text">menu</i>
        </a>

        <a onClick={goToTop} className={"right " + Styles.Home}>
          <img className={Styles.MyIcon} src="Images/Icons/LogoWhite.png" />
        </a>
      </div>
    </nav>
  </div>
)

export default NavigationMenu
