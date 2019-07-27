import React from "react"
import { LanguageOption } from "../App/Language"

export interface AboutMeI {
  SayHi: JSX.Element
  ShowMyCV: string
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
      "Computer scientist, engineer, addicted to memes, working to be a better version of myself. " +
      "Interested in competitive programming, even if I suck at it. I believe that the web is the " +
      "platform of the future. Lover of pure mathematics, the more useless the better, economics, machine learning and philosophy.",
      "Founder of CompilandoConocimiento.",
      "World citizen ",
    ],
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
    Tags: ["Computólogo", "Siempre aprendiendo", "Amante de las matemáticas"],
  },
}

export default AboutMe
