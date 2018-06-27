// ======================================================================
// ============          WEB APP IN REACT           =====================
// ======================================================================

/* ========= BASIC REACT THINGS ===============*/
import React from "react"
import ReactDOM from "react-dom"

/* ========= MATERIALIZCE CSS =================*/
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

/* ========= THE COMPONENTS ==================*/
import AppHeader from "./AppHeader"
import AboutMe from "./AboutMe"

import {Data} from "./Data"

// =====================================================================
// ============              APP COMPONENTS        =====================
// =====================================================================
class App extends React.Component {

	constructor(props) {
		super(props)
		const Languages = ["Spanish", "English"]
		
		this.state = {
			Language: Languages[Math.floor(Math.random() * Languages.length)],
		}
	}

	OnChangeLanguage () {
		this.setState((preState) => {
			const NewLanguage = (preState.Language === "English")?
			"Spanish" : "English"

			return {Language: NewLanguage}
		})
	}

	render () {

		const Language = this.state.Language
		const NewLanguage = (Language === "English")? "Spanish" : "English"

		return (
			<React.Fragment>
				
				<header>
						<AppHeader
							Languages = {[Language, NewLanguage]}
							OnChangeLanguage={() => this.OnChangeLanguage()}
						/>
				</header>

				<main>
					<div id="AboutMe">
						<AboutMe 
							Data={Data.AboutMe[this.state.Language]} 
						/>
					</div>
				</main>

				<footer>
				</footer>

			</React.Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("ReactApp"))