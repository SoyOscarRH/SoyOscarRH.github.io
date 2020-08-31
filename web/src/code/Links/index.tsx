import React, { FunctionComponent as FC } from "react"

import navigateTo from "../Helpers/navigateTo"
import { useCurrentLanguage } from "../App/Language"

import Styles from "./Styles.module.css"
import GeneralStyles from "../App/GeneralStyles.module.css"

const Button: FC<{ title: string; src: string; link?: string }> = ({ title, src, link }) => {
  const language = useCurrentLanguage()
  const backgroundImage = `url('${src + (language === "english" ? "" : "ES") + ".jpg"}')`
  const href = link ? link : "#" + title
  const className = [Styles.Button, GeneralStyles.Card, GeneralStyles.CardHoverable].join(" ")

  const handleClick = (event: React.MouseEvent) => {
    link ? window.open(link, "_blank") : navigateTo(document.getElementById(title))
    event.preventDefault()
  }

  const style = { backgroundImage, color: "transparent" }
  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {src}
    </a>
  )
}

const Links: FC = () => {
  const resume = "https://soyoscarrh.github.io/Resume.pdf"
  const myTwitter = "https://twitter.com/SoyOscarRH"
  const className = [GeneralStyles.Container, Styles.Links].join(" ")

  return (
    <section id="Links" className={className}>
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
