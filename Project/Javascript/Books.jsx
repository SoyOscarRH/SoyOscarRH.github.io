// =====================================================================
// ============                 IMPORTS            =====================
// =====================================================================
import React from "react"

// =================================================================
// ==================     PROJECT COMPONENT      ===================
// =================================================================
export default function Books(props) {

	document.addEventListener('DOMContentLoaded', function() {
		const ElementsBoxes = document.querySelectorAll('.materialboxed')
		const Collapsibles = document.querySelectorAll('.collapsible')
		const ElementsToolTips = document.querySelectorAll('.tooltipped');
		
		M.Materialbox.init(ElementsBoxes, {})
		M.Tooltip.init(ElementsToolTips, {})
		M.Collapsible.init(Collapsibles, {inDuration: 150})
	})


	let BooksCards = []
    
	Object.entries(props.Data.Books).forEach(
		([Name, Data]) => {

			const Card = (
				<div className="col s12 m6 l6" key={Name} id={Name}>
					<div className="card">
						
						<div className="card-image">
							
							<img className="materialboxed" src={`Assets/Books/${Name}.png`} />
							<span className="card-title blue-grey-text text-darken-4 valign-wrapper activator">
								{Data.Title[props.Language]}
							</span>
							<a 
								className    = {`tooltipped btn-floating btn-large halfway-fab waves-effect waves-light ${Data.Color}`}
								href         = {Data.LinkToProject}
								data-position= "top"
								data-tooltip = {
									props.Language === "English"? 
										"See Project & Sourcecode in Github": 
										"Ver el proyecto y código fuente en Github"
									}
								target       = "_blank">
								<img src="Assets/githubMini.png"/>
							</a>

						</div>
						
						<div className="card-content left-align">
							<br />
							
							<p className="blue-grey-text text-darken-3">
								{Data.Intro[props.Language]}
							</p>

							{Data.CoAuthors !== ""? (<span><br /></span>): null}
							
							<span className="blue-grey-text text-darken-3">
								{
									Data.CoAuthors !== ""?
										props.Language === "English"? 
											"Written in collaboration with: ": 
											"Escrito en colaboración con: "
										:
										null
								}
								{Data.CoAuthors}
							</span>

							{Data.CoAuthors !== ""? (<span><br /></span>): null}
								
							<br />
							<br />
							
							{
								Data.Tags[props.Language].map((Element) => {
									return (<div key={Element} className="chip" style={{fontSize: '0.85rem'}}>{Element}</div>)
								})
							}

						</div>

						<div className="card-reveal blue-grey-text text-darken-3">
							<span className="card-title grey-text text-darken-4 valign-wrapper">
								{props.Language === "English"? "Topics in the Book": "Temario del Libro"}
								<i className="material-icons right">close</i>
							</span>

							<br />
							<br />

							<div>
								<ul className="collapsible popout left-align">
								{
									Data.Topics[props.Language].map(
										(Element, Key) => (
											<li key={`${Key} Collapsible`}>
												<div className="collapsible-header">
													{Element.Name}
												</div>
												<div className="collapsible-body">
													<ul style={{fontSize: "0.8rem"}}>
														{Element.SubTopics.map( (Item, Index) => <li key={`${Element.Name} ${Index}`}>{Item}</li> )}
													</ul>
												</div>
											</li>	
										)
									)
								}
								</ul>
							</div>
						</div>
							





						<div className="card-action hide-on-large-only">
							<a className="activator" style={{cursor: "pointer"}}>
								{props.Language === "English"? "TOPICS": "TEMARIO"}
							</a>
						</div>

						<div className="card-action hide-on-large-only">
							<a target="_blank" href={Data.LinkToReadOnline}>
								{props.Language === "English"? "READ ONLINE": "LEE EN LÍNEA"}
							</a>
							<a target="_blank" href={Data.LinkToDownload}>
								{props.Language === "English"? "DOWNLOAD": "DESCARGAR"}
							</a>
						</div>


						<div className="card-action hide-on-med-and-down">
							<a className="activator" style={{cursor: "pointer"}}>
								{props.Language === "English"? "TOPICS": "TEMARIO"}
							</a>
							<a target="_blank" href={Data.LinkToReadOnline}>
								{props.Language === "English"? "READ ONLINE": "LEE EN LÍNEA"}
							</a>
							<a target="_blank" href={Data.LinkToDownload}>
								{props.Language === "English"? "DOWNLOAD": "DESCARGAR"}
							</a>
						</div>

					</div>
				</div>
			)

			BooksCards.push(Card)
		}
	)

	let BooksCardsWithRows = []
	for (let i = 0; i < BooksCards.length; i += 2) {
		const Card1 = BooksCards[i]
		const Card2 = (i + 1 == BooksCards.length)? null : BooksCards[i+1]

		BooksCardsWithRows.push(
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
						{props.Language === "English"? "Books": "Libros"}
					</b>
				</h4>

				<div>
					{props.Data.AboutBooks[props.Language]}
				</div>

				<br />
				<br />

				<div>
					{BooksCardsWithRows}
				</div>

			</div>
		</div>
	)
 }