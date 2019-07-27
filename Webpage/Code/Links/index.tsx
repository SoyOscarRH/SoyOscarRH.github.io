import React, { FunctionComponent as FC, useContext } from "react"

import { navigateTo } from "../AppHeader"
import { LanguageContext } from "../App/Language"

import * as Styles from "./Styles.css"
import * as GeneralStyles from "../App/GeneralStyles.css"

const Button: FC<{ title: string; src: string; link?: string }> = ({ title, src, link }) => {
  const language = useContext(LanguageContext)
  const backgroundImage = `url('${src + ["", "ES"][language.index] + ".jpg"}')`
  const href = link ? link : "#" + title
  const className = Styles.Button + " " + GeneralStyles.Card

  const handleClick = (event: React.MouseEvent) => {
    link ? window.open(link, "_blank") : navigateTo(document.getElementById(title))
    event.preventDefault()
  }

  return <a onClick={handleClick} href={href} className={className} style={{ backgroundImage }} />
}

const Links: FC<{ id: string }> = ({ id }) => {
  const resume = "https://soyoscarrh.github.io/Resume.pdf"
  const myTwitter = "https://twitter.com/SoyOscarRH"

  return (
    <section id={id} className={GeneralStyles.Container + " " + Styles.Links}>
      <Button title={"Projects"} src={"Assets/Links/LinksProjects"} />
      <Button title={"Programs"} src={"Assets/Links/LinksPrograms"} />
      <Button title={"Books"} src={"Assets/Links/LinksBooks"} />
      <Button title={"Education"} link={resume} src={"Assets/Links/LinksEdu"} />
      <Button title={"Interests"} link={myTwitter} src={"Assets/Links/LinksInterests"} />
    </section>
  )
}

export default Links
