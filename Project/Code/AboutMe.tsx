import React, { FunctionComponent } from "react"
import {AboutMe as AboutMeInterface} from "./PageData/AboutMe"

interface TextSectionProps {
  AboutMe: AboutMeInterface,
}

const TextSection: FunctionComponent<TextSectionProps> = props => (
  <React.Fragment>
    <h5 className="blue-grey-text text-darken-4" style={{fontWeight: 440}}>
      {props.AboutMe.SayHi} <b>R</b>osas <b>H</b>ernandez
    </h5>
    <br />
    
    <div className="hide-on-small-only" style={{fontWeight: 200}}>
      <p style={{fontSize: "1.2rem"}}>
        {props.AboutMe.Description}
      </p>
    </div>

    <p className="hide-on-med-and-up" style={{fontWeight: 400, fontSize: "1rem"}}>
      {props.AboutMe.Description}
    </p>

    <a className="btn indigo lighten-1" href="Resume.pdf" target="_blank">
      <span className="hide-on-med-and-up"> CURRICULUM               </span>
      <span className="hide-on-small-only"> {props.AboutMe.ShowMyCV} </span>
    </a>
  </React.Fragment>
)

const PhotoSection: FunctionComponent = () => (
  <div className="row">
    <br /><br /><br />
    <br /><br /><br />
    <img className="col s11 m9 l11" src="Assets/Profile.png" />
  </div>
)

const AboutMe: FunctionComponent<{AboutMe: AboutMeInterface}> = (props) => (
  <div className="teal lighten-5 z-depth-1 row">
    
    <div className="col s8 m8 l9" style={{padding: "2% 1% 4% 5%"}}>
      <TextSection AboutMe={props.AboutMe} />
    </div>
    
    <div className="col s4 m4 l3 valign-wrapper">
      <PhotoSection />
    </div>

  </div>
)

export default AboutMe