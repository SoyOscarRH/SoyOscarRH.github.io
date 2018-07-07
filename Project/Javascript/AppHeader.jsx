// =====================================================================
// ============                 IMPORTS            =====================
// =====================================================================
import React from "react"

// =====================================================================
// ============     HEADER COMPONENT       =============================
// =====================================================================
export default class AppHeader extends React.Component {

	constructor(props) {
		super(props)
		this.state = {Languages: this.props.Languages}
	}

	componentDidMount() {
		const Elements = document.querySelectorAll('.sidenav')
		const Sidenavs = M.Sidenav.init(Elements, {draggable: true, edge: "left"})
	}

	render () {

		const ManageChangeLanguage = () => {
			this.props.OnChangeLanguage()

			setTimeout(() => {
				const Element = document.getElementById('SideMenu')
				const Instance = M.Sidenav.getInstance(Element)
				Instance.close()
			}, 500)
		}

		const NavigationMenu = (
			<div className="navbar-fixed">
				<nav className="blue-grey darken-3">
					<div className="nav-wrapper z-depth-1">
						<div className="container">
							<div className="brand-logo white-text center" style={{fontSize: '1.3rem'}}>
								<b>Soy</b>Oscar<b>RH</b>
							</div>
							<a href="" data-target="SideMenu" className="sidenav-trigger show-on-large">
								<i className="material-icons white-text">menu</i>
							</a>
							<a href="#AboutMe" className="right" style={{height: "100%"}}>
								<img 
									style={{width: '2.2rem', verticalAlign: "middle"}} 
									src="Assets/LogoWhite.png"
								/>
							</a>
						</div>
					</div>
				</nav>
			</div>
		)
		
		const SideMenu = (
			<ul id="SideMenu" className="sidenav">
				
				<li className="center">
					<br />
					<h5 style={{fontWeight: 500}}>
						<b>Soy</b>Oscar<b>RH</b>
					</h5>
					<br />
				</li>

				<li>
					<a className="subheader center">Language</a>
				</li>
				<li className="container">
					<div className="switch center">
						<label>
							{this.state.Languages[0]}
							<input type="checkbox" onClick={ManageChangeLanguage} />
							<span className="lever"></span>
							{this.state.Languages[1]}
						</label>
					</div>  
				</li>

				<li><div className="divider" /></li>

				<li>
					<a className="subheader">Subheader</a>
				</li>
				<li>
					<a className="waves-effect" href="#!">Third Link With Waves</a>
				</li>
			</ul>
		)

		return (
			<React.Fragment>
				{NavigationMenu}
				{SideMenu}
			</React.Fragment>
		)
	}
}