import React from "react"
import { LanguageOption } from "../code/App/Language"

export interface Program {
  Title: JSX.Element
  LinkToProject: string
  CheckOut?: string
  Color: string
  English: JSX.Element
  Spanish: JSX.Element
  Extension?: string
  Tags: LanguageOption<Array<string>>
}

export interface ProgramsI {
  [key: string]: Program
}

const Programs: ProgramsI = {
  BezierCurve: {
    Title: (
      <span>
        {" "}
        <b>Bezier</b>Curves
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/LearningJava/tree/master/ArtWithLines",
    Color: "orange darken-3",
    English: (
      <span>
        A function that draws Bezier curves and some examples of how to use it, and the results you
        get by changing the parameters.
        <br />
        <br />
        Also, I have examples of many figures that you can create using these curves, I assure you,
        they are beautiful.
      </span>
    ),
    Spanish: (
      <span>
        Una función que dibuja las curvas de Bezier y algunos ejemplos de cómo usarlo, y los
        resultados que obtienes al cambiar los parámetros.
        <br />
        <br />
        También tengo ejemplos de muchas figuras que puedes crear usando estás curvas, te lo
        aseguro, son hermosas.
      </span>
    ),
    Extension: "jpg",
    Tags: {
      English: ["Math", "Bezier", "Java Swing"],
      Spanish: ["Matemáticas", "Bezier", "Java Swing"],
    },
  },
  NumericalAnalysis: {
    Title: (
      <span>
        <b>NumericalAnalysis</b>
      </span>
    ),
    LinkToProject:
      "https://github.com/CompilandoConocimiento/OldCode/tree/master/NumericalAnalysis",
    Color: "blue accent-4",
    English: (
      <span>
        I made some really interesting programs during my numerical analysis class, like LU
        decomposition, Cholesky Banachiewicz, like QR decomposition, House Holder, Newton Raphson,
        the Hermite Interpolant, etc...
        <br />
        <br />
        In the end, I did a program to interpolate curves, so I draw a name using some lists of
        points.
      </span>
    ),
    Spanish: (
      <span>
        Hice algunos programas interesantes durante mi clase de análisis numérico como la
        descomposición LU, Cholesky Banachiewicz, como la descomposición QR, House Holder, Newton
        Raphson, el Hermite de interpolante, etc...
        <br />
        Al final hice un programa para interpolar curvas, así que dibujé un nombre usando unas
        listas de puntos.
      </span>
    ),
    Tags: {
      English: ["Math", "Interpolant", "Spline"],
      Spanish: ["Matematicas", "Interpolante", "Spline"],
    },
  },
  FastGoodCheap: {
    Title: (
      <span>
        <b>FastGoodCheap</b>
      </span>
    ),
    CheckOut: "https://soyoscarrh.github.io/FastGoodCheap/",
    LinkToProject: "https://github.com/SoyOscarRH/FastGoodCheap",
    Color: "red accent-3",
    English: (
      <span>
        A few years ago I found a{" "}
        <b>
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://twitter.com/missingcloudltd/status/826203153934729218", "_blank")
            }
          >
            {" "}
            tweet
          </span>
        </b>{" "}
        that animated the classic idea that you can not have everything in life.
        <br />
        So when I had a free day, I made an application that does just that, three buttons, but it's
        impossible to have them all turned on at the same time, you can edit the text and share your
        creations. :D
      </span>
    ),
    Spanish: (
      <span>
        Hace unos años encontré un
        <b>
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://twitter.com/missingcloudltd/status/826203153934729218", "_blank")
            }
          >
            tweet
          </span>
        </b>{" "}
        que animaba la clásica idea de que no puedes tenerlo todo en la vida.
        <br />
        Así que cuando un día tuve tiempo libre hice una aplicación que hace justo eso, tres
        botones, pero es imposible tenerlos todos encendidos al mismo tiempo, puedes editar el texto
        y compartir tus creaciones. :D
      </span>
    ),
    Tags: {
      English: ["React", "CSS animations", "One Night project", "Simple app"],
      Spanish: ["React", "Animaciones con CSS", "Proyecto de clase", "Simple app"],
    },
  },
  LearningFlutter: {
    Title: (
      <span>
        {" "}
        <b>Learning</b>Flutter
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/LearningFlutter",
    Color: "grey darken-2",
    English: (
      <span>
        Simple apps that I made in a Google Development Group boot camp designed to learn the
        Flutter SDK.
        <br />
        The code and text are in English.
        <br />
        <br />
        The first app show an infinite random generated list of Startups made by using the most
        commons words in English and an option to save them. Also, I made an app that shows many
        dishes on a list.
      </span>
    ),
    Spanish: (
      <span>
        Conjunto de apps que hice durante un boot camp de un Google Development Group diseñado para
        aprender Flutter.
        <br />
        En este proyecto tanto el código como el texto está en inglés.
        <br />
        <br />
        La primera app muestra una lista infinita (generada aleatoriamente) de posibles nombres para
        Startups, los nombres se generan usando las palabras más comunes del idioma inglés. Además
        hice una app que muestra platillos en una lista.
      </span>
    ),
    Tags: {
      English: ["One night project", "Google Development Group", "Flutter", "Dart"],
      Spanish: ["proyecto de una noche", "Google Development Group", "Flutter", "Dart"],
    },
  },
  MyBoilerplates: {
    Title: (
      <span>
        <b>My</b>Boilerplates
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/MyBoilerplates",
    Color: "blue darken-1",
    English: (
      <span>
        A set of my boilerplates for many of my projects: For front end (Babel, Prettier, eslint,
        webpack, typescript configuration, etc...) and for C++ (clang-format) and my editors
        (vs-code-settings)
      </span>
    ),
    Spanish: (
      <span>
        Un conjunto de 'templates' que uso para muchos mis projects: Para frontend (Babel, Prettier,
        eslint, webpack, la configuración de typescript, etc...)
      </span>
    ),
    Extension: "jpg",
    Tags: {
      English: ["Templates", "Personal", "Frontend", "C++"],
      Spanish: ["Templates", "Personal", "Frontend", "C++"],
    },
  },
  LinearRegression: {
    Title: (
      <span>
        {" "}
        <b>Linear</b>Regression
      </span>
    ),
    LinkToProject:
      "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/LinearRegression",
    Color: "green lighten-1",
    English: (
      <span>
        This is a program in Python using Matplotlib to calculate and graph the linear regression
        over a data set. It also gives you the Pearson Coefficient.
      </span>
    ),
    Spanish: (
      <span>
        Este es un programa en Python usando Matplotlib para calcular y gráfica la regresión lineal
        sobre un conjunto de datos. También te da el coeficiente de Pearson.
      </span>
    ),
    Tags: {
      English: ["LinearRegression", "Statistics", "Python2", "Matplotlib"],
      Spanish: ["Regresión Lineal", "estádística", "Python2", "Matplotlib"],
    },
  },
  RootFinder: {
    Title: (
      <span>
        {" "}
        <b>Root</b>Finder
      </span>
    ),
    LinkToProject:
      "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/RootFinder",
    Color: "pink lighten-2",
    English: (
      <span>
        This is a simple program in Python to find the n-roots of a complex number.
        <br />
        <br />
        It works, but is ugly and ... it is on Python 2.
      </span>
    ),
    Spanish: (
      <span>
        Este es un programa en Python para encontrar las n-raíces de un número complejo.
        <br />
        <br />
        Funciona y todo, pero es feo y ... está en Python 2.
      </span>
    ),
    Tags: {
      English: ["Math", "Complex Analysis", "Python2"],
      Spanish: ["Matemáticas", "Análisis Complejo", "Python2"],
    },
  },
  Arquitectura: {
    Title: (
      <span>
        <b>Arquitectura</b>
      </span>
    ),
    LinkToProject: "http://escolares.arq.unam.mx",
    Color: "grey darken-2",
    English: (
      <span>
        I made the design for this page, during my internship at my university, it is not my best
        job, it is, in fact, my first work in web.
        <br />
        <br />
        It is not responsive and the layout is made with table, is horrible, but everyone starts
        somewhere.
      </span>
    ),
    Spanish: (
      <span>
        Yo hice el diseño de esta página, durante mi primer becaria en mi universidad, no es mi
        mejor trabajo, de hecho fue mi primer trabajo relacionado con web.
        <br />
        <br />
        No es rensponsiva y la "layout" esta hecha con tables, es horrible, pero todos empiezan en
        algun lado.
      </span>
    ),
    Tags: {
      English: ["Web", "horrible", ":/"],
      Spanish: ["Web", "horrible", ":/"],
    },
  },
  Fractals: {
    Title: (
      <span>
        <b>Fractals</b>
      </span>
    ),
    LinkToProject:
      "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/Fractals",
    Color: "yellow accent-4",
    English: (
      <span>
        This is a program in Python to graph fractals, for now, is only the Sierpinski triangle.
      </span>
    ),
    Spanish: (
      <span>
        Este es un programa en Python para graficar fractales, por ahora solo he implementado el
        triangulo de Sierpinkski.
      </span>
    ),
    Tags: {
      English: ["Fractals", "Sierpinkski", "Python", "Turtle"],
      Spanish: ["Fractales", "Sierpinkski", "Python", "Turtle"],
    },
  },
  AlphabetSoup: {
    Title: (
      <span>
        {" "}
        <b>Alphabet</b>Soup
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/AlphabetSoup",
    CheckOut: "https://soyoscarrh.github.io/AlphabetSoup/",
    Color: "pink lighten-1",
    English: (
      <span>
        A game made to learn React, this game is just to make people happy. Just for fun.
        <br />
        As in many projects, code is in english and text is in spanish.
        <br />
        <br />
        You can choose between many categories, see the visual help of the words that you have not
        found yet, you can change the grid size, and even activate hints to find the words.
      </span>
    ),
    Spanish: (
      <span>
        Una sopa de letras hecho con React para hacer a la gente feliz, solo está hecho por
        diversión.
        <br />
        Como muchos otros proyectos, el código fuente está en ingles, pero todo el texto el las
        palabras a buscar están es español.
        <br />
        <br />
        Puedes elegir entre varias categorías para elegir el tema de las palabras, así como cambiar
        el tamaño del tablero y activar pistas.
      </span>
    ),
    Tags: {
      English: ["Javascript", "React", "MaterializeCSS", "One night project"],
      Spanish: ["Javascript", "React", "MaterializeCSS", "proyecto de una noche"],
    },
  },
  PlayPoker: {
    Title: (
      <span>
        <b>Play</b>Poker
      </span>
    ),
    LinkToProject:
      "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/PlayPoker",
    Color: "indigo lighten-1",
    English: (
      <span>
        This is a program in Python to "play poker", well, sort of, because I have never played
        poker... Is just a weird school exercise.
      </span>
    ),
    Spanish: (
      <span>
        Este es un programa en Python para "jugar al póquer", bueno, más o menos, porque nunca he
        jugado al póquer ... Es solo un ejercicio escolar extraño.
      </span>
    ),
    Tags: {
      English: ["Weird project", "Sketch", "Python"],
      Spanish: ["Un proyecto raro", "Sketch", "Python"],
    },
  },
}

export default Programs
