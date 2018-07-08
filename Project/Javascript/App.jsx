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
import {Data} from "./Data"
import AppHeader from "./AppHeader"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Footer from "./Footer"


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
							Languages        = {[Language, NewLanguage]}
							OnChangeLanguage = {() => this.OnChangeLanguage()}
							Data             = {Data.SideMenu[this.state.Language]} 
						/>
				</header>

				<main>
					<div id="AboutMe">
						<AboutMe 
							Data={Data.AboutMe[this.state.Language]} 
						/>
					</div>

					<div id="Projects">
						<Projects 
							Data     = {Data.Projects}
							Language = {this.state.Language}
						/>
					</div>

					<br />
					<br />
					<br />

				</main>

				<footer>
					<Footer 
					/>
				</footer>

			</React.Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("ReactApp"))