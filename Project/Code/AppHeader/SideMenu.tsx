import React, { FunctionComponent, useContext } from "react"
import { ProjectsAndPrograms, Books, LanguageOption } from "../PageData"
import { LanguageHeaderContext } from "./index"
import { LanguageType } from "../App"

type linkName = string
type linkURL = string
type Link = [linkName, linkURL]

/*
 * ===========================================
 * ======       GET THE DATA       ===========
 * ===========================================
 */

const BooksNames = Object.entries(Books).map(
  ([name, data]) => [data.SimpleTitle, name] as [LanguageOption<string>, string]
)

const ProjectsNames: Array<Link> = []
const ProgramsNames: Array<Link> = []

Object.entries(ProjectsAndPrograms)
  .map(([name, data]) => [name, data.Type] as [string, "Project" | "Program"])
  .forEach(([name, type]) => {
    switch (type) {
      case "Project":
        ProjectsNames.push([name, name])
        break
      case "Program":
        ProgramsNames.push([name, name])
        break
    }
  })

interface Section {
  Title: string
  Links: Array<Link>
}

interface SideMenuSections {
  AboutMe: LanguageOption<Section>
  Projects: LanguageOption<Section>
  Programs: LanguageOption<Section>
  Books: LanguageOption<Section>
}

const SideMenuData: SideMenuSections = {
  AboutMe: {
    Spanish: {
      Title: "Personal",
      Links: [["Sobre Mi", "AboutMe"], ["Curriculum", "AboutMe"]],
    },
    English: {
      Title: "Personal",
      Links: [["About Me", "AboutMe"], ["Curriculum", "AboutMe"]],
    },
  },
  Projects: {
    Spanish: { Title: "Proyectos", Links: ProjectsNames },
    English: { Title: "Projects", Links: ProjectsNames },
  },
  Programs: {
    Spanish: { Title: "Ideas Interesantes", Links: ProgramsNames },
    English: { Title: "Cool Programs", Links: ProgramsNames },
  },
  Books: {
    Spanish: {
      Title: "Libros",
      Links: BooksNames.map(
        Element => [Element[0].Spanish, Element[1]] as Link
      ),
    },
    English: {
      Title: "Books",
      Links: BooksNames.map(
        Element => [Element[0].English, Element[1]] as Link
      ),
    },
  },
}

/*
 * ===========================================
 * ======       COMPONENTS         ===========
 * ===========================================
 */

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

const ToggleLanguage: FunctionComponent<{
  language: LanguageType
  newLanguage: LanguageType
  SpanishLanguageName: string
  EnglishLanguageName: string
  setLanguage: (newLanguage: LanguageType) => void
}> = props => (
  <React.Fragment>
    <a className="subheader center">
      {props.language === "English" ? "Language" : "Lenguaje"}
    </a>
    <div className="switch center">
      <label>
        {props.SpanishLanguageName}
        <input
          type="checkbox"
          onChange={() => props.setLanguage(props.newLanguage)}
          checked={props.language === "English"}
        />
        <span className="lever" />
        {props.EnglishLanguageName}
      </label>
    </div>
  </React.Fragment>
)

const SideMenuSection: FunctionComponent<{
  language: LanguageType
  Section: [string, any]
}> = ({ language, Section }) => {
  const sectionName = Section[0],
    SideElementSection = Section[1][language]

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
        <a className="subheader">{SideElementSection.Title}</a>
      </li>

      {SideElementSection.Links.map((Link: [string, string]) => (
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
  const [language, setLanguage] = useContext(LanguageHeaderContext)

  const EnglishLanguageName = language === "English" ? "English" : "Inglés"
  const SpanishLanguageName = language === "English" ? "Spanish" : "Español"
  const newLanguage: LanguageType =
    language === "English" ? "Spanish" : "English"

  return (
    <ul id="SideBarID" className="sidenav">
      <li className="center">
        <SoyOscarRHLogo baseColor="#1f3c88" accentColor="#070d59" />
      </li>

      <li>
        <LinksToSocialMedia />
      </li>

      <li className="container">
        <ToggleLanguage
          {...{
            language,
            newLanguage,
            setLanguage,
            SpanishLanguageName,
            EnglishLanguageName,
          }}
        />
      </li>

      <li>
        <div className="divider" />
      </li>

      {Object.entries(SideMenuData).map(Element => (
        <SideMenuSection
          key={Element[0]}
          language={language}
          Section={Element}
        />
      ))}

      <br />
      <br />
      <br />
      <br />
      <br />
    </ul>
  )
}

export default SideMenu
