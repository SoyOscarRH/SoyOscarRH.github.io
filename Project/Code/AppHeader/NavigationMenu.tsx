import React, { FunctionComponent } from "react"
import { navigateTo } from "../AppHeader"

const goToTop = () => navigateTo(document.getElementById("start"))

const NavigationMenu: FunctionComponent = () => (
  <div className="navbar-fixed z-depth-1">
    <nav className="blue-grey darken-4 white-text center">
      <div className="nav-wrapper container">
        <div className="brand-logo" style={{ fontSize: "1.3rem" }}>
          <b>Soy</b>Oscar<b>RH</b>
        </div>

        <a
          data-target="SideBarID"
          className="sidenav-trigger show-on-large"
          style={{ cursor: "pointer" }}
        >
          <i className="material-icons white-text">menu</i>
        </a>

        <a onClick={goToTop} className="right" style={{ height: "100%", cursor: "pointer" }}>
          <img
            style={{ width: "2.2rem", verticalAlign: "middle" }}
            src="Assets/Icons/LogoWhite.png"
          />
        </a>
      </div>
    </nav>
  </div>
)

export default NavigationMenu
