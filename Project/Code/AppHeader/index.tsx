import React from "react"
import M from "materialize-css"

import NavigationMenu from "./NavigationMenu"
import SideMenu from "./SideMenu"

interface AppHeaderProps {
	onChangeLanguage: () => void
	Data: any
	Language: "English" | "Spanish"
}

interface AppHeaderState {
	Sidenav: M.Sidenav | null
}

export default class AppHeader extends React.Component<AppHeaderProps, {Sidenav: M.Sidenav | null}> {

	constructor(props: AppHeaderProps) {
		super(props)
		this.state = { Sidenav: null }
	}

	componentDidMount() {
		const elementNode = document.getElementById('SideBarID')!
		this.setState({Sidenav: M.Sidenav.init(elementNode, {draggable: true, edge: "left"})})
	}

	shouldComponentUpdate(nextProps: AppHeaderProps, _: AppHeaderState) {
		return this.props.Language != nextProps.Language
	}

	manageChangeLanguage() {
		this.props.onChangeLanguage()
		setTimeout( () => this.state.Sidenav!.close(), 500)
	}

	render () {

		return (
			<React.Fragment>
				<NavigationMenu />
				<SideMenu 
                    manageChangeLanguage={() => this.manageChangeLanguage()}
                    Language = {this.props.Language}
                />
			</React.Fragment>
		)
	}
}
