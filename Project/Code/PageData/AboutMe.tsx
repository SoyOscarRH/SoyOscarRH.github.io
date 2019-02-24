import React from "react"
import { LanguageOption } from "../App"

export interface AboutMeI {
  SayHi: JSX.Element
  ShowMyCV: string
  Description: JSX.Element
}

const AboutMe: LanguageOption<AboutMeI> = {
  English: {
    SayHi: (
      <span>
        Hi, Im <b>Oscar</b>
      </span>
    ),
    ShowMyCV: "SEE MY CURRICULUM",
    Description: (
      <span className="blue-grey-text text-darken-4">
        Nerd.
        <br />
        Computer scientist, engineer, addicted to memes, becoming the better
        version of myself. Interested in competitive programming, even if I suck
        at it. I believe that the web is the platform of the future. Lover of
        pure mathematics, the more useless the better, economics, machine
        learning and philosophy.
        <br />
        Founder of CompilandoConocimiento.
        <br />
        World citizen.
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
    Description: (
      <span className="blue-grey-text text-darken-4">
        Nerd.
        <br />
        Computólogo, adicto a los memes y a la vida en la biblioteca, muy
        interesado en la programación competitiva, aunque sea un asco. Creo que
        la web es la plataforma del futuro. Amante de la matemática pura, el
        machine learning, economía y filosofía.
        <br />
        Fundador de CompilandoConocimiento.
        <br />
        Ciudadano del mundo.
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
