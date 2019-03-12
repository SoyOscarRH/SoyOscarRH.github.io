import React, { FunctionComponent, useContext, useEffect } from "react"
import M from "materialize-css"

import { LanguageOption, LanguageContext } from "./Helpers/Language"
import { BooksI } from "./PageData/Books"
import Card from "./Card"

import * as Styles from "./Card/Styles.css"

interface BooksDataI {
  Books: BooksI
  AboutBooks: LanguageOption<JSX.Element>
}

const Books: FunctionComponent<BooksDataI> = ({ Books, AboutBooks }) => {
  const { name, index } = useContext(LanguageContext)

  useEffect(() => {
    const ElementsBoxes = document.querySelectorAll(".materialboxed")
    const Collapsibles = document.querySelectorAll(".collapsible")
    const ElementsToolTips = document.querySelectorAll(".tooltipped")

    M.Materialbox.init(ElementsBoxes, {})
    M.Tooltip.init(ElementsToolTips, {})
    M.Collapsible.init(Collapsibles, { inDuration: 150 })
  }, [])

  const BooksTitle = ["Books", "Libros"][index]

  const BooksCards = Object.entries(Books).map(([name, Element]) => (
    <Card key={name} name={name} Element={Element} type={"Book"} />
  ))

  return (
    <div className={`center-align ${Styles.Container}`}>
      <h4 className="blue-grey-text text-darken-3">
        <b>{BooksTitle}</b>
      </h4>
      <div>{AboutBooks[name]}</div>

      <br />
      <br />

      <div className={Styles.Grid}>{BooksCards}</div>
    </div>
  )
}

export default Books
