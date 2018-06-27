// =====================================================================
// ============                 IMPORTS            =====================
// =====================================================================
import React from "react"

// =================================================================
// ==================     ABOUT ME COMPONENT       =================
// =================================================================
export default function AboutMe(props) {

  return (
    <div className="teal lighten-5 z-depth-1 row">
      
      {/*=================================================*/}
      {/*===============      PROFILE      ===============*/}
      {/*=================================================*/}
      <div className="col s8 m8 l9">

        {/*=================================================*/}
        {/*===============      TEXT         ===============*/}
        {/*=================================================*/}
        <div className="row">

          <div className="col s10 offset-s1">
            <br />
            <br />
            <h5 className="blue-grey-text text-darken-4" style={{fontWeight: "440"}}>
              {props.Data.SayHi} <b>R</b>osas <b>H</b>ernandez
            </h5>
            <br />
            
            <div className="hide-on-small-only" style={{fontWeight: "200"}}>
              <p style={{fontSize: "1.2rem"}}>
                {props.Data.Description}
              </p>
            </div>

            <div className="hide-on-med-and-up" style={{fontWeight: "400"}}>
              <p style={{fontSize: "1rem"}}>
                {props.Data.Description}
              </p>
            </div>
          </div>

        </div>

        {/*=================================================*/}
        {/*===============      CONTACT      ===============*/}
        {/*=================================================*/}
        <div className="row">
          <div className="col s10 offset-s1">
            <h5 className="blue-grey-text text-darken-4">
              {props.Data.Contact}
            </h5>
          </div>
        </div>

        {/*=================================================*/}
        {/*===============      LINKS        ===============*/}
        {/*=================================================*/}
        <div className="row">
          <div className="col s10 offset-s1">
            <div className="row">
              
              <a target="_blank" href="https://github.com/SoyOscarRH">
                <img className="col s3 m2 l1" src="Assets/github.png"/>
              </a>
              <a target="_blank" href="http://compilandoconocimiento.com/">
                <img className="col s3 m2 l1" src="Assets/wordpress.png"/>
              </a>
              <a target="_blank" href="http://twitter.com/SoyOscarRH">
                <img className="col s3 m2 l1" src="Assets/twitter.png"/>
              </a>
              <a target="_blank" href="https://telegram.me/SoyOscarRH">
                <img className="col s3 m2 l1" src="Assets/telegram.png"/>
              </a>

            </div>
          </div>
        </div>

        {/*=================================================*/}
        {/*==========      CURRICULUM        ===============*/}
        {/*=================================================*/}
        <div className="row">
          <div className="col s10 offset-s1">
            <a className="waves-effect waves-light btn indigo lighten-2">
              {props.Data.ShowMyCV}
            </a>
          </div>
        </div>

      </div>

      {/*=================================================*/}
      {/*===============      PHOTO        ===============*/}
      {/*=================================================*/}
      <div className="col s4 m4 l3 valign-wrapper">
        <div className="row">
          <br />
          <br />
          <br />
          <img className="col s11 m9 l11" src="Assets/Profile.png" />
        </div>
      </div>

    </div>
  )

 }
