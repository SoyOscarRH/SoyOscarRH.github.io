// =====================================================================
// ============                 IMPORTS            =====================
// =====================================================================
import React from "react"


// =====================================================================
// ============                 ABOUT ME           =====================
// =====================================================================
const AboutMeSpanish = {
	Contact: "Contacto",
	SayHi: <span> Hola, <b>Soy Oscar</b> </span>,
	ShowMyCV: "VER MI CURRICULUM",
	Description: (
		<span className="blue-grey-text text-darken-4">
			Nerd.

			<br />

			Computólogo, adicto a los memes y a la vida en la biblioteca,
			interesado en la programación competitiva, aunque sea un asco.
			Creo que la web es la plataforma del futuro.
			Amante de la matemática pura, mientras mas inútil mejor, economía
			y filosofía.

			<br />

			Fundador de CompilandoConocimiento.

			<br />

			Ciudadano del mundo.

			<br />
			<br />
			
			<span className="chip">Programación</span>
			<span className="chip">Matemáticas</span>
			<span className="chip">Estudiante</span>
				
		</span>
	),
}

const AboutMeEnglish = {
	Contact: "Contact",
	SayHi: <span>Hi, Im <b>Oscar</b></span>,
	ShowMyCV: "SEE MY CURRICULUM",
	Description: (
		<span className="blue-grey-text text-darken-4">
			Nerd.

			<br />

			Computer science, addicted to memes and the life in the library,
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
			<span className="chip">Math             </span>
			<span className="chip">Student          </span>
				
		</span>
	),
}








export const Data = {
	AboutMe: {
		Spanish: AboutMeSpanish,
		English: AboutMeEnglish,
	},
}