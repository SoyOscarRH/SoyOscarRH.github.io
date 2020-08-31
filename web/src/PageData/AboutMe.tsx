import React from "react"
import { LanguageOption } from "../App/Language"

export interface AboutMeI {
  SayHi: JSX.Element
  ShowMyCV: string
  Text: Array<string>
  Tags: Array<string>
}

const AboutMe: LanguageOption<AboutMeI> = {
  English: {
    SayHi: (
      <span>
        Hi, I'm <b>Oscar</b>
      </span>
    ),
    ShowMyCV: "CHECK MY RESUME",
    Text: [
      "Nerd.",
      "Computer scientist, software engineer; working to become a better version of myself.",
      "I think the web is the platform of the future. Lover of pure mathematics, programming languages, type systems, machine learning, and systems programming. Competitive programming freak.",
      "I never want to stop learning ... and teaching, that's why I founded CompilandoConocimiento",
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
    ShowMyCV: "CHECA MI CURRICULUM",
    Text: [
      "Nerd.",
      "Computólogo e ingeniero de software, trabajando en crear una mejor versión de mi mismo.",
      "Creo que la web es la plataforma del futuro. Amante de las matemáticas puras, los lenguajes de programación, sistemas de tipado, machine learning. Apasionado de la programación competitiva. ",
      "Nunca quiero dejar de aprender ... y de enseñar, por eso fundé CompilandoConocimiento.",
    ],
    Tags: ["Computólogo", "Siempre aprendiendo", "Amante de las matemáticas"],
  },
}

export default AboutMe
