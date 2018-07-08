// =====================================================================
// ============                 IMPORTS            =====================
// =====================================================================
import React from "react"


// =====================================================================
// ============                 ABOUT ME           =====================
// =====================================================================
	const AboutMeSpanish = {
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
		CompetitiveReference: {
			Title: (<span> <b>Competitive</b>Reference</span>),
			Type: "Project",
			LinkToProject: "https://github.com/CompilandoConocimiento/Reference",
			Color: "blue-grey darken-3",
			English: (
				<span>
					This is all my personal implementations of the most famous and
					useful competitive programming algorithms.

					<br />
					<br />

					Most of the implementations are in C++, but you can also find them in
					C and even in Python & Java.

					<br />
					<br />

					Im also working on creating a Reference (Book & Website) so many more
					people can benefit from it, and get further along in this awesome mind-sport.
				</span>
			),
			Spanish: (
				<span>
					Recopilación de mis implementaciones personales de los más famosos y útiles
					algoritmos de la programación competitiva.

					<br />
					<br />

					La mayoría de las implementaciones están en C ++, pero también puedes encontrar
					algunas en C e incluso en Python y Java.

					<br />
					<br />

					También estoy trabajando en la creación de un "Refence" (libro y sitio web)
					para que así más personas puedan beneficiarse de esto y avanzar más en este
					increíble deporte mental.
				</span>
			),
			Topics: ["C++", "Competitive Programming", "Book"],
		},
		TdeTiendita: {
			Title: (<span> <b>T</b>de<b>Tiendita</b></span>),
			Type: "Project",
			LinkToProject: "https://github.com/SoyOscarRH/TdeTiendita",
			Color: "deep-purple lighten-1",
			English: (
				<span>
					This is a UNFINISHED mini project for a web system (Flask as BackEnd)
					that can control the local store of my family.
					<br />
					<br />
					It allow us to sell products using barcodes, sell by quantity and by price, also 
					it allows us to edit products and add keyboard shorcuts.
					<br />
					<br />
					All the code and documentation is in english, but all the text inside the app is
					in spanish (my mother tongue).
				</span>
			),
			Spanish: (
				<span>
					Mini proyecto INCOMPLETO para una sistema web (Flask como BackEnd)
					que puede controlar la tienda de abarrotes de mi familia.
					<br />
					<br />
					Permite vender productos usando un código de barras así como vender por cantidad
					o por precio.
					Manejar usuarios, editar productos y añadir atajos de teclado.
					<br />
					<br />
					Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
					en español.
				</span>
			),
			Topics: ["React", "SPA", "Python-Flask", "MaterializeCSS", "MVP"],
		},
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
				<React.Fragment>
					&nbsp;
					<span className="hide-on-med-and-down">
						<b>Longest</b>Common<b>Subsequence</b>
					</span>

					<span className="hide-on-large-only">
						<b>L</b>C<b>S</b>
					</span>
				</React.Fragment>
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
		AlphabetSoup: {
			Title: (<span> <b>Alphabet</b>Soup</span>),
			Type: "Project",
			LinkToProject: "https://github.com/SoyOscarRH/AlphabetSoup",
			Color: "pink lighten-1",
			English: (
				<span>
					Simple game made with React to make people happy. Just for fun.

					<br />

					As in many projects, code is in english and text is in spanish.
				</span>
			),
			Spanish: (
				<span>
					Un simple juego hecho con React para hacer a la gente feliz, solo
					esta hecho por diversión.
				</span>
			),
			Topics: ["Javascript", "React", "MaterializeCSS", "Sideproject"],
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
		},
	}

// =====================================================================
// ============                 SIDE BAR           =====================
// =====================================================================

	const ProjectsAndPrograms = [] 
	Object.entries(Projects).forEach( ([Key, Values]) => {
		ProjectsAndPrograms.push(
			[<span>&nbsp;&nbsp;{Values.Title}</span>, Key, Values.Type]
		)
	})

	const SideMenuSpanish = {
		AboutMe: {
			Title: "Personal",
			Links: [
				[<span>&nbsp;&nbsp;&nbsp;Sobre Mi</span>, "AboutMe"],
				[<span>&nbsp;&nbsp;&nbsp;Curriculum</span>, "AboutMe"],
			]
		},
		Projects: {
			Title: "Proyectos",
			Links: ProjectsAndPrograms.filter( e => e[2] === "Project")
		},
		Programs: {
			Title: "Programas",
			Links: ProjectsAndPrograms.filter( e => e[2] === "Program")
		}
	}

	const SideMenuEnglish = {
		AboutMe: {
			Title: "Personal",
			Links: [
				[<span>&nbsp;&nbsp;&nbsp;About Me</span>, "AboutMe"],
				[<span>&nbsp;&nbsp;&nbsp;Curriculum</span>, "AboutMe"],
			]
		},
		Projects: {
			Title: "Projects",
			Links: ProjectsAndPrograms.filter( e => e[2] === "Project")
		},
		Programs: {
			Title: "Programs",
			Links: ProjectsAndPrograms.filter( e => e[2] === "Program")
		}
	}

// =====================================================================
// ============                EXPORT              =====================
// =====================================================================


export const Data = {
	AboutMe: {
		Spanish: AboutMeSpanish,
		English: AboutMeEnglish,
	},
	Projects: Projects,
	SideMenu: {
		Spanish: SideMenuSpanish,
		English: SideMenuEnglish,
	}
}