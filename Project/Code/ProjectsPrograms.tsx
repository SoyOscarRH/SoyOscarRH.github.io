import React, { FunctionComponent, useContext, useEffect } from "react"
import M from "materialize-css"

import { ProjectsI } from "./PageData/Projects"
import { ProgramsI } from "./PageData/Programs"
import Card from "./Card"

import { LanguageContext } from "./App"

import * as Styles from "./Styles.css"

const ProjectsProgramsSection: FunctionComponent<{
  Projects: ProjectsI
  Programs: ProgramsI
}> = props => {
  const [language] = useContext(LanguageContext)
  const index = language === "English" ? 0 : 1

  useEffect(() => {
    const materialBoxes = document.querySelectorAll(".materialboxed")
    const elementsToolTips = document.querySelectorAll(".tooltipped")

    M.Materialbox.init(materialBoxes, {})
    M.Tooltip.init(elementsToolTips, {})
  }, [])

  const ProjectsTitle = ["Projects", "Proyectos"][index]
  const ProgramsTitle = ["Cool Programs", "Ideas Interesantes"][index]

  return (
    <div className={`center-align ${Styles.Container}`}>
      <ShowCards title={ProjectsTitle} Elements={props.Projects} />
      <br />
      <br />
      <ShowCards title={ProgramsTitle} Elements={props.Programs} />
    </div>
  )
}

const ShowCards: FunctionComponent<{
  title: string
  Elements: ProjectsI | ProgramsI
}> = props => (
  <React.Fragment>
    <h4 className="blue-grey-text text-darken-3">
      <b>{props.title}</b>
    </h4>
    <br />

    <div className={Styles.Grid}>
      {Object.entries(props.Elements).map(([name, Element]) => (
        <Card key={name} name={name} Element={Element} type={"ProjectProgram"} />
      ))}
    </div>
  </React.Fragment>
)

export default ProjectsProgramsSection
