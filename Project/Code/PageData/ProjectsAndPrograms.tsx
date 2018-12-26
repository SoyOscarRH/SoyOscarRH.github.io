import React from "react"
import {LanguageOption} from "./index"

export interface Project {
    Title: JSX.Element,
    Type: "Project" | "Program",
    LinkToProject: string, 
    CheckOut?: string,
    Color: string,
    English: JSX.Element,
    Spanish: JSX.Element,
    Topics: LanguageOption<Array<string>>,
}

export interface Projects {
    [key: string]: Project,
}

const ProjectsAndProgramsData: Projects = {
    CompetitiveReference: {
        Title: (<span> <b>Competitive</b>Reference</span>),
        Type: "Project",
        LinkToProject: "https://github.com/CompilandoConocimiento/Reference",
        CheckOut: "https://compilandoconocimiento.github.io/Reference/",
        Color: "blue-grey darken-3",
        English: (
            <span>
                This is all my personal implementations of the most famous and
                useful competitive programming algorithms.

                <br />
                <br />

                Most of the implementations are in C++, but you can also find them in
                C and even in Python and Java.

                <br />
                <br />

                I'm also working on creating a Reference (Book & Website) so many more
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
            English: ["Competitive Programming", "C++", "Webapp", "React", "Typescript", "Book",],
            Spanish: ["Programación Competitiva", "C++", "Webapp", "React", "Typescript", "Libro",],
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

                I work to keep my solutions as readable and clear as possible, but 
                (do to the nature of this sport) in this project I can't promise anything. I am sorry. :(

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
                sea posible, pero (debido a la naturaleza del deporte) en este
                proyecto no te puedo prometer nada. Lo siento. :(
            </span>
        ),
        Topics: {
            English: ["C++", "Competitive Programming", "Solutions", "Online Judges"],
            Spanish: ["C++", "Programación Competitiva", "Soluciones", "Jueces en línea"],
        },
    },
    DIYCompiler: {
        Title: (<span> <b>DUY</b> Compiler</span>),
        LinkToProject: "https://github.com/SoyOscarRH/Compiler",
        Type: "Project",
        CheckOut: "https://compilandoconocimiento.github.io/Compiler/#/grammars",
        Color: "orange",
        English: (
            <span>
               This was a school project for my Compiler class.

                <br />
                <br />

                It allows you to create tokens, automatas and grammars; and with them a lexical and syntactical analyzer.
                This have been the most ambitious project I have participated on; also, I did not do this alone, but with
                the help of Alan Ontiveros and Laura Lopez, my classroom partners and friends.

                <br />
                <br />
                All the code and documentation is in English, but all the text inside the app is
                in Spanish (my mother tongue).
            </span>
        ),
        Spanish: (
            <span>
                Esto fue un proyecto para mi clase de Compiladores. 
                
                <br />
                <br />
                
                Permite la creación de tokens, autómatas y gramáticas; y con ellas crear un analizador
                sintáctico y semántico. Este ha sido el proyecto más ambicioso en el que he participado;
                eso si, no he hecho este proyecto solo, sino con la ayuda de Alan Ontivieros y Laura Lopez, mis 
                compañeros de clase y amigos.
                
                <br />
                <br />
                
                Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
                en español.
            </span>
        ),
        Topics: {
            English: ["MaterializeCSS", "React", "Typescript", "Class project", "SPA", ],
            Spanish: ["MaterializeCSS", "React", "Typescript", "Projecto de clase", "SPA", ],
        },
    },
    Binary: {
        Title: (<span> <b>Binary</b>Conversions</span>),
        LinkToProject: "https://github.com/CompilandoConocimiento/Binary",
        Type: "Project",
        CheckOut: "https://compilandoconocimiento.github.io/Binary/#/FromBinarytoComplement2/",
        Color: "green",
        English: (
            <span>
                This was a simple project for fun to really understand floating-point numbers / arithmetic and
                binary conversions (complement-1 and complement 2).

                <br />
                <br />

                It allows you to transform a binary number to decimal and backwards, the basic ideas for represent negative
                integers (complement 1, complement 2 and partial representation) and IEEE floating-point.

                <br />
                <br />
                All the code and documentation is in English, but all the text inside the app is
                in Spanish (my mother tongue).
            </span>
        ),
        Spanish: (
            <span>
                Este fue un proyecto pequeño para ayudarme a comprender realmente los números de punto flotante  y su
                aritmética y las conversiones binarias (complemento 1 y complemento 2).
                
                <br />
                <br />

                Le permite transformar un número binario a decimal y al réves, las ideas básicas para representar
                a los negativos (complemento 1, complemento 2 y la representación parcial) y sobre el punto flotante 
                de la IEEE.
                
                <br />
                <br />
                
                Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
                en español.
            </span>
        ),
        Topics: {
            English: ["MaterializeCSS", "React", "One Nih project", "SPA", "One night project"],
            Spanish: ["MaterializeCSS", "React", "Projecto de clase", "SPA", "Projecto de una noche"],
        },
    },
    OrganizeAnEvent: {
        Title: (<span> <b>Organize</b>An<b>Event</b></span>),
        Type: "Project",
        LinkToProject: "https://github.com/SoyOscarRH/OrganizeAnEvent",
        Color: "yellow darken-2",
        English: (
            <span>
                This is a minimum viable product for a web system 
                to control assistance and documents to an academic ceremony.
                <br />
                <br />
                It allows us to pass assistance using bar codes and QR inside the web app.
                Also, it allows us to get the statistics of the event (in PDF) and to send the invitations
                through email.

                <br />
                It allow to have differents types fo users (normal and admins).
                <br />
                <br />
                All the code and documentation is in english, but all the text inside the app is
                in spanish (my mother tongue).
            </span>
        ),
        Spanish: (
            <span>
                Este es el mínimo producto viable para una sistema web
                que pueda controlar un sistema para ceremonias académicas.
                <br />
                <br />
                Permite pasar asitencia usando códigos de barras y QR dentro de la aplicación.
                También nos permite crear PDF con las estadísticas del evento y enviar
                las invitaciones por email.
                <br />
                <br />
                Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
                en español.
            </span>
        ),
        Topics: {
            English: ["MVP", "CRUD", "MaterializeCSS", "React", "Typescript", "PHP", "MySQL",],
            Spanish: ["MVP", "Altas Bajas Cambios", "MaterializeCSS", "React", "Typescript", "PHP", "MySQL",],
        },
    },
    TdeTiendita: {
        Title: (<span> <b>T</b>de<b>Tiendita</b></span>),
        Type: "Project",
        LinkToProject: "https://github.com/SoyOscarRH/TdeTiendita",
        Color: "deep-purple lighten-1",
        English: (
            <span>
                This is a minimum viable product for a web system 
                that can control the local store of my family.
                <br />
                <br />
                It allow us to sell products using barcodes, sell by quantity and by price, also 
                it allows us to edit products and uses keyboard shorcuts.

                <br />
                It allow to have differents types fo users.
                <br />
                <br />
                All the code and documentation is in english, but all the text inside the app is
                in spanish (my mother tongue).
            </span>
        ),
        Spanish: (
            <span>
                Este es el mínimo producto viable para una sistema web
                que puede controlar la tienda de abarrotes de mi familia.
                <br />
                <br />
                Permite vender productos usando un código de barras así como vender por cantidad
                o por precio, manejar usuarios, editar productos y añadir atajos de teclado.
                <br />
                <br />
                Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
                en español.
            </span>
        ),
        Topics: {
            English: ["SPA", "MVP", "CRUD", "MaterializeCSS", "React", "Python-Flask", "MySQL"],
            Spanish: ["SPA", "MVP", "Altas Bajas Cambios", "MaterializeCSS", "React", "Python-Flask", "MySQL"],
        },
    },
    ManageYourCinema: {
        Title: (<span> <b>Manage</b>Your<b>Cinema</b> </span>),
        LinkToProject: "https://github.com/SoyOscarRH/ManageYourCinema",
        Type: "Project",
        Color: "teal",
        English: (
            <span>
                This is a UNFINISHED mini project for a web system
                that can control a cinema (candy shop and tickets)
                
                <br />
                <br />

                It allows to create users and manage them, sell candy and popcorn, an the movie tickets.

                <br />
                <br />
                All the code and documentation is in english, but all the text inside the app is
                in spanish (my mother tongue).
            </span>
        ),
        Spanish: (
            <span>
                Mini proyecto INCOMPLETO para una sistema web
                que puede controlar un cine (venta de dulces y boletos)
                
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
            English: ["CRUD", "MaterializeCSS", "jQuery", "PHP", "MySQL", ],
            Spanish: ["Altas Bajas Cambios", "MaterializeCSS", "jQuery", "PHP", "MySQL", ],
        },
    },
    CreatingWithLaTeX: {
        Title: (<span> <b>Creating</b>With<b>LaTeX</b></span>),
        Type: "Project",
        LinkToProject: "https://github.com/CompilandoConocimiento/CreatingWithLatex/",
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
        CheckOut: "https://soyoscarrh.github.io/LCS/",
        Type: "Project",
        Color: "blue",
        English: (
            <span>
                This is a webapp that can simulate the solution of the famous
                problem of the Longest Common Subsequence of any 2 strings step by step.
                This is solve using DP (dynamic programming) using a bottom-up aproach table.

                <br />
                <br />

                All the code and documentation is in english, but all the text inside the app is
                in spanish (my mother tongue).
            </span>
        ),
        Spanish: (
            <span>
                Esta es una aplicación web para aprender React, este juego puede simular la solución del
                famoso problema de la Subsecuencia común más larga de cualquiera 2 cadenas
                paso por paso.

                <br />
                <br />

                Todo el código fuente esta en inglés, pero todo el texto interno de la aplicación esta
                en español.
            </span>
        ),
        Topics: {
            English: ["Javascript", "React", "MaterializeCSS", "DP", "Competitive Programming", "One night project"],
            Spanish: ["Javascript", "React", "MaterializeCSS", "DP", "Programación Competitiva", "Projecto de una noche"]
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
                using this curves, I assure you, they are beautiful.

            </span>
        ),
        Spanish: (
            <span>
                Una simple función que dibuja las curvas de Bezier y algunos ejemplos de cómo usarlo,
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
    Fractals: {
        Title: (<span><b>Fractals</b></span>),
        Type: "Program",
        LinkToProject: "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/Fractals",
        Color: "yellow accent-4",
        English: (
            <span>
                This is a program in Python to graph a simple fractal, for now is only
                the Sierpinkski triangle.
            </span>
        ),
        Spanish: (
            <span>
                Este es un programa en Python para graficar un simple fractal, por
                ahora solo he implementado el triangulo de Sierpinkski.
            </span>
        ),
        Topics: {
            English: ["Python", "Turtle", "Fractals"],
            Spanish: ["Python", "Turtle", "Fractales"],
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
                over a data set. It also give you the Pearson Coefficient.
            </span>
        ),
        Spanish: (
            <span>
                Este es un programa en Python usando Matplotlib para calcular  y grafica la regresión lineal
                sobre un conjunto de datos. También te da el coeficiente de Pearson.
            </span>
        ),
        Topics: {
            English: ["Python2", "Matplotlib", "LinearRegression"],
            Spanish: ["Python2", "Matplotlib", "Regresión Líneal"],
        },
    },
    RootFinder: {
        Title: (<span> <b>Root</b>Finder</span>),
        Type: "Program",
        LinkToProject: "https://github.com/SoyOscarRH/LearningJava/tree/master/RootFinder",
        Color: "pink lighten-2",
        English: (
            <span>
                This is a simple program in Python to find
                the n-roots of a complex number.

                <br />
                <br />

                It works, but is ugly and ... it is on Python 2.
            </span>
        ),
        Spanish: (
            <span>
                Este es un simple programa en Python para
                encontrar las n-raíces de un número complejo.

                <br />
                <br />

                Funciona y todo, pero es feo y ... esta en Python 2.
            </span>
        ),
        Topics: {
            English: ["Python3", "Math", "Complex Analysis"],
            Spanish: ["Python3", "Matemáticas", "Análisis Complejo"],
        },
    },
    LearningFlutter: {
        Title: (<span> <b>Learning</b>Flutter</span>),
        Type: "Program",
        LinkToProject: "https://github.com/SoyOscarRH/LearningFlutter",
        Color: "grey darken-2",
        English: (
            <span>
                Simple apps that I made in a Google Development Group boot camp
                designed to learn the Flutter SDK.
                <br />

                Code and text is in English.
                <br />
                <br />

                The first app show an infinite random generated list of Startups
                made by using the most commons words in English and an option to
                save them. Also, I made an app that show many dishes in a list.
            </span>
        ),
        Spanish: (
            <span>
                Conjunto de apps que hice durante un boot camp en un Google Development Group
                diseñado para aprender Flutter.
                
                <br />

                En este projecto tanto el código como el texto esta en inglés.

                <br />
                <br />

               La primera app muestra una lista infinita (generada aleatoriamente)
               de posibles nombres para Startups, los nombres se generan usando las palabras
               más comúnes del idioma inglés. Además hice una app que muestra platillos en una lista.
            </span>
        ),
        Topics: {
            English: ["Flutter", "Dart", "GDG", "One night project"],
            Spanish: ["Flutter", "Dart", "GDG", "Projecto de una noche"]
        },
    },
    AlphabetSoup: {
        Title: (<span> <b>Alphabet</b>Soup</span>),
        Type: "Program",
        LinkToProject: "https://github.com/SoyOscarRH/AlphabetSoup",
        CheckOut: "https://soyoscarrh.github.io/AlphabetSoup/",
        Color: "pink lighten-1",
        English: (
            <span>
                Simple game made to learn React, this game is just to make people happy. Just for fun.

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
                de las palabras, así como cambiar el tamaño del tablero y activar
                pistas.
            </span>
        ),
        Topics: {
            English: ["Javascript", "React", "MaterializeCSS", "One night project"],
            Spanish: ["Javascript", "React", "MaterializeCSS", "Projecto de una noche"]
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

export default ProjectsAndProgramsData