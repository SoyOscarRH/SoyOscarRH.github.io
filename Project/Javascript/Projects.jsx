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
	let ProgramsCards = []
	
	Object.entries(props.Data).forEach(
		([Name, Data]) => {

			console.log(Data.CheckOut)
			const CheckOut = (Data.CheckOut == undefined || Data.CheckOut == "")? null: (
				<div className="card-action">
					<a className="activator" style={{cursor: "pointer"}} href={Data.CheckOut} target="_blank">
						{props.Language === "English"? "Check out": "Velo tu mismo"}
					</a>
				</div>
			)

			const Card = (
				<div className="col s12 m6 l6" key={Name} id={Name}>
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
								Data.Topics[props.Language].map((Element) => {
									return (<div key={Element} className="chip" style={{fontSize: '0.85rem'}}>{Element}</div>)
								})
							}

						</div>

						{CheckOut}

					</div>
				</div>
			)

			if (Data.Type === "Project") ProjectsCards.push(Card)
			else ProgramsCards.push(Card)
		}
	)

	let ProjectsCardsWithRows = []
	for (let i = 0; i < ProjectsCards.length; i += 2) {
		const Card1 = ProjectsCards[i]
		const Card2 = (i + 1 == ProjectsCards.length)? null : ProjectsCards[i+1]

		ProjectsCardsWithRows.push(
			<div className="row" key={i}>
				{Card1}
				{Card2}
			</div>
		)
	}

	let ProgramsCardsWithRows = []
	for (let i = 0; i < ProgramsCards.length; i += 2) {
		const Card1 = ProgramsCards[i]
		const Card2 = (i + 1 == ProgramsCards.length)? null : ProgramsCards[i+1]

		ProgramsCardsWithRows.push(
			<div className="row" key={i}>
				{Card1}
				{Card2}
			</div>
		)
	}

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

				<div>
					{ProjectsCardsWithRows}
				</div>

				<br />
				<br />

				<h4 className="blue-grey-text text-darken-3">
					<b>
						{props.Language === "English"? "Cool Programs": <div><b>Ideas </b>Interesantes </div>}
					</b>
				</h4>
				
				<br />

				<div>
					{ProgramsCardsWithRows}
				</div>

			</div>
		</div>
	)
 }