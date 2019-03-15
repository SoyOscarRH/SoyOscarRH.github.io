import React, { FunctionComponent, useContext } from "react"
import * as Styles from "./Card/Styles.css"
import { navigateTo } from "./AppHeader"
import { LanguageContext } from "./Helpers/Language"

interface SectionLinkProps {
  text: string
  src: string
  link: string
}

const SectionLink: FunctionComponent<SectionLinkProps> = props => {
  const language = useContext(LanguageContext)
  const backgroundImage = `url('${props.src + ["", "ES"][language.index] + ".png"}')`
  const handleClick =
    props.link !== ""
      ? () => window.open(props.link, "_blank")
      : () => navigateTo(document.getElementById(props.text))
  return (
    <div
      onClick={handleClick}
      className={"card-panel hoverable white " + Styles.GridElement}
      style={{ backgroundImage, cursor: "pointer" }}
    />
  )
}

const Links: FunctionComponent = () => {
  return (
    <div className={`center-align ${Styles.Container}`}>
      <div className={Styles.GridLinks}>
        <SectionLink text={"Projects"} link={""} src={"Assets/Links/LinksProjects"} />
        <SectionLink text={"Programs"} link={""} src={"Assets/Links/LinksPrograms"} />
        <SectionLink text={"Books"} link={""} src={"Assets/Links/LinksBooks"} />
        <SectionLink
          text={"Education"}
          link={"https://soyoscarrh.github.io/Resume.pdf"}
          src={"Assets/Links/LinksEdu"}
        />
        <SectionLink
          text={"Interests"}
          link={"https://twitter.com/SoyOscarRH"}
          src={"Assets/Links/LinksInterests"}
        />
      </div>
    </div>
  )
}

export default Links
