import React, { FunctionComponent, useContext, useState, useEffect, useCallback } from "react"
import navigateTo from "../Helpers/navigateTo"

import { LanguageContext } from "../App/Language"

import getSections, { Section } from "../PageData/SideMenuData"

import * as Styles from "./Styles.css"
import * as GeneralStyles from "../App/GeneralStyles.css"


const SideMenu: FunctionComponent<{ toggleLanguage: () => void }> = ({ toggleLanguage }) => {
  const language = useContext(LanguageContext)
  const Sections = getSections(language)

  const [Sidenav, setSideNav] = useState<M.Sidenav | null>(null)

  useEffect(() => {
    const elementNode = document.getElementById("SideBarID")
    if (elementNode) setSideNav(M.Sidenav.init(elementNode, { draggable: true, edge: "left" }))
  }, [])

  const close = useCallback(() => setTimeout(() => Sidenav && Sidenav.close(), 500), [Sidenav])

  const toggleLanguageAndCloseSidenav = () => {
    close()
    toggleLanguage()
  }

  const SideMenuSections = Object.entries(Sections).map(([sectionName, SectionData]) => (
    <SideMenuSection
      key={sectionName}
      sectionName={sectionName}
      Section={SectionData}
      close={close}
    />
  ))

  return (
    <ul id="SideBarID" className="sidenav">
      <li className="center">
        <SoyOscarRHLogo accentColor={"#070d59"} />
      </li>

      <li>
        <div className="row">
          <div className="col s8 offset-s2">
            <LinksToSocialMedia />
          </div>
        </div>
      </li>

      <li className="container">
        <ToggleLanguage toggleLanguage={toggleLanguageAndCloseSidenav} />
      </li>

      <li>
        <div className="divider" />
      </li>

      {SideMenuSections}

      <br />
      <br />
      <br />
      <br />
      <br />
    </ul>
  )
}

const SoyOscarRHLogo: FunctionComponent<{ accentColor: string }> = ({ accentColor }) => {
  const accentStyle = { color: accentColor }
  return (
    <h5 className={Styles.Logo}>
      @<b style={accentStyle}>Soy</b>Oscar<b style={accentStyle}>RH</b>
    </h5>
  )
}

export const LinksToSocialMedia: React.FunctionComponent = () => (
  <div className="row">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/SoyOscarRH">
      <img title="GitHub" className="col s3" src="Assets/Icons/github.png" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://compilandoconocimiento.com/">
      <img title="Wordpress" className="col s3" src="Assets/Icons/wordpress.png" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/SoyOscarRH">
      <img title="Twitter" className="col s3" src="Assets/Icons/twitter.png" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://telegram.me/SoyOscarRH">
      <img title="Telegram" className="col s3" src="Assets/Icons/telegram.png" />
    </a>
  </div>
)

const ToggleLanguage: FunctionComponent<{ toggleLanguage: () => void }> = ({ toggleLanguage }) => {
  const { name, index } = useContext(LanguageContext)

  return (
    <React.Fragment>
      <a className="subheader center">{["Language", "Lenguaje"][index]}</a>
      <div className="switch center">
        <label>
          {["Spanish", "Español"][index]}
          <input type="checkbox" onChange={toggleLanguage} checked={name === "English"} />
          <span className="lever" />
          {["English", "Inglés"][index]}
        </label>
      </div>
    </React.Fragment>
  )
}

const SideMenuSection: FunctionComponent<{
  sectionName: string
  Section: Section
  close: () => void
}> = ({ sectionName, Section, close }) => {
  const [iconName, iconColor] = Section.Icon
  const iconClasses = `tiny material-icons ${iconColor}-text text-darken-2`

  const styleClass = {
    display: "block",
    margin: "0 0 0 0.5rem",
    fontSize: "1.25rem",
    opacity: 0.9,
  }

  const SectionRows = Section.Links.map(([name, link]) => {
    const onClick = (event: React.MouseEvent) => {
      event.preventDefault()
      close()
      navigateTo(document.getElementById(link))
    }

    return (
      <li key={name}>
        <a className="waves-effect" href={"#" + link} onClick={onClick}>
          <i className={iconClasses} style={styleClass}>
            {iconName}
          </i>
          &nbsp;
          {name}
        </a>
      </li>
    )
  })

  return (
    <React.Fragment key={`Type ${sectionName}`}>
      <li>
        <a className="subheader">{Section.Title}</a>
      </li>
      {SectionRows}
    </React.Fragment>
  )
}

export default SideMenu
