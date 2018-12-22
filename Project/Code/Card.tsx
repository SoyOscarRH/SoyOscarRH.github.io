import React from "react"
import {Project} from "./PageData/ProjectsAndPrograms"

import * as Styles from "./Styles.css"


const CardActionStyle = {marginBottom: "0.1rem", cursor: "pointer"}
const CardStyle = {height: "100%", display: "grid", gridTemplateRows: "min-content auto min-content"}
const BottomPart = {borderCollapse: "collapse" as "collapse", display: "grid", gridTemplateRows: "auto auto"}

export default function Card(ProjectName: string, Project: Project, Language: "English" | "Spanish") {
	return (
		<div className={Styles.GridElement} key={ProjectName} id={ProjectName}>
			<div className="card hoverable" style={CardStyle}>
				
				<div className="card-image">

					<img 
						className="materialboxed lazy" 
						data-src  = {`Assets/Projects/${ProjectName}.png`}
						src       = {"Assets/Blank.png"}
					/>

					<span className="card-title blue-grey-text text-darken-4">
						{Project.Title}
					</span>
					
					<a 
						className     = {`tooltipped btn-floating btn-large halfway-fab ${Project.Color}`}
						href          = {Project.LinkToProject}
						style         = {{padding: "3.5px 4px 4px 4px"}}
						data-position = "top"
						data-tooltip  = {Language === "English"? "See it in Github": "Ver el proyecto en Github"}
						target        = "_blank">
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
