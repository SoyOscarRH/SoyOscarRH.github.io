import React, { FunctionComponent, useEffect } from "react"
import M from "materialize-css"

import { ProjectsI } from "../data/Projects"
import { ProgramsI } from "../data/Programs"
import ProjectsData from "../data/Projects"
import ProgramsData from "../data/Programs"

import Card from "./Card"

import { useCurrentLanguage } from "./App/Language"

import Styles from "./Card/Styles.module.css"

const ProjectsProgramsSection = () => {
  const language = useCurrentLanguage()

  useEffect(() => {
    const materialBoxes = document.querySelectorAll(".materialboxed")
    const elementsToolTips = document.querySelectorAll(".tooltipped")

    M.Materialbox.init(materialBoxes, {})
    M.Tooltip.init(elementsToolTips, {})
  }, [])

  const ProjectsTitle = language === "english" ? "Projects" : "Proyectos"
  const ProgramsTitle = language === "english" ? "Cool Programs" : "Ideas Interesantes"

  return (
    <section id="ProjectsAndPrograms" className={`center-align ${Styles.Container}`}>
      <ShowCards id="Projects" title={ProjectsTitle} Elements={ProjectsData} type={"Project"} />
      <br />
      <br />
      <ShowCards id="Programs" title={ProgramsTitle} Elements={ProgramsData} type={"Program"} />
    </section>
  )
}

const ShowCards: FunctionComponent<{
  title: string
  type: "Book" | "Program" | "Project"
  id: string
  Elements: ProjectsI | ProgramsI
}> = props => (
  <React.Fragment>
    <h4 className="blue-grey-text text-darken-3">
      <b>{props.title}</b>
    </h4>
    <br />

    <div className={Styles.Grid} id={props.id}>
      {Object.entries(props.Elements).map(([name, Element]) => (
        <Card key={name} name={name} Element={Element} type={props.type} />
      ))}
    </div>
  </React.Fragment>
)

export default ProjectsProgramsSection
