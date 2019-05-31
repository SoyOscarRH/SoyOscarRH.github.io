import React, { FunctionComponent, useEffect } from "react"
import { AboutMeI } from "./PageData/AboutMe"
import { LinksToSocialMedia } from "./AppHeader/SideMenu"

const AboutMeSection: FunctionComponent<{ AboutMe: AboutMeI }> = props => {
  const {Text} = props.AboutMe
  useEffect(() => {

    // http://users.softlab.ntua.gr/~sivann/books/LaTeX%2520-%2520User%27s%2520Guide%2520and%2520Reference%2520Manual-lamport94.pdf?fbclid=IwAR2CIeg8qh41Q3XSw4EFjF-6jCTqbYImy2RDPETuV1eX7hXu1u-FYub9xLg
    const DOMNode = document.getElementById("movingText") as HTMLElement
    const textToShow = Text
    const speedTyping = 70, speedNewLine = 600
    let textPosition = 0, lineSize = textToShow[0].length
    let index = 0, contents = "", row = 0
    let continueMessage = true

    const typeText = () => {
      if (!continueMessage) return
      contents = ""

      row = Math.max(0, index - 6)
      while (row < index) contents += Text[row++] + "\r\n"
      DOMNode.innerText = contents + Text[index].substring(0, textPosition) + "_"

      if (textPosition++ == lineSize) {
        textPosition = 0
        index++
        if (index != Text.length) {
          lineSize = Text[index].length
          setTimeout(typeText, speedNewLine)
        }
      } else setTimeout(typeText, speedTyping)
    }

    typeText()
    return () => {continueMessage = false}
  }, [Text])

  return (
    <div className="teal lighten-5 z-depth-1 row" style={{ display: "flex" }}>
      <div className="col s8 m8 l9" style={{ padding: "2% 1% 4% 5%" }}>
        <TextSection AboutMe={props.AboutMe} />
      </div>
      <div className="col s4 m4 l3 valign-wrapper">
        <PhotoSection />
      </div>
    </div>
  )
}

const TextSection: FunctionComponent<{ AboutMe: AboutMeI }> = props => (
  <React.Fragment>
    <h5 className="blue-grey-text text-darken-4" style={{ fontWeight: 440 }}>
      {props.AboutMe.SayHi} <b>R</b>osas <b>H</b>ernandez
    </h5>
    <br />

    <div className="hide-on-small-only" style={{ fontWeight: 200 }}>
      <p style={{ fontSize: "1.15rem" }}>{props.AboutMe.Description}</p>
    </div>

    <p className="hide-on-med-and-up" id="move" style={{ fontWeight: 400, fontSize: "0rem" }}>
      {props.AboutMe.Description}
    </p>

    <div style={{ width: "12rem" }}>
      <LinksToSocialMedia />
    </div>

    <a className="btn indigo lighten-1" href="Resume.pdf" target="_blank">
      <span className="hide-on-med-and-up"> CURRICULUM </span>
      <span className="hide-on-small-only"> {props.AboutMe.ShowMyCV} </span>
    </a>
  </React.Fragment>
)

const PhotoSection: FunctionComponent = () => (
  <img
    title="Me"
    className="col s11 m9 l11"
    src="Assets/Profile.png"
    style={{ maxWidth: "18em" }}
  />
)

export default AboutMeSection
