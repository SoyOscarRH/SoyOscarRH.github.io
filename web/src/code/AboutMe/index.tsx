import React, { FunctionComponent, useEffect, useState } from "react"
import { AboutMeI } from "../../data/AboutMe"
import { LinksToSocialMedia } from "../Header/SideMenu"

import GeneralStyles from "../App/GeneralStyles.module.css"
import Styles from "./Styles.module.css"

import printInDOMNode from "./printInDOMNode"

const AboutMeSection: FunctionComponent<{ AboutMe: AboutMeI; id: string }> = ({ id, AboutMe }) => {
  const { Text, SayHi, ShowMyCV, Tags } = AboutMe

  const [profileID, updateProfileID] = useState(0)
  useEffect(() => {
    const id = setInterval(() => updateProfileID(c => (c + 1) % 8), 4000)
    return () => clearInterval(id)
  }, [updateProfileID])

  useEffect(() => {
    const DOMNode = document.getElementById("movingText") as HTMLElement
    return printInDOMNode(DOMNode, Text)
  }, [Text])

  const chips = Tags.map(tag => (
    <span key={tag} className={"chip " + Styles.Tag}>
      {tag}
    </span>
  ))

  const className = [GeneralStyles.Container, GeneralStyles.Card, Styles.AboutMe].join(" ")

  return (
    <div className={className} id={id}>
      <div style={{ display: "grid", gridGap: "1rem" }}>
        <h5 style={{ fontWeight: 440 }}>
          {SayHi} <b>R</b>osas <b>H</b>ernandez
        </h5>

        <div className={Styles.Text}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
            <div style={{ display: "grid", gridTemplateRows: "1fr auto" }}>
              <span id="movingText" />
              <div style={{ paddingTop: "0.8rem" }} className="hide-on-small-only">
                {chips}
                <div style={{ maxWidth: "12rem", paddingTop: "1rem" }}>
                  <LinksToSocialMedia />
                </div>
              </div>
            </div>
            <img
              title="Me"
              src={`Images/Profiles/Profile${profileID}.jpg`}
              className={Styles.Image}
              style={{ padding: 0 }}
            />
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "1.5rem" }} className="hide-on-med-and-up">
        {chips}
        <div style={{ maxWidth: "12rem", paddingTop: "1rem" }}>
          <LinksToSocialMedia />
        </div>
      </div>

      <a
        className="btn indigo lighten-1"
        href="OscarRosasResume.pdf"
        target="_blank"
        style={{ fontWeight: 600, fontSize: "105%" }}
      >
        <span className="hide-on-med-and-up"> CURRICULUM </span>
        <span className="hide-on-small-only"> {ShowMyCV} </span>
      </a>
    </div>
  )
}

export default AboutMeSection