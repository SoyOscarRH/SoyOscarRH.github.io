import React from "react"
import {Project} from "./PageData/ProjectsAndPrograms"
import {Book} from "./PageData/Books"

import * as Styles from "./Styles.css"

const CardActionStyle = {marginBottom: "0.1rem", cursor: "pointer"}
const CardStyle       = {height: "100%", display: "grid", gridTemplateRows: "min-content auto min-content"}
const BottomPart      = {borderCollapse: "collapse" as "collapse", display: "grid", gridTemplateRows: "auto auto"}
const TagsPart        = {margin: "16px", marginTop: "0rem", textAlign: "left" as "left"}

interface Topic {
    Name: string,
    SubTopics: Array<string>
}

interface ImageIconProps {
	imageName: string,
	title: string | JSX.Element,
	linkToProject: string,
	color: string
	tooltip: string
} 

const ImageIcon: React.StatelessComponent<ImageIconProps> = props => (
	<React.Fragment>
		<img 
			className="materialboxed lazy" 
			data-src  = {props.imageName}
			src       = {"Assets/Blank.png"}
		/>

		<span className="card-title blue-grey-text text-darken-4">
			{props.title}
		</span>

		<a 
			className     = {`tooltipped btn-floating btn-large halfway-fab ${props.color}`}
			href          = {props.linkToProject}
			style         = {{padding: "3.5px 4px 4px 4px"}}
			data-position = "top"
			data-tooltip  = {props.tooltip}
			target        = "_blank">
			<img src="Assets/Icons/githubMini.png"/>
		</a>

	</React.Fragment>
)

interface ListInCardProps {
	Language: "Spanish" | "English"
	Topics: Array<Topic>
}

const ListInCard: React.StatelessComponent<ListInCardProps> = props => (
	<React.Fragment>
		<span className="card-title grey-text text-darken-4 valign-wrapper">
			{props.Language === "English"? "Topics in the Book": "Temario del Libro"}
			<i className="material-icons right">close</i>
		</span>

		<br />
		<br />

		<div>
			<ul className="collapsible popout left-align">
			{
				props.Topics.map( (Topic, index) => (
					<li key={`${index} Collapsible`}>
						
						<div className="collapsible-header">
							{Topic.Name}
						</div>
						
						<div className="collapsible-body">
							<ul style={{fontSize: "0.8rem"}} className="browser-default">
								{
									Topic.SubTopics.map( (item, subindex) => 
										<li key={`${Topic.Name} ${subindex}`}>
											{item}
										</li> 
									)
								}
							</ul>
						</div>

					</li>	
				))
			}
			</ul>
		</div>
	</React.Fragment>
)

const ShowTags: React.StatelessComponent<{tags: Array<string>}> = props => (
	<div style={TagsPart}>
		{
			props.tags.map( tag => 
				<div key={tag} className="chip" style={{fontSize: '0.85rem'}}>
					{tag}
				</div>
			)
		}
	</div>
)


export function ProjectCard(ProjectName: string, Project: Project, Language: "English" | "Spanish") {
	return (
		<div className={Styles.GridElement} key={ProjectName} id={ProjectName}>
			<div className="card hoverable" style={CardStyle}>
				
				<div className="card-image">
					<ImageIcon 
						imageName     = {`Assets/Projects/${ProjectName}.png`}
						title         = {Project.Title} 
						linkToProject = {Project.LinkToProject}
						color         = {Project.Color}
						tooltip       = {Language === "English"? "See it in Github": "Ver el proyecto en Github"}
					/>
				</div>
				
				<div className="card-content left-align" style={{padding: "16px"}}>
					<br />
					<p className="blue-grey-text text-darken-3" style={{padding: "0.6rem", textAlign: "justify"}}>
						{Project[Language]}
					</p>
				</div>

				<div style={BottomPart}>
					<ShowTags tags={Project.Topics[Language]}/>
					
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

export function BookCard(BookName: string, Book: Book, Language: "English" | "Spanish") {
	return (
		<div className={Styles.GridElement} key={BookName} id={BookName}>
			<div className="card hoverable" style={CardStyle}>

				<div className="card-reveal blue-grey-text text-darken-3">
					<ListInCard Language={Language} Topics={Book.Topics[Language]}/>
				</div>
				
				<div className="card-image">
					<ImageIcon 
						imageName     = {`Assets/Books/${BookName}.png`}
						title         = {Book.Title[Language]} 
						linkToProject = {Book.LinkToProject}
						color         = {Book.Color}
						tooltip       = {Language === "English"? "See it in Github": "Ver el proyecto en Github"}
					/>
				</div>

				<div className="card-content left-align" style={{padding: "16px"}}>
					<br />
					
					<p className="blue-grey-text text-darken-3" style={{padding: "0.6rem", textAlign: "justify"}}>
						{Book.Intro[Language]}
					</p>

					{
						Book.CoAuthors != ""? 
						(
							<React.Fragment>
								<br />
								<span className="blue-grey-text text-darken-3">
									{
										Language === "English"? 
										"Written in collaboration with: ": 
										"Escrito en colaboración con: "
									}
									{Book.CoAuthors}
								</span>
								<br />
							</React.Fragment>
						)
						: 
						null
					}

				</div>

				<div style={BottomPart}>
					<ShowTags tags={Book.Tags[Language]}/>
					
					<div className="card-action" style={CardActionStyle}>
						<a className="activator" style={{cursor: "pointer"}}>
							{Language === "English"? "TOPICS": "TEMARIO"}
						</a>
						<a target="_blank" href={Book.LinkToReadOnline}>
							{Language === "English"? "READ ONLINE": "LEE EN LÍNEA"}
						</a>
					</div>
				</div>

			</div>
		</div>
	)
}