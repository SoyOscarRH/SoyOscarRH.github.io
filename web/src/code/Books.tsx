import React, { FunctionComponent, useEffect } from "react"
import M from "materialize-css"

import { useCurrentLanguage } from "./App/Language"
import { BooksData, AboutBooksData } from "../data"
import Card from "./Card"

import Styles from "./Card/Styles.module.css"

const Books: FunctionComponent = () => {
  const language = useCurrentLanguage()

  useEffect(() => {
    const ElementsBoxes = document.querySelectorAll(".materialboxed")
    const Collapsibles = document.querySelectorAll(".collapsible")
    const ElementsToolTips = document.querySelectorAll(".tooltipped")

    M.Materialbox.init(ElementsBoxes, {})
    M.Tooltip.init(ElementsToolTips, {})
    M.Collapsible.init(Collapsibles, { inDuration: 150 })
  }, [])

  const BooksTitle = language === "english" ? "Books" : "Libros"

  const BooksCards = Object.entries(BooksData).map(([name, Element]) => (
    <Card key={name} name={name} Element={Element} type={"Book"} />
  ))

  return (
    <section id="Books" className={`center-align ${Styles.Container}`}>
      <h4 className="blue-grey-text text-darken-3">
        <b>{BooksTitle}</b>
      </h4>
      <div>{AboutBooksData[language]}</div>

      <br />
      <br />

      <div className={Styles.Grid}>{BooksCards}</div>
    </section>
  )
}

export default Books
