// =====================================================================
// ============                 IMPORTS            =====================
// =====================================================================
import React from "react"

// =================================================================
// ==================     PROJECT COMPONENT      ===================
// =================================================================
export default function Projects(props) {

	document.addEventListener('DOMContentLoaded', function() {
		const ElementsBox = document.querySelectorAll('.materialboxed')
		const ElementsToolTips = document.querySelectorAll('.tooltipped');
		
		M.Materialbox.init(ElementsBox, {})
		M.Tooltip.init(ElementsToolTips, {})
	})


	let ProjectsCards = []
	
	Object.entries(props.Data).forEach(
		([Name, Data]) => {

			ProjectsCards.push(
				<div className="col s12 m6 l6" key={Name}>
					<div className="card">
						
						<div className="card-image">
							
							<img className="materialboxed" src={`Assets/Projects/${Name}.png`} />
							<span className="card-title blue-grey-text text-darken-4">
								{Data.Title}
							</span>
							<a 
								className    = {`tooltipped btn-floating btn-large halfway-fab waves-effect waves-light ${Data.Color}`}
								href         = {Data.LinkToProject}
								data-position= "top"
								data-tooltip = {props.Language === "English"? "See it in Github": "Ver el proyecto en Github"}
								target       = "_blank">
								<img src="Assets/githubMini.png"/>
							</a>

						</div>
						
						<div className="card-content left-align">
							<br />
							
							<p className="blue-grey-text text-darken-3">
								{Data[props.Language]}
							</p>

							<br />
							<br />

							{
								Data.Topics.map((Element) => {
									return (<div key={Element} className="chip" style={{fontSize: '0.85rem'}}>{Element}</div>)
								})
							}

						</div>

					</div>
				</div>
			)

		}
	)

	return (
		<div className="row center-align">
			<div className="col s10 offset-s1">

				<h4 className="blue-grey-text text-darken-4">
					<b>
						{props.Language === "English"? "Projects": "Proyectos"}
					</b>
				</h4>
				
				<br />
				<br />

				<div className="row">
					{ProjectsCards}
				</div>

			</div>
		</div>
	)
 }