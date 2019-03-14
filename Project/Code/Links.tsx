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
  const handleClick =
    props.link !== ""
      ? () => window.open(props.link, "_blank")
      : () => navigateTo(document.getElementById(props.text))
  return (
    <div
      onClick={handleClick}
      className={"card-panel hoverable white " + Styles.GridElement}
      style={{ backgroundImage: `url('${props.src}')`, cursor: "pointer" }}
    />
  )
}

const Links: FunctionComponent = () => {
  const language = useContext(LanguageContext)
  if (language.name !== "English") console.log("Aaaaa")

  return (
    <div className={`center-align ${Styles.Container}`}>
      <div className={Styles.GridLinks}>
        <SectionLink text={"Projects"} link={""} src={"Assets/Links/LinksProjects.png"} />
        <SectionLink text={"Programs"} link={""} src={"Assets/Links/LinksPrograms.png"} />
        <SectionLink text={"Books"} link={""} src={"Assets/Links/LinksBooks.png"} />
        <SectionLink
          text={"Education"}
          link={"https://soyoscarrh.github.io/Resume.pdf"}
          src={"Assets/Links/LinksEdu.png"}
        />
        <SectionLink
          text={"Interests"}
          link={"https://twitter.com/SoyOscarRH"}
          src={"Assets/Links/LinksInterests.png"}
        />
      </div>
    </div>
  )
}

export default Links
