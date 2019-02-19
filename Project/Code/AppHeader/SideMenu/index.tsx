import React, { FunctionComponent, useContext } from "react"
import { LanguageHeaderContext } from "../../AppHeader"

import { SideMenuData } from "./MoreSimpleData"

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
  return (
    <React.Fragment>
      <a className="subheader center">
        {language === "English" ? "Language" : "Lenguaje"}
      </a>
      <div className="switch center">
        <label>
          {language === "English" ? "English" : "Inglés"}
          <input
            type="checkbox"
            onChange={toggleLanguage}
            checked={language === "English"}
          />
          <span className="lever" />
          {language === "English" ? "Spanish" : "Español"}
        </label>
      </div>
    </React.Fragment>
  )
}

const SideMenuSection: FunctionComponent<{
  sectionName: string
  Section: any
}> = ({ sectionName, Section }) => {

  console.log(Section)

  let data = ["art_track", "grey"]
  if (sectionName === "AboutMe") data = ["account_circle", "grey"]
  if (sectionName === "Projects") data = ["dashboard", "green"]
  if (sectionName === "Programs") data = ["description", "teal"]
  if (sectionName === "Books") data = ["book", "purple"]

  const styleClass = {
    display: "block",
    margin: "0 0 0 0.5rem",
    fontSize: "1.25rem",
    opacity: 0.9,
  }

  return (
    <React.Fragment key={`Type ${sectionName}`}>
      <li>
        <a className="subheader">{Section.Title}</a>
      </li>

      {Section.Links.map((Link: [string, string]) => (
        <li key={`Link ${Link[1]} ${Link[0]}`}>
          <a className="waves-effect" href={`#${Link[1]}`}>
            <i
              className={
                "tiny material-icons " + data[1] + "-text text-darken-2"
              }
              style={styleClass}
            >
              {data[0]}
            </i>
            &nbsp;
            {Link[0]}
          </a>
        </li>
      ))}
    </React.Fragment>
  )
}

const SideMenu: FunctionComponent = () => {
  const [language, ] = useContext(LanguageHeaderContext)

  const SideMenuSections = Object.entries(SideMenuData).map(
    ([sectionName, SectionData]) => (
      <SideMenuSection
        key={sectionName}
        sectionName={sectionName}
        Section={SectionData[language]}
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
