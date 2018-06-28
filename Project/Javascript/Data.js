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
				<span className="chip">Math             </span>
				<span className="chip">Student          </span>
					
			</span>
		),
	}




// =====================================================================
// ============                 PROJECTS           =====================
// =====================================================================
	const Projects = {
		ManageYourCinema: {
			Title: (<span> <b>Manage</b>Your<b>Cinema</b> </span>),
			LinkToProject: "https://github.com/SoyOscarRH/ManageYourCinema",
			Type: "Project",
			Color: "teal",
			English: (
				<span>
					This is a UNFINISHED mini project for a web system (PHP as BackEnd)
					that can control a cinema:
					Creating users and managing them, selling candy and popcorn, an the movie tickets.

					<br />
					<br />
					All the code and documentation is in english, but all the text inside the app is
					in spanish (my mother tongue).
				</span>
			),
			Spanish: (
				<span>
					Mini proyecto INCOMPLETO para una sistema web (PHP como BackEnd)
					que puede controlar un cine:
					Permite crear usuarios y administrárlos, vender dulces y palomitas de maíz, y las
					entradas para el cine.
					<br />
					<br />
					Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
					en español.
				</span>
			),
			Topics: ["Javascript", "PHP", "MaterializeCSS", "MySQL", "jQuery"],
		},
		LCS: {
			Title: (
				<div>
					<span className="hide-on-med-and-down">
						<b>Longest</b>Common<b>Subsequence</b>
					</span>

					<span className="hide-on-large-only">
						<b>L</b>C<b>S</b>
					</span>
				</div>
			),
			LinkToProject: "https://github.com/SoyOscarRH/LCS",
			Type: "Project",
			Color: "blue",
			English: (
				<span>
					This is a webapp made with React that can simulate the solution of the famous
					problem of the Longest Common Subsequence of any 2 strings step by step.
					This is done with a DP (dynamic programming) using a bottom-up aproach table.

					<br />
					<br />

					All the code and documentation is in english, but all the text inside the app is
					in spanish (my mother tongue).

				</span>
			),
			Spanish: (
				<span>
					Esta es una aplicación web creada con React que puede simular la solución del
					famoso problema de la Subsecuencia común más larga de cualquiera 2 cadenas
					paso por paso.

					<br />
					<br />

					Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
					en español.
				</span>
			),
			Topics: ["Javascript", "React", "MaterializeCSS", "DP", "Competitive Programming"],
		},
		BezierCurve: {
			Title: (<span> <b>Bezier</b>Curves</span>),
			Type: "Program",
			LinkToProject: "https://github.com/SoyOscarRH/LearningJava/tree/master/ArtWithLines",
			Color: "orange darken-3",
			English: (
				<span>
					A simple function that draws Bezier curves and some example of how to use it, and
					the results you get by changing the paramaters.
				</span>
			),
			Spanish: (
				<span>
					Una simple función que dibuja las Curvas de Bezier y algunos ejemplos de cómo usarlo,
					y los resultados que obtienes al cambiar los parámetros.
				</span>
			),
			Topics: ["Java", "Legacy", "Math", "Java Swing"],
		}
	}


export const Data = {
	AboutMe: {
		Spanish: AboutMeSpanish,
		English: AboutMeEnglish,
	},
	Projects: Projects,
}