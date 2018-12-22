import React from "react"

const NavigationMenu: React.StatelessComponent<{}> = () => {
	return (
		<div className="navbar-fixed z-depth-1">
			<nav className="blue-grey darken-4 white-text center">
				<div className="nav-wrapper container">
					
					<div className="brand-logo" style={{fontSize: '1.3rem'}}>
						<b>Soy</b>Oscar<b>RH</b>
					</div>

					<a data-target="SideBarID" className="sidenav-trigger show-on-large">
						<i className="material-icons white-text">menu</i>
					</a>

					<a 
						onClick   = {() => window.scrollTo({top: 0, behavior: 'smooth'})} 
						className = "right"
						style     = {{height: "100%"}}>
						<img style={{width: '2.2rem', verticalAlign: "middle"}} src="Assets/Icons/LogoWhite.png"/>
					</a>

				</div>
			</nav>
		</div>
	)
}

export default NavigationMenu