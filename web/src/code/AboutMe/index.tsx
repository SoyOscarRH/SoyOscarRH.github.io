import React, { FunctionComponent, useEffect, useState } from "react"
import { useCurrentLanguage } from "../App/Language"
import { LinksToSocialMedia } from "../Header/SideMenu"

import general from "../App/GeneralStyles.module.css"
import style from "./styles.module.css"

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
  return <img title="me" alt="me" src={source} className={style.image} />
}

const AboutMeSection: FunctionComponent = () => {
  const language = useCurrentLanguage()
  const { text, sayHi, checkResume, tags } = AboutMeData[language]

  useEffect(() => {
    const DOMNode = document.getElementById("movingText") as HTMLElement
    return printInDOMNode(DOMNode, text)
  }, [text])

  const myTags = tags.map(tag => <span key={tag} className={"chip " + style.tag}>{tag}</span>)
  const resumeClasses = "btn indigo lighten-1 " + style.resumeButton

  return (
    <div className={[general.Container, general.Card, style.aboutMe].join(" ")} id="AboutMe">
      <ProfilePhoto />

      <h5 style={{ fontWeight: 500 }}>
        {sayHi} <b>R</b>osas <b>H</b>ernandez
      </h5>

      <div className={style.text} id="movingText" />
      <div style={{ paddingTop: "1.5rem" }}>
        {myTags}
      </div>

      <LinksToSocialMedia classes={style.icons} />

      <a href="OscarRosasResume.pdf" target="_blank" className={resumeClasses}>
        <span>{checkResume}</span>
      </a>
    </div>
  )
}

export default AboutMeSection
