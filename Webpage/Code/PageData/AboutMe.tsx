import React from "react"
import { LanguageOption } from "../Helpers/Language"

export interface AboutMeI {
  SayHi: JSX.Element
  ShowMyCV: string
  Description: JSX.Element
  Text: Array<string>
  Tags?: Array<string>
}

const AboutMe: LanguageOption<AboutMeI> = {
  English: {
    SayHi: (
      <span>
        Hi, Im <b>Oscar</b>
      </span>
    ),
    ShowMyCV: "SEE MY CURRICULUM",
    Text: [
      "Nerd.",
      "Computer scientist, engineer, addicted to memes, becoming the better version of myself. " +
        "Interested in competitive programming, even if I suck at it. I believe that the web is the " +
        "platform of the future. Lover of pure mathematics, the more useless the better, economics, machine learning and philosophy.",
      "Founder of CompilandoConocimiento.",
      "World citizen ",
    ],
    Description: (
      <div className="blue-grey-text text-darken-4">
        <div className="row" style={{ display: "flex" }}>
          <div className="col s8 m8 l9" style={{ padding: 0, lineHeight: "1.1" }}>
            <span id="movingText" style={{ fontWeight: 300, fontSize: "2vh" }} />
          </div>
          <div className="col s4 m4 l3 valign-wrapper">
            <img
              title="Me"
              className="col s12 m9 l11 hide-on-med-and-up"
              src="Assets/Profile.png"
              style={{ maxWidth: "18em", padding: 0 }}
            />
          </div>
        </div>

        <br />
      </div>
    ),
    Tags: ["Computer Science", "Math enthusiast", "Learner"],
  },
  Spanish: {
    SayHi: (
      <span>
        {" "}
        Hola, <b>Soy Oscar</b>{" "}
      </span>
    ),
    ShowMyCV: "VER MI CURRICULUM",
    Text: [
      "Nerd.",
      "Computólogo, adicto a los memes y a la vida en la biblioteca, muy interesado en la " +
        "programación competitiva, aunque sea un asco. Creo que la web es la plataforma del futuro." +
        "Amante de la matemática pura, el machine learning, economía y filosofía.",
      "Fundador de CompilandoConocimiento.",
      "Ciudadano del mundo ",
    ],
    Description: (
      <span className="blue-grey-text text-darken-4">
        <span id="movingText" />
        <br />
        <br />
        <span className="chip">Computólogo</span>
        <span className="chip">Siempre un estudiante</span>
        <span className="chip">Amante de las matemáticas</span>
      </span>
    ),
  },
}

export default AboutMe
