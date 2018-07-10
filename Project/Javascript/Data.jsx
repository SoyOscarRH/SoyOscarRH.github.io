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
			Topics: {
				English: ["C++", "Competitive Programming", "Book"],
				Spanish: ["C++", "Programación Competitiva", "Libro"],
			},
		},
		CompetitiveSolutions: {
			Title: (<span> <b>Competitive</b>Solutions</span>),
			Type: "Project",
			LinkToProject: "https://github.com/CompilandoConocimiento/CompetitiveSolutions",
			Color: "red",
			English: (
				<span>
					This is a repository to store all the solutions for 
					competitive programming problems on Judges online like
					OmegaUp, Codeforces, SPOJ, UVa and many more.

					<br />
					<br />

					Most of the solutions are in C++, because sincerely solving problems
					of this kind in this language is awesome.

					<br />
					<br />

					I work to keep my solutions as readable and clear as possible, but in
					this project I can't promise anything. I am sorry.

				</span>
			),
			Spanish: (
				<span>
					Este es un repositorio para guardar todas las soluciones para los
					problemas de programación competitiva en jueces en línea como
					OmegaUp, Codeforces, SPOJ, UVa y muchos más.

					<br />
					<br />

					La mayoría de las soluciones están en C++, porque resolver
					esa clase de problemas en este lenguaje es increíble.

					<br />
					<br />

					Trabajo para mantener mis soluciones tan legibles y claras como
					sea posible, pero en este proyecto no te puedo prometer nada.
					Lo siento.
				</span>
			),
			Topics: {
				English: ["Competitive Programming", "Solutions", "Online Judges"],
				Spanish: ["Programación Competitiva", "Soluciones", "Jueces en línea"],
			},
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
			Topics: {
				English: ["React", "SPA", "Python-Flask", "MaterializeCSS", "MVP"],
				Spanish: ["React", "SPA", "Python-Flask", "MaterializeCSS", "MVP"],
			},
		},
		ManageYourCinema: {
			Title: (<span> <b>Manage</b>Your<b>Cinema</b> </span>),
			LinkToProject: "https://github.com/SoyOscarRH/ManageYourCinema",
			Type: "Project",
			Color: "teal",
			English: (
				<span>
					This is a UNFINISHED mini project for a web system (PHP as BackEnd)
					that can control a cinema
					
					<br />
					<br />

					Allows to create users and manage them, sell candy and popcorn, an the movie tickets.

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
					
					<br />
					<br />
					
					Permite crear usuarios y administrárlos, vender dulces y palomitas, y las
					entradas para el cine.
					
					<br />
					<br />
					
					Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
					en español.
				</span>
			),
			Topics: {
				English: ["Javascript", "PHP", "MaterializeCSS", "MySQL", "jQuery"],
				Spanish: ["Javascript", "PHP", "MaterializeCSS", "MySQL", "jQuery"],
			},
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
			Topics: {
				English: ["Javascript", "React", "MaterializeCSS", "DP", "Competitive Programming"],
				Spanish: ["Javascript", "React", "MaterializeCSS", "DP", "Programación Competitiva"]
			},
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
					<br />
					<br />

					You can choose beetwen many categories, see a visual help of the
					words that you have not found yet, you can change
					the grid size and even activate hints to find the words.
				</span>
			),
			Spanish: (
				<span>
					Un simple juego hecho con React para hacer a la gente feliz, solo
					esta hecho por diversión.
					
					<br />

					Como muchos otros proyectos, el código fuente esta en ingles,
					pero todo el texto el las palabras a buscar estan es español.

					<br />
					<br />

					Puedes elegir entre varias categorías para elegir el tema
					de las palabras, así como cambiar el tamaó del tablero y activar
					pistas.
				</span>
			),
			Topics: {
				English: ["Javascript", "React", "MaterializeCSS", "Sideproject"],
				Spanish: ["Javascript", "React", "MaterializeCSS", "Projecto Personal"]
			},
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

					<br />
					<br />

					Also I have examples of many figures that you can create 
					using this Curves, I assure you, they are beautiful.

				</span>
			),
			Spanish: (
				<span>
					Una simple función que dibuja las Curvas de Bezier y algunos ejemplos de cómo usarlo,
					y los resultados que obtienes al cambiar los parámetros.

					<br />
					<br />

					También tengo ejemplos de muchas figuras que puedes crear
					usando estas curvas, te lo aseguro, son hermosas.

				</span>
			),
			Topics: {
				English: ["Java", "Math", "Java Swing"],
				Spanish: ["Java", "Matemáticas", "Java Swing"],
			},
		},
		CreatingWithLaTeX: {
			Title: (<span> <b>Creating</b>With<b>LaTeX</b></span>),
			Type: "Program",
			LinkToProject: "https://github.com/SoyOscarRH/LearningJava/tree/master/CreatingWithLaTeX",
			Color: "cyan accent-3",
			English: (
				<span>
					This is where I put all the things that I need when working with LaTeX:
					code to insert an image, make covers, insert tables.

					<br />
					<br />

					Also, here I save a the header I use in almost all my files, which
					have many math commands for easier and higher level equations as
					\Cis, \UpperDerivate, \BigBrackets, \GenericField, etc...
				</span>
			),
			Spanish: (
				<span>
					Aquí es donde pongo todas las cosas que necesito cuando trabajo
					con LaTeX: código para insertar una imagen, hacer cubiertas,
					insertar tablas.

					<br />
					<br />

					Además, aquí guardo el encabezado que uso en casi todos mis archivos,
					que tienen muchos comandos matemáticos para un manejo más fácil y
					de mayor nivel como: 
					\Cis, \UpperDerivate, \BigBrackets, \Generic Field, etc...
				</span>
			),
			Topics: {
				English: ["LaTeX", "Math", "Reference"],
				Spanish: ["LaTeX", "Matemáticas", "Referencia"],
			},
		},
		RootFinder: {
			Title: (<span> <b>Root</b>Finder</span>),
			Type: "Program",
			LinkToProject: "https://github.com/SoyOscarRH/LearningJava/tree/master/RootFinder",
			Color: "pink lighten-2",
			English: (
				<span>
					This is a simple program in Python (Python2 :v) to find
					the n-roots of a complex number.

					<br />
					<br />

					It works, but is ugly and ... it is on Python 2
				</span>
			),
			Spanish: (
				<span>
					Este es un simple programa en Python (Python2 :v) para
					encontrar las n-raíces de un número complejo.

					<br />
					<br />

					Funciona y todo, pero es feo y ... esta en Python 2
				</span>
			),
			Topics: {
				English: ["Python3", "Math", "Complex Analysis"],
				Spanish: ["Python3", "Matemáticas", "Análisis Complejo"],
			},
		},
		LinearRegression: {
			Title: (<span> <b>Linear</b>Regression</span>),
			Type: "Program",
			LinkToProject: "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/LinearRegression",
			Color: "green lighten-1",
			English: (
				<span>
					This is a program in Python using Matplotlib to calculate and graph the linear regression
					over a data set. It algo give you the Pearson Coefficient
				</span>
			),
			Spanish: (
				<span>
					Este es un programa en Python usando Matplotlib para calcular  y grafica la regresión lineal
					sobre un conjunto de datos. Algo te da el coeficiente de Pearson
				</span>
			),
			Topics: {
				English: ["Python2", "Matplotlib", "LinearRegression"],
				Spanish: ["Python2", "Matplotlib", "Regresión Líneal"],
			},
		},
		Fractals: {
			Title: (<span><b>Fractals</b></span>),
			Type: "Program",
			LinkToProject: "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/Fractals",
			Color: "yellow accent-4",
			English: (
				<span>
					This is a program in Python to graph a simple fractal, for now is only
					the Sierpinkski Triangle
				</span>
			),
			Spanish: (
				<span>
					Este es un programa en Python para graficar un simple fractal, por
					ahora solo he implementado el triangulo de Sierpinkski
				</span>
			),
			Topics: {
				English: ["Python", "Turtle", "Fractals"],
				Spanish: ["Python", "Turtle", "Fractales"],
			},
		},
		PlayPoker: {
			Title: (<span><b>Play</b>Poker</span>),
			Type: "Program",
			LinkToProject: "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/PlayPoker",
			Color: "indigo lighten-1",
			English: (
				<span>
					This is a program in Python to "play poker", well, sort of, because I have never play
					poker... Is just a weird school exercise.
				</span>
			),
			Spanish: (
				<span>
					Este es un programa en Python para "jugar al póquer", bueno, más o menos,
					porque nunca he jugado al póquer ... Es solo un ejercicio escolar extraño.
				</span>
			),
			Topics: {
				English: ["Python", "Weird", "MVP"],
				Spanish: ["Python", "Raro", "MVP"],
			},
		},
	}



// =====================================================================
// ============                 BOOKS              =====================
// =====================================================================

const AboutBooks = {
	English: (
		<div className="blue-grey-text text-darken-3" style={{textAlign: "justify"}}>
			
			<br />
			<h6 style={{textAlign: "center"}}><b>Books, "Compilados" or Notes?</b></h6>
			<br />

			<span>
				First of all, I have to admit that many of these texts have been written together with
				a lot of people, people who without them I could not have gotten that far, thanks Alan,
				Laura, Abbi, Leilan and all my teachers.

				<br />
				<br />

				<b> So... What the hell are these texts? </ b>

				<br />
				<br />

				The most immediate answer is that these texts (or "Compilados" as I like to tell them)
				Are a compilation of theorems, ideas, examples and important concepts that we learned throughout
				of time on each of the topics.

				<br />
				<br />

				On a regular basis we will be updating these texts with everything new that we learn
				trying to deepen in all these topics and close possible doubts in these pages.
				These "Compilados" try to be as strict as possible, although we are human (and students)
				and it is possible (and even probable) that we make small mistakes from time to time.
				I hope you take these pages as a gift created by imperfect beings with hopes to make
				the world a better place.
			</span>
		</div>
	),
	Spanish: (
		<div className="blue-grey-text text-darken-3" style={{textAlign: "justify"}}>
			
			<br />
			<h6 style={{textAlign: "center"}}><b>¿Libros, Compilados o Apuntes?</b></h6>
			<br />

			<span>
				Antes que nada, tengo que admitir que muchos de estos textos los he escrito con conjunto con
				un montón de gente, gente que sin ellos no podría haber llegado tan lejos, gracias Alan,
				Laura, Abbi, Leilan y a todos mis profesores.

				<br />
				<br />

				<b>Ahora si, ¿Qué demonios son estos textos?</b>

				<br />
				<br />

				La respuesta mas inmediata es que estos texto (o compilado como a mí me gusta decirles)
				son una recopilación de teoremas, ideas, ejemplos y conceptos importantes que aprendímos a lo largo
				del tiempo sobre cada uno de los temas.
				
				<br />
				<br />

				De manera regular estaremos actualizando estos textos con todo aquello nuevo que aprendamos
				intentando profundizar en todos estos temas y cerrar posibles dudas en estas páginas.
				Estos Compilados intentamos ser lo más estrictos posible, aunque somos humanos (y estudiantes)
				y es posible(e incluso probable) que cometamos pequeños errores de vez en cuando.
				Espero que tomes estas páginas como un regalo creado por seres imperfectos pero con muchos
				ánimos de hacer del mundo un lugar mejor, ahora si, abróchate los cinturones que esto acaba de
				empezar.
			</span>

		</div>
	),
}


const BooksData = {
	AnalisisComplejo: {
		Title: (<span> <b>Análisis</b> Complejo</span>),
		LinkToProject: "https://github.com/CompilandoConocimiento/LibroAnalisisComplejo",
		Color: "red lighten-1",
		Intro: {
			English: (
				<span>
					This is the book contains the bases of all the mathematics necessary for complex analysis,
					we will talk about complex numbers, how to operate with them and the various forms that
					we have to represent them.

					<br />
					<br />

					We will see how we can extend the idea of the calculation on complex functions, we will see the
					complex integrals and as they are often easier than "normal" ones.

					<br />
					<br />

					We will see the residuals and the power series and how to simplify all the operations even more.
					We will finally see Fourier, how to make his series, how to make his transform and how it is
					that with solve differential equations is the simplest thing in the world.

					<br />
					<br />

					This book is in Spanish only. Sorry :(
				</span>
			),
			Spanish: (
				<span>
					Este es libro contiene las bases de toda la matemática necesaria para el análisis complejo,
					hablaremos sobre los números complejos, como operar con ellos y las diversas formas que
					tenemos de representarlos.

					<br />
					<br />

					Veremos como podemos extender la idea del Cálculo sobre funciones complejas, veremos las
					integrales complejas y como muchas veces resultan más faciles que las “normales”. 

					<br />
					<br />

					Veremos los residuos y las series de potencias y como simplificar aun más todas las operaciones.
					Veremos finalmente a gran Fourier, como hacer sus series y como hacer su transformada y como es
					que con ella resolver ecuaciones diferenciales es de lo más sencillo del mundo
				</span>
			),
		},
		Topics: {
			English: ["Complex Analysis and Calculus", "Fourier", "Complex Numbers"],
			Spanish: ["Análisis y Cálculo Complejo", "Fourier", "Números Complejos"],
		},
		CoAuthors: "Ángel López Manríquez",
		LinkToReadOnline: "https://github.com/CompilandoConocimiento/LibroAnalisisComplejo/blob/master/AnalisisComplejo.pdf",
		LinkToDownload:"https://github.com/CompilandoConocimiento/LibroAnalisisComplejo/raw/master/AnalisisComplejo.pdf",
	},
	AnalisisComplejo: {
		Title: (<span> <b>Análisis</b> Complejo</span>),
		LinkToProject: "https://github.com/CompilandoConocimiento/LibroAnalisisComplejo",
		Color: "red lighten-1",
		Intro: {
			English: (
				<span>
					This is the book contains the bases of all the mathematics necessary for complex analysis,
					we talk about complex numbers, how to operate with them and the various forms that
					we have to represent them.

					<br />
					<br />

					We see how we can extend the idea of the calculation on complex functions, we will see the
					complex integrals and as they are often easier than "normal" ones.
					We see the residuals and the power series and how to simplify all these operations even more.

					<br />
					<br />

					We finally see Fourier, how to make his series, how to make his transform and how it is
					that with solve differential equations is the simplest thing in the world.

					<br />
					<br />

					This book is in Spanish only. Sorry :(
				</span>
			),
			Spanish: (
				<span>
					Este es libro contiene las bases de toda la matemática necesaria para el análisis complejo,
					hablaremos sobre los números complejos, como operar con ellos y las diversas formas que
					tenemos de representarlos.

					<br />
					<br />

					Veremos como podemos extender la idea del Cálculo sobre funciones complejas, veremos las
					integrales complejas y como muchas veces resultan más faciles que las “normales”. 
					Veremos los residuos y las series de potencias y como simplificar aun más todas las operaciones.

					<br />
					<br />

					Veremos finalmente a gran Fourier, como hacer sus series y como hacer su transformada y como es
					que con ella resolver ecuaciones diferenciales es de lo más sencillo del mundo
				</span>
			),
		},
		Topics: {
			Spanish: [
				{
					Name: "Números Complejos",
					SubTopics: [
						"Heaviside",
						"Funciones Trigonometricos",
						"Definición de i",
						"Definición del Campo de los Complejos",
					]
				},
				{
					Name: "Aritmética Compleja",
					SubTopics: [
						"Operaciones Básicas",
						"Elemento Identidad",
						"Inverso Multiplicativo",
						"Conjugado",
						"Valor Absoluto",
						"Producto Punto y Cruz",
					]
				},
				{
					Name: "Forma Polar",
					SubTopics: [
						"Forma Polar",
						"Argumento de z",
					]
				},
				{
					Name: "Forma de Euler y Raíces",
					SubTopics: [
						"Forma de Euler",
						"Identidad de Lagrange",
						"Ley de Moivre",
						"Raíces",
					]
				},
				{
					Name: "Funciones Complejas",
					SubTopics: [
						"Definición",
						"Fn Hiperbolicas",
						"Fn Trigonometricas",
						"Límites",
					]
				},
				{
					Name: "Derivación",
					SubTopics: [
						"Funciones Analíticas",
						"Continuidad",
						"Ecuaciones de Cauchy-Riemann",
						"Funciones Armónicas",
					]
				},
				{
					Name: "Integración",
					SubTopics: [
						"Teorema de la Deformación",
						"Teorema de Cauchy-Goursat",
						"Teorema de la Integral de Cauchy",
						"Teorema de la Derivación",
					]
				},
				{
					Name: "Series Complejas",
					SubTopics: [
						"Serie Geométrica",
						"Serie de Potencias",
						"Serie de Taylor",
						"Serie de Maclaurin",
						"Serie de Laurent",
						"Polos y Singularidades",
					]
				},
				{
					Name: "Residuos",
					SubTopics: [
						"Definición",
						"Como encontrarlos",
						"Teorema del Residuo de Cauchy",
					]
				},
				{
					Name: "Serie de Fourier",
					SubTopics: [
						"Teorema de Fourier",
						"Coeficientes de Fourier",
						"Serie Compleja",
						"Aplicaciones",
					]
				},
				{
					Name: "Transformada de Fourier",
					SubTopics: [
						"Definición",
						"Integral Compleja de Fourier",
						"Transformadas por Definición",
						"Transformadas de Derivadas",
						"Transformadas de Desplazamientos",
						"Teorema de la Simetría",
						"Teorema de la Escalamiento",
						"Teorema de la Modulación",
						"Transformada Inversa",
						"Convulución",
						"Ecuaciones Diferenciales",
					]
				},
			],
			English: [

			]
		},
		Tags: {
			English: ["Complex Analysis and Calculus", "Fourier", "Complex Numbers"],
			Spanish: ["Análisis y Cálculo Complejo", "Fourier", "Números Complejos"],
		},
		CoAuthors: "Ángel López Manríquez",
		LinkToReadOnline: "https://github.com/CompilandoConocimiento/LibroAnalisisComplejo/blob/master/AnalisisComplejo.pdf",
		LinkToDownload:"https://github.com/CompilandoConocimiento/LibroAnalisisComplejo/raw/master/AnalisisComplejo.pdf",
	},
}







// =====================================================================
// ============                 SIDE BAR           =====================
// =====================================================================

const ProjectsAndPrograms = [] 
Object.entries(Projects).forEach( ([Key, Values]) => {
	ProjectsAndPrograms.push(
		[<span>&nbsp;&nbsp;{Key}</span>, Key, Values.Type]
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
		Links: ProjectsAndPrograms.filter( e => e[2] === "Project" )
	},
	Programs: {
		Title: "Programas",
		Links: ProjectsAndPrograms.filter( e => e[2] === "Program" )
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
		Links: ProjectsAndPrograms.filter( e => e[2] === "Project" )
	},
	Programs: {
		Title: "Programs",
		Links: ProjectsAndPrograms.filter( e => e[2] === "Program" )
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
	Books: {
		Books: BooksData,
		AboutBooks,
	},
	SideMenu: {
		Spanish: SideMenuSpanish,
		English: SideMenuEnglish,
	}

}