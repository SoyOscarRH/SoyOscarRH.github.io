import React, { FunctionComponent, useEffect, useState } from "react"
import { useCurrentLanguage } from "../App/Language"
import { LinksToSocialMedia } from "../Header/SideMenu"

import GeneralStyles from "../App/GeneralStyles.module.css"
import Styles from "./Styles.module.css"

import AboutMeData from "../../data/AboutMe"

import printInDOMNode from "../Helpers/printInDOMNode"

const ProfilePhoto: FunctionComponent = () => {
  const [profileID, updateProfileID] = useState(0)
  useEffect(() => {
    const updateMod8 = () => updateProfileID(c => (c + 1) % 8)
    const id = setInterval(updateMod8, 3000)
    return () => clearInterval(id)
  }, [updateProfileID])

  const source = `Images/Profiles/Profile${profileID}.jpg`
  return <img title="me" alt="me" src={source} className={Styles.Image} />
}

const Links: FunctionComponent<{ tags: Array<string> }> = ({ tags }) => (
  <>
    <div style={{ paddingTop: "1rem" }}>
      {tags.map(tag => (
        <span key={tag} className={"chip " + Styles.Tag}>
          {tag}
        </span>
      ))}
    </div>

    <div style={{ maxWidth: "12rem", paddingTop: "1rem" }}>
      <LinksToSocialMedia />
    </div>
  </>
)

const AboutMeSection: FunctionComponent = () => {
  const language = useCurrentLanguage()
  const { Text, SayHi, ShowMyCV, Tags } = AboutMeData[language]

  useEffect(() => {
    const DOMNode = document.getElementById("movingText") as HTMLElement
    return printInDOMNode(DOMNode, Text)
  }, [Text])

  const className = [GeneralStyles.Container, GeneralStyles.Card, Styles.AboutMe].join(" ")
  const resumeClasses = "btn indigo lighten-1 " + Styles.resumeButton

  return (
    <div className={className} id="AboutMe">
      <h5 style={{ fontWeight: 500 }}>
        {SayHi} <b>R</b>osas <b>H</b>ernandez
      </h5>

      <div className={Styles.Text}>
        <div style={{ display: "grid", gridTemplateRows: "1fr auto" }}>
          <span className={Styles.movingText} id="movingText" />
          <div style={{ paddingTop: "0.8rem" }} className="hide-on-small-only">
            <Links tags={Tags} />
          </div>
        </div>
        <ProfilePhoto />
      </div>

      <div className="hide-on-med-and-up">
        <Links tags={Tags} />
      </div>

      <a href="OscarRosasResume.pdf" target="_blank" className={resumeClasses}>
        <span>{ShowMyCV}</span>
      </a>
    </div>
  )
}

export default AboutMeSection
