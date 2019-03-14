import React, { FunctionComponent, useContext } from "react"
import { SidenavMaterialCSSContext, navigateTo } from "../AppHeader"
import { LanguageContext, ToggleLanguageContext } from "../Helpers/Language"

import getSections, { Section } from "../PageData/SideMenuData"

const SideMenu: FunctionComponent = () => {
  const language = useContext(LanguageContext)
  const Sections = getSections(language)

  const SideMenuSections = Object.entries(Sections).map(([sectionName, SectionData]) => (
    <SideMenuSection key={sectionName} sectionName={sectionName} Section={SectionData} />
  ))

  return (
    <ul id="SideBarID" className="sidenav">
      <li className="center">
        <SoyOscarRHLogo baseColor={"#1f3c88"} accentColor={"#070d59"} />
      </li>

      <li>
        <div className="row">
          <div className="col s8 offset-s2">
            <LinksToSocialMedia />
          </div>
        </div>
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

const SoyOscarRHLogo: FunctionComponent<{
  baseColor: string
  accentColor: string
}> = ({ accentColor, baseColor }) => {
  const accentStyle = { color: accentColor }
  const SoyOscarRHLogoStyle = {
    fontWeight: 300,
    fontSize: "2.3rem",
    margin: "2.5rem",
    color: baseColor,
    fontFamily: "Roboto Mono",
  }

  return (
    <h5 style={SoyOscarRHLogoStyle}>
      @<b style={accentStyle}>Soy</b>Oscar<b style={accentStyle}>RH</b>
    </h5>
  )
}

export const LinksToSocialMedia: React.FunctionComponent = () => (
  <div className="row">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/SoyOscarRH">
      <img className="col s3" src="Assets/Icons/github.png" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://compilandoconocimiento.com/">
      <img className="col s3" src="Assets/Icons/wordpress.png" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/SoyOscarRH">
      <img className="col s3" src="Assets/Icons/twitter.png" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://telegram.me/SoyOscarRH">
      <img className="col s3" src="Assets/Icons/telegram.png" />
    </a>
  </div>
)

const ToggleLanguage: FunctionComponent = () => {
  const { name, index } = useContext(LanguageContext)
  const toggle = useContext(ToggleLanguageContext)

  return (
    <React.Fragment>
      <a className="subheader center">{["Language", "Lenguaje"][index]}</a>
      <div className="switch center">
        <label>
          {["Spanish", "Español"][index]}
          <input type="checkbox" onChange={toggle} checked={name === "English"} />
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

  const SectionRows = Section.Links.map(([name, link]) => {
    const onClick = () => {
      closeSideMenu()
      navigateTo(document.getElementById(link))
    }

    return (
      <li key={name}>
        <a className="waves-effect" onClick={onClick}>
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
