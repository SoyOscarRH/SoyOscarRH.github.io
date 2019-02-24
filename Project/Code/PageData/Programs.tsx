import React from "react"
import { LanguageOption } from "./index"

export interface Program {
  Title: JSX.Element
  Type: "Project" | "Program"
  LinkToProject: string
  CheckOut?: string
  Color: string
  English: JSX.Element
  Spanish: JSX.Element
  Topics: LanguageOption<Array<string>>
}

export interface ProgramsI {
  [key: string]: Program
}

const ProjectsAndProgramsData: ProgramsI = {
  BezierCurve: {
    Title: (
      <span>
        {" "}
        <b>Bezier</b>Curves
      </span>
    ),
    Type: "Program",
    LinkToProject:
      "https://github.com/SoyOscarRH/LearningJava/tree/master/ArtWithLines",
    Color: "orange darken-3",
    English: (
      <span>
        A function that draws Bezier curves and some example of how to use it,
        and the results you get by changing the paramaters.
        <br />
        <br />
        Also I have examples of many figures that you can create using this
        curves, I assure you, they are beautiful.
      </span>
    ),
    Spanish: (
      <span>
        Una función que dibuja las curvas de Bezier y algunos ejemplos de cómo
        usarlo, y los resultados que obtienes al cambiar los parámetros.
        <br />
        <br />
        También tengo ejemplos de muchas figuras que puedes crear usando estás
        curvas, te lo aseguro, son hermosas.
      </span>
    ),
    Topics: {
      English: ["Math", "Bezier", "Java Swing"],
      Spanish: ["Matemáticas", "Bezier", "Java Swing"],
    },
  },
  Fractals: {
    Title: (
      <span>
        <b>Fractals</b>
      </span>
    ),
    Type: "Program",
    LinkToProject:
      "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/Fractals",
    Color: "yellow accent-4",
    English: (
      <span>
        This is a program in Python to graph fractals, for now is only the
        Sierpinkski triangle.
      </span>
    ),
    Spanish: (
      <span>
        Este es un programa en Python para graficar fractales, por ahora solo he
        implementado el triangulo de Sierpinkski.
      </span>
    ),
    Topics: {
      English: ["Fractals", "Sierpinkski", "Python", "Turtle"],
      Spanish: ["Fractales", "Sierpinkski", "Python", "Turtle"],
    },
  },
  LinearRegression: {
    Title: (
      <span>
        {" "}
        <b>Linear</b>Regression
      </span>
    ),
    Type: "Program",
    LinkToProject:
      "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/LinearRegression",
    Color: "green lighten-1",
    English: (
      <span>
        This is a program in Python using Matplotlib to calculate and graph the
        linear regression over a data set. It also give you the Pearson
        Coefficient.
      </span>
    ),
    Spanish: (
      <span>
        Este es un programa en Python usando Matplotlib para calcular y gráfica
        la regresión lineal sobre un conjunto de datos. También te da el
        coeficiente de Pearson.
      </span>
    ),
    Topics: {
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
    Type: "Program",
    LinkToProject:
      "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/RootFinder",
    Color: "pink lighten-2",
    English: (
      <span>
        This is a simple program in Python to find the n-roots of a complex
        number.
        <br />
        <br />
        It works, but is ugly and ... it is on Python 2.
      </span>
    ),
    Spanish: (
      <span>
        Este es un programa en Python para encontrar las n-raíces de un número
        complejo.
        <br />
        <br />
        Funciona y todo, pero es feo y ... está en Python 2.
      </span>
    ),
    Topics: {
      English: ["Math", "Complex Analysis", "Python2"],
      Spanish: ["Matemáticas", "Análisis Complejo", "Python2"],
    },
  },
  LearningFlutter: {
    Title: (
      <span>
        {" "}
        <b>Learning</b>Flutter
      </span>
    ),
    Type: "Program",
    LinkToProject: "https://github.com/SoyOscarRH/LearningFlutter",
    Color: "grey darken-2",
    English: (
      <span>
        Simple apps that I made in a Google Development Group boot camp designed
        to learn the Flutter SDK.
        <br />
        Code and text is in English.
        <br />
        <br />
        The first app show an infinite random generated list of Startups made by
        using the most commons words in English and an option to save them.
        Also, I made an app that show many dishes in a list.
      </span>
    ),
    Spanish: (
      <span>
        Conjunto de apps que hice durante un boot camp de un Google Development
        Group diseñado para aprender Flutter.
        <br />
        En este proyecto tanto el código como el texto está en inglés.
        <br />
        <br />
        La primera app muestra una lista infinita (generada aleatoriamente) de
        posibles nombres para Startups, los nombres se generan usando las
        palabras más comunes del idioma inglés. Además hice una app que muestra
        platillos en una lista.
      </span>
    ),
    Topics: {
      English: [
        "One night project",
        "Google Development Group",
        "Flutter",
        "Dart",
      ],
      Spanish: [
        "proyecto de una noche",
        "Google Development Group",
        "Flutter",
        "Dart",
      ],
    },
  },
  AlphabetSoup: {
    Title: (
      <span>
        {" "}
        <b>Alphabet</b>Soup
      </span>
    ),
    Type: "Program",
    LinkToProject: "https://github.com/SoyOscarRH/AlphabetSoup",
    CheckOut: "https://soyoscarrh.github.io/AlphabetSoup/",
    Color: "pink lighten-1",
    English: (
      <span>
        Game made to learn React, this game is just to make people happy. Just
        for fun.
        <br />
        As in many projects, code is in english and text is in spanish.
        <br />
        <br />
        You can choose beetwen many categories, see a visual help of the words
        that you have not found yet, you can change the grid size and even
        activate hints to find the words.
      </span>
    ),
    Spanish: (
      <span>
        Una sopa de letras hecho con React para hacer a la gente feliz, solo
        está hecho por diversión.
        <br />
        Como muchos otros proyectos, el código fuente está en ingles, pero todo
        el texto el las palabras a buscar están es español.
        <br />
        <br />
        Puedes elegir entre varias categorías para elegir el tema de las
        palabras, así como cambiar el tamaño del tablero y activar pistas.
      </span>
    ),
    Topics: {
      English: ["Javascript", "React", "MaterializeCSS", "One night project"],
      Spanish: [
        "Javascript",
        "React",
        "MaterializeCSS",
        "proyecto de una noche",
      ],
    },
  },
  PlayPoker: {
    Title: (
      <span>
        <b>Play</b>Poker
      </span>
    ),
    Type: "Program",
    LinkToProject:
      "https://github.com/CompilandoConocimiento/ThingsWithPython/tree/master/PlayPoker",
    Color: "indigo lighten-1",
    English: (
      <span>
        This is a program in Python to "play poker", well, sort of, because I
        have never play poker... Is just a weird school exercise.
      </span>
    ),
    Spanish: (
      <span>
        Este es un programa en Python para "jugar al póquer", bueno, más o
        menos, porque nunca he jugado al póquer ... Es solo un ejercicio escolar
        extraño.
      </span>
    ),
    Topics: {
      English: ["Weird project", "Sketch", "Python"],
      Spanish: ["Un proyecto raro", "Sketch", "Python"],
    },
  },
}

export default ProjectsAndProgramsData
