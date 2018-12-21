import React from "react"

interface AboutMe {
    SayHi: JSX.Element,
    ShowMyCV: string,
    Description: JSX.Element
}

const AboutMeSpanish: AboutMe = {
    SayHi: <span> Hola, <b>Soy Oscar</b> </span>,
    ShowMyCV: "VER MI CURRICULUM",
    Description: (
        <span className="blue-grey-text text-darken-4">
            Nerd.

            <br />

            Computólogo, adicto a los memes y a la vida en la biblioteca,
            muy interesado en la programación competitiva, aunque sea un asco.
            Creo que la web es la plataforma del futuro.
            Amante de la matemática pura, el machine learning, economía
            y filosofía.

            <br />

            Fundador de CompilandoConocimiento.

            <br />

            Ciudadano del mundo.

            <br />
            <br />
            
            <span className="chip">Amante de la computación</span>
            <span className="chip">Siempre un estudiante</span>
            <span className="chip">Amante de las matemáticas</span>
                
        </span>
    ),
}

const AboutMeEnglish: AboutMe = {
    SayHi: <span>Hi, Im <b>Oscar</b></span>,
    ShowMyCV: "SEE MY CURRICULUM",
    Description: (
        <span className="blue-grey-text text-darken-4">
            Nerd.

            <br />

            Computer scientist, addicted to memes and the life in the library,
            interested in competitive programming, even if I suck.
            I believe that the web is the platform of the future.
            Lover of pure mathematics, the more useless the better, economics
            and philosophy.

            <br />

            Founder of CompilandoConocimiento.

            <br />

            World citizen.

            <br />
            <br />
            
            <span className="chip">Computer Science </span>
            <span className="chip">Math enthusiast  </span>
            <span className="chip">Always a student </span>
                
        </span>
    ),
}

const AboutMeData = {
    Spanish: AboutMeEnglish, 
    English: AboutMeSpanish
}

export default AboutMeData