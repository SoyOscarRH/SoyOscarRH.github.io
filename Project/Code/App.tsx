import React from "react"
import ReactDOM from "react-dom"

import M from "materialize-css"

import {SideMenu as SideMenuData} from "./PageData"
import {AboutMe as AboutMeData} from "./PageData"
import {ProjectsAndPrograms as ProjectsAndProgramsData} from "./PageData"
import {Books as BooksData, AboutBooks as AboutBooksData} from "./PageData"

import AppHeader from "./AppHeader"
import AboutMe   from "./AboutMe"
import Projects  from "./Projects"
import Books     from "./Books"
import Footer    from "./Footer"

class App extends React.Component<{}, {Language: "Spanish" | "English"}> {

	constructor(props: {}) {
		super(props)

		this.state = {
			Language: Math.random() < 0.5? "Spanish" : "English"
		}
	}

	onChangeLanguage () {
		this.setState((preState) => {
			return {Language: (preState.Language === "English")? "Spanish" : "English"}
		})
	}

	componentDidMount() {
		window['changeMessage'] = () => {
			M.Toast.dismissAll()
			this.onChangeLanguage() 
		}

		const message = this.state.Language == "English"? "¿Cambiar idioma?" : "Change language?"
		M.toast({
			html: 
				`<button 
					class   = "btn-flat toast-action"
					onClick = window.changeMessage()>
					${message}
				</button>`,
			displayLength: 8000,
		})
	}

	render () {
		return (
			<React.Fragment>
				
				<header>
					<AppHeader
						Language	     = {this.state.Language}
						onChangeLanguage = {() => this.onChangeLanguage()}
						Data             = {SideMenuData[this.state.Language]} 
					/>
				</header>

				<main>
					<div id="AboutMe">
						<AboutMe AboutMe={AboutMeData[this.state.Language]} />
					</div>

					<div id="Projects">
						<Projects Projects={ProjectsAndProgramsData} Language={this.state.Language} />
					</div>

					<div id="Books">
						<Books Books={BooksData} AboutBooks={AboutBooksData} Language={this.state.Language}/>
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