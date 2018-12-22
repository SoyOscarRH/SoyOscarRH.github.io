import React from "react"
import M from "materialize-css"

import {Projects as ProjectsInterface} from "./PageData/ProjectsAndPrograms"
import Card from "./Card"

import * as Styles from "./Styles.css"

function CardsByType(Projects: ProjectsInterface, Language: "Spanish" | "English", Type: "Project" | "Program") {
	return Object.entries(Projects)
		.filter( ([_, Project])    => Project.Type === Type)
	   	.map( ([Name, Project])    => Card(Name, Project, Language) )
}


interface ProjectsProps {
	Language: "English" | "Spanish"
	Projects: ProjectsInterface
}

export default function Projects(props: ProjectsProps) {

	document.addEventListener('DOMContentLoaded', function() {
		const materialBoxes = document.querySelectorAll('.materialboxed')
		const elementsToolTips = document.querySelectorAll('.tooltipped');
		
		M.Materialbox.init(materialBoxes, {})
		M.Tooltip.init(elementsToolTips, {})
	})

	const ProjectsCards = CardsByType(props.Projects, props.Language, "Project")
	const ProgramsCards = CardsByType(props.Projects, props.Language, "Program")

	const ProjectsTitle = props.Language === "English"? "Projects": "Proyectos"
	const ProgramsTitle = props.Language === "English"? "Cool Programs": <div><b>Ideas </b>Interesantes </div>

	return (
		<div className="center-align" style={{padding: "2rem"}}>

			<h4 className="blue-grey-text text-darken-3"><b>{ProjectsTitle}</b></h4>
			<br />

			<div className={Styles.Grid}>
				{ProjectsCards}
			</div>

			<br />
			<br />

			<h4 className="blue-grey-text text-darken-3"><b>{ProgramsTitle}</b></h4>
			<br />

			<div className={Styles.Grid}>
				{ProgramsCards}
			</div>

		</div>
	)
}