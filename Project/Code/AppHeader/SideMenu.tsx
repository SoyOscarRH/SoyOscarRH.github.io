import React, { FunctionComponent, useContext } from "react"
import { LanguageHeaderContext } from "../AppHeader"
import {SidenavMaterialCSSContext} from "../AppHeader"

import getSections, { Section } from "../PageData/SideMenuData"

const LinksToSocialMedia: React.FunctionComponent = () => (
  <div className="row">
    <div className="col s8 offset-s2">
      <div className="row">
        <a target="_blank" href="https://github.com/SoyOscarRH">
          <img className="col s3" src="Assets/Icons/github.png" />
        </a>
        <a target="_blank" href="http://compilandoconocimiento.com/">
          <img className="col s3" src="Assets/Icons/wordpress.png" />
        </a>
        <a target="_blank" href="http://twitter.com/SoyOscarRH">
          <img className="col s3" src="Assets/Icons/twitter.png" />
        </a>
        <a target="_blank" href="https://telegram.me/SoyOscarRH">
          <img className="col s3" src="Assets/Icons/telegram.png" />
        </a>
      </div>
    </div>
  </div>
)

const SoyOscarRHLogo: FunctionComponent<{
  baseColor: string
  accentColor: string
}> = ({ accentColor, baseColor }) => {
  const someStyle = { color: accentColor }
  return (
    <h5
      style={{
        fontWeight: 300,
        fontSize: "2.3rem",
        margin: "2.5rem",
        color: baseColor,
        fontFamily: "Roboto Mono",
      }}
    >
      <b style={someStyle}>Soy</b>Oscar<b style={someStyle}>RH</b>
    </h5>
  )
}

const ToggleLanguage: FunctionComponent = () => {
  const [language, toggleLanguage] = useContext(LanguageHeaderContext)
  const index = language === "English" ? 0 : 1
  const englishLanguageName = ["English", "Inglés"][index]
  const spanishLanguageName = ["Spanish", "Español"][index]

  return (
    <React.Fragment>
      <a className="subheader center">
        {language === "English" ? "Language" : "Lenguaje"}
      </a>
      <div className="switch center">
        <label>
          {spanishLanguageName}
          <input
            type="checkbox"
            onChange={toggleLanguage}
            checked={language === "English"}
          />
          <span className="lever" />
          {englishLanguageName}
        </label>
      </div>
    </React.Fragment>
  )
}

const SideMenuSection: FunctionComponent<{
  sectionName: string
  Section: Section
}> = ({ sectionName, Section }) => {
  const [iconName, iconColor] = Section.Icon
  const iconClasses = `tiny material-icons ${iconColor}-text text-darken-2`

  const SidenavMaterialCSS = useContext(SidenavMaterialCSSContext)
  const closeSideMenu = () => SidenavMaterialCSS && SidenavMaterialCSS.close()

  const styleClass = {
    display: "block",
    margin: "0 0 0 0.5rem",
    fontSize: "1.25rem",
    opacity: 0.9,
  }

  const SectionRows = Section.Links.map(([name, link]) => (
    <li key={name}>
      <a className="waves-effect" href={`#${link}`} onClick={closeSideMenu}>
        <i className={iconClasses} style={styleClass}>
          {iconName}
        </i>
        &nbsp;
        {name}
      </a>
    </li>
  ))

  return (
    <React.Fragment key={`Type ${sectionName}`}>
      <li>
        <a className="subheader">{Section.Title}</a>
      </li>
      {SectionRows}
    </React.Fragment>
  )
}

const SideMenu: FunctionComponent = () => {
  const [language] = useContext(LanguageHeaderContext)
  const Sections = getSections(language)

  const SideMenuSections = Object.entries(Sections).map(
    ([sectionName, SectionData]) => (
      <SideMenuSection
        key={sectionName}
        sectionName={sectionName}
        Section={SectionData}
      />
    )
  )

  return (
    <ul id="SideBarID" className="sidenav">
      <li className="center">
        <SoyOscarRHLogo baseColor={"#1f3c88"} accentColor={"#070d59"} />
      </li>

      <li>
        <LinksToSocialMedia />
      </li>

      <li className="container">
        <ToggleLanguage />
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

export default SideMenu
