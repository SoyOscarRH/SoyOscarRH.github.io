import React, { FunctionComponent } from "react"
import * as Styles from "./Card/Styles.css"

interface SectionLinkProps {
  text: string
  src: string
}
const SectionLink: FunctionComponent<SectionLinkProps> = props => {
  const url = `url('${props.src}')`
  console.log(url)
  console.log(props.src)
  return (
    <div
      className={"card-panel teal " + Styles.GridElement}
      style={{
        textAlign: "initial",
        backgroundImage: url,
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    />
  )
}

const Links: FunctionComponent = () => {
  return (
    <div className={`center-align ${Styles.Container}`}>
      <div className={Styles.GridLinks}>
        <SectionLink text={"Projects"} src={"Assets/Links/LinksProjects.png"} />
        <SectionLink text={"Programs"} src={"Assets/Links/LinksPrograms.png"} />
        <SectionLink text={"Books"} src={"Assets/Links/LinksBooks.png"} />
        <SectionLink text={"Education"} src={"Assets/Links/LinksEdu.png"} />
        <SectionLink text={"Interests"} src={"Assets/Links/LinksInterests.png"} />
      </div>
    </div>
  )
}

export default Links
