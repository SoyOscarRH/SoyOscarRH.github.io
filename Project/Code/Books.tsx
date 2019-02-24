import React from "react"
import M from "materialize-css"

import {Books as BooksInterfaces} from "./PageData/Books"
import {LanguageOption} from "./App"
import {BookCard} from "./Card"

import * as Styles from "./Styles.css"

interface BooksProps {
	Language: "English" | "Spanish"
	Books: BooksInterfaces
	AboutBooks: LanguageOption<JSX.Element>
}
export default function Books(props: BooksProps) {

	return null

	document.addEventListener('DOMContentLoaded', function() {
		const ElementsBoxes = document.querySelectorAll('.materialboxed')
		const Collapsibles = document.querySelectorAll('.collapsible')
		const ElementsToolTips = document.querySelectorAll('.tooltipped');
		
		M.Materialbox.init(ElementsBoxes, {})
		M.Tooltip.init(ElementsToolTips, {})
		M.Collapsible.init(Collapsibles, {inDuration: 150})
	})

	const BooksCards = Object.entries(props.Books)
	   .map( Book => BookCard(Book[0], Book[1], props.Language) )

	const BooksTitle = props.Language === "English"? "Books": "Libros"
	
	return (
		<div className={"center-align " + Styles.Container}>

			<h4 className="blue-grey-text text-darken-3"><b>{BooksTitle}</b></h4>
			<div>
				{props.AboutBooks[props.Language]}
			</div>

			<br />
			<br />

			<div className={Styles.Grid}>
				{BooksCards}
			</div>

		</div>
	)
}


