import React, { FunctionComponent as FC, useContext } from "react"

import navigateTo from "../Helpers/navigateTo"
import { LanguageContext } from "../App/Language"

import Styles from "./Styles.module.css"
import GeneralStyles from "../App/GeneralStyles.module.css"

const Button: FC<{ title: string; src: string; link?: string }> = ({ title, src, link }) => {
  const language = useContext(LanguageContext)
  const backgroundImage = `url('${src + ["", "ES"][language.index] + ".jpg"}')`
  const href = link ? link : "#" + title
  const className = [Styles.Button, GeneralStyles.Card, GeneralStyles.CardHoverable].join(" ")

  const handleClick = (event: React.MouseEvent) => {
    link ? window.open(link, "_blank") : navigateTo(document.getElementById(title))
    event.preventDefault()
  }

  return <a href={href} onClick={handleClick} className={className} style={{ backgroundImage, color: "tra" }}>
    {src}
    </a>
}

const Links: FC<{ id: string }> = ({ id }) => {
  const resume = "https://soyoscarrh.github.io/Resume.pdf"
  const myTwitter = "https://twitter.com/SoyOscarRH"
  const className = [GeneralStyles.Container, Styles.Links].join(" ")

  return (
    <section id={id} className={className}>
      <Button title={"Projects"} src={"Images/Links/LinksProjects"} />
      <Button title={"Programs"} src={"Images/Links/LinksPrograms"} />
      <Button title={"Books"} src={"Images/Links/LinksBooks"} />
      <Button title={"Education"} link={resume} src={"Images/Links/LinksEdu"} />
      <Button title={"Interests"} link={myTwitter} src={"Images/Links/LinksInterests"} />
      <Button title={"Awards"} link={resume} src={"Images/Links/LinksAwards"} />
      <Button title={"Certifications"} link={resume} src={"Images/Links/LinksCertifications"} />
    </section>
  )
}

export default Links
