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

  }

  componentDidMount() {
  	const Elements = document.querySelectorAll('.sidenav')
    const Sidenavs = M.Sidenav.init(Elements, {draggable: true, edge: "left"})
  }

  render () {
  	return (
      <React.Fragment>
			  
			  <nav className="blue-grey darken-3">
			    <div className="nav-wrapper container">
			      <div className="brand-logo white-text center" style={{fontSize: '1.3rem'}}>
			        <b>Soy</b>Oscar<b>RH</b>
			      </div>
			      <a href="" data-target="SideMenu" className="sidenav-trigger show-on-large">
			        <i className="material-icons white-text">menu</i>
			      </a>
			      <a href="/" className="right valign-wrapper" style={{height: '100%'}}>
			        <img style={{width: '2.2rem'}} src="Assets/LogoWhite.png" />
			      </a>
			    </div>
			  </nav>

			  <ul id="SideMenu" className="sidenav">
			    <li className="center">
			      <br />
			      <h5 style={{fontWeight: 500}}>
			        <b>Soy</b>Oscar<b>RH</b>
			      </h5>
			      <br />
			    </li>
			    <li><a className="subheader">General</a></li>
			    <li><a href="#!">Second Link</a></li>
			    <li><div className="divider" /></li>
			    <li><a className="subheader">Subheader</a></li>
			    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
			  </ul>

			</React.Fragment>
  	)
  }
}