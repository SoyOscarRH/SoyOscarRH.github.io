import React from "react"

const AboutMe = {
  english: {
    sayHi: (
      <span>
        Hi, I'm <b>Oscar</b>
      </span>
    ),
    checkResume: "CHECK MY RESUME",
    text: [
      "Nerd.",
      "Computer scientist, software engineer; working to become a better version of myself.",
      "I think the web is the platform of the future. Lover of pure mathematics, programming languages, type systems, machine learning, and systems programming. Competitive programming freak.",
      "I never want to stop learning ... and teaching, that's why I founded CompilandoConocimiento.",
    ],
    tags: ["Computer Science", "Math enthusiast", "Learner"],
  },
  spanish: {
    sayHi: (
      <span>
        Hola, <b>Soy Oscar</b>
      </span>
    ),
    checkResume: "CHECA MI RESUME",
    text: [
      "Nerd.",
      "Computólogo e ingeniero de software, trabajando en crear una mejor versión de mi mismo.",
      "Creo que la web es la plataforma del futuro. Amante de las matemáticas puras, los lenguajes de programación, sistemas de tipado, machine learning. Apasionado de la programación competitiva. ",
      "Nunca quiero dejar de aprender ... y de enseñar, por eso fundé CompilandoConocimiento.",
    ],
    tags: ["Computólogo", "Siempre aprendiendo", "Amante de las matemáticas"],
  },
}

export default AboutMe
