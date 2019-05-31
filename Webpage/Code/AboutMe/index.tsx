import React, { FunctionComponent, useEffect } from "react"
import { AboutMeI } from "../PageData/AboutMe"
import { LinksToSocialMedia } from "../AppHeader/SideMenu"

import * as Styles from "../Card/Styles.css"

import printInDOMNode from "./printInDOMNode"

const AboutMeSection: FunctionComponent<{ AboutMe: AboutMeI }> = props => {
  const { Text } = props.AboutMe
  useEffect(() => {
    const DOMNode = document.getElementById("movingText") as HTMLElement
    const stopWriting = printInDOMNode(DOMNode, Text)
    return stopWriting
  }, [Text])

  const chips =
    props.AboutMe.Tags &&
    props.AboutMe.Tags.map(Tag => (
      <span
        key={Tag}
        style={{ fontSize: "1.5vh", display: "inline", padding: "0.6rem" }}
        className="chip"
      >
        {Tag}
      </span>
    ))

  return (
    <div className={"teal lighten-5 z-depth-1 blue-grey-text text-darken-4 " + Styles.Container}>
      <div style={{ display: "grid", gridGap: "1rem" }}>
        <h5 style={{ fontWeight: 440 }}>
          {props.AboutMe.SayHi} <b>R</b>osas <b>H</b>ernandez
        </h5>

        <div style={{ fontWeight: 300, fontSize: "2vh" }}>
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
            <img title="Me" src="Assets/Profile.png" className={Styles.Image} style={{ padding: 0 }} />
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "1.5rem" }} className="hide-on-med-and-up">
        {chips}
        <div style={{ maxWidth: "12rem", paddingTop: "1rem" }}>
          <LinksToSocialMedia />
        </div>
      </div>
      <a className="btn indigo lighten-1" href="Resume.pdf" target="_blank">
        <span className="hide-on-med-and-up"> CURRICULUM </span>
        <span className="hide-on-small-only"> {props.AboutMe.ShowMyCV} </span>
      </a>
    </div>
  )
}

export default AboutMeSection
