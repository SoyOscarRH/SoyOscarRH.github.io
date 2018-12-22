import React from "react"
import M from "materialize-css"
import {Projects as ProjectsInterface, Project} from "./PageData/ProjectsAndPrograms"

import * as Styles from "./Styles.css"

interface ProjectsProps {
	Language: "English" | "Spanish"
	Projects: ProjectsInterface
}

const CardActionStyle = {marginBottom: "0.1rem", cursor: "pointer"}
const CardStyle = {height: "100%", display: "grid", gridTemplateRows: "min-content auto min-content"}
const BottomPart = {borderCollapse: "collapse" as "collapse", display: "grid", gridTemplateRows: "auto auto"}

function CreateACard(ProjectName: string, Project: Project, Language: "English" | "Spanish") {
	return (
		<div className={Styles.GridElement} key={ProjectName} id={ProjectName}>
			<div className="card" style={CardStyle}>
				
				<div className="card-image">
					
					<img className="materialboxed" src={`Assets/Projects/${ProjectName}.png`} />
					<span className="card-title blue-grey-text text-darken-4">
						{Project.Title}
					</span>
					
					<a 
						className    = {`tooltipped btn-floating btn-large halfway-fab ${Project.Color}`}
						href         = {Project.LinkToProject}
						data-position= "top"
						data-tooltip = {Language === "English"? "See it in Github": "Ver el proyecto en Github"}
						target       = "_blank">
						<img src="Assets/Icons/githubMini.png"/>
					</a>

				</div>
				
				<div className="card-content left-align" style={{padding: "16px"}}>
					<br />
					<p className="blue-grey-text text-darken-3">
						{Project[Language]}
					</p>
				</div>

				<div style={BottomPart}>

					<div style={{margin: "16px", marginTop: "0rem"}} className="left-align">
					{
						Project.Topics[Language].map( Element => 
							<div key={Element} className="chip" style={{fontSize: '0.85rem'}}>
								{Element}
							</div>
						)
					}
					</div>
					
					<div className="card-action" style={(Project.CheckOut)? CardActionStyle : {display: "none"}}>
						<a className="activator" href={Project.CheckOut} target="_blank">
							{Language === "English"? "Check out": "Velo tu mismo"}
						</a>
					</div>

				</div>

			</div>
		</div>
	)
}







function CardsByType(Projects: ProjectsInterface, Language: "Spanish" | "English", Type: "Project" | "Program") {
	return Object.entries(Projects)
		.filter( ([_, Project])    => Project.Type === Type)
	   	.map( ([Name, Project]) => CreateACard(Name, Project, Language) )
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

	return (
		<div className="row center-align">
			<div className="col s10 offset-s1">
				
				<br />
				<br />
				<h4 className="blue-grey-text text-darken-3">
					<b>
						{props.Language === "English"? "Projects": "Proyectos"}
					</b>
				</h4>
				
				<br />

				<div className={Styles.Grid}>
					{ProjectsCards}
				</div>

				<br />
				<br />

				<h4 className="blue-grey-text text-darken-3">
					<b>
						{props.Language === "English"? "Cool Programs": <div><b>Ideas </b>Interesantes </div>}
					</b>
				</h4>
				
				<br />

				<div className={Styles.Grid}>
					{ProgramsCards}
				</div>

			</div>
		</div>
	)
}