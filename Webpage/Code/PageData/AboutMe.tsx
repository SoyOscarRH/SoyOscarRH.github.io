import React from "react"
import { LanguageOption } from "../Helpers/Language"

export interface AboutMeI {
  SayHi: JSX.Element
  ShowMyCV: string
  Description: JSX.Element,
  Text: Array<string>
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
      "World citizen "
    ],
    Description: (
      <span className="blue-grey-text text-darken-4">
        <span id="movingText" />
        <br />
        <br />
        <span className="chip">Computer Science </span>
        <span className="chip">Math enthusiast </span>
        <span className="chip">Learner </span>
      </span>
    ),
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
      "Ciudadano del mundo "
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
