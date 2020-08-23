import React from "react"
import { LanguageOption } from "../App/Language"

export interface Project {
  Title: JSX.Element
  LinkToProject: string
  CheckOut?: string
  Color: string
  English: JSX.Element
  Spanish: JSX.Element
  Extension?: string
  Tags: LanguageOption<Array<string>>
}

export interface ProjectsI {
  [key: string]: Project
}

const Projects: ProjectsI = {
  CompilandoConocimiento: {
    Title: (
      <span>
        {" "}
        <b>Compilando</b>Conocimiento
      </span>
    ),
    LinkToProject: "https://compilandoconocimiento.com/",
    CheckOut: "https://compilandoconocimiento.com/",
    Color: "purple",
    English: (
      <span>
        Creator of a blog (in spanish) to learn about science in general, discrete math, physics,
        vectorial analysis, simple algorithms, and data structures (stacks, queues, BST, AVL trees,
        etc), automata theory, intro to C and to object-oriented programming using Java.
        <br />
        The blog has around 350,000 views since the beginning of 2018.
        <br />
        <br />
        Here you can also find all the books my organization is writing for free.
      </span>
    ),
    Spanish: (
      <span>
        Creador de un blog (en español) para aprender sobre ciencia en general, matemáticas
        discretas, física, análisis vectorial, algoritmos simples y estructuras de datos (pilas,
        colas, BST, árboles AVL, etc.), teoría de autómatas, introducción a C y programación
        orientada a objetos utilizando Java.
        <br />
        El blog Tiene alrededor de 350,000 visitas desde principios de 2018.
        <br />
        <br />
        Aquí también se puede encontrar todos los libros que, como organización, escribimos de forma
        gratuita.
      </span>
    ),
    Tags: {
      English: ["Educational blog", "math", "algorithms", "books", "tutorials"],
      Spanish: ["Blog de educación", "mate", "algoritmos", "libros", "tutoriales"],
    },
  },
  CompetitiveSolutions: {
    Title: (
      <span>
        {" "}
        <b>Competitive</b>Solutions
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/CompetitiveSolutions",
    CheckOut: "https://github.com/SoyOscarRH/CompetitiveSolutions",
    Color: "red",
    English: (
      <span>
        This is a repository to store all the solutions for competitive programming problems on
        Judges online like OmegaUp, Codeforces, SPOJ, UVa, and many more. Also here I store all my
        submissions on interview problems (+200 problems in{" "}
        <u>
          <a style={{ color: "inherit" }} href="https://leetcode.com/soyoscarrh/">
            Leetcode
          </a>
        </u>
        ).
        <br />
        <br />
        Most of the solutions are in C++, because sincerely solving problems of this kind in this
        language is awesome.
        <br />
        <br />I work to keep my solutions as readable and clear as possible n.n
      </span>
    ),
    Spanish: (
      <span>
        Este es un repositorio para guardar todas las soluciones para los problemas de programación
        competitiva en jueces en línea como OmegaUp, Codeforces, SPOJ, UVa y muchos más. También ahi
        guardo todo lo relacionado con los problema que hago de entrevistas (+200 problemas en{" "}
        <a href="https://leetcode.com/soyoscarrh/">Leetcode</a>).
        <br />
        <br />
        La mayoría de las soluciones están en C++, porque resolver esa clase de problemas en este
        lenguaje es increíble.
        <br />
        <br />
        Trabajo para mantener mis soluciones tan legibles y claras como sea posible n.n
      </span>
    ),
    Extension: "jpg",
    Tags: {
      English: ["C++", "Competitive Programming", "Solutions", "Online Judges"],
      Spanish: ["C++", "Programación Competitiva", "Soluciones", "Jueces en línea"],
    },
  },
  LearningNeuralNetworks: {
    Title: (
      <span>
        {" "}
        <b>Learning</b>Neural<b>Networks</b>
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/LearningNeuralNetworks",
    CheckOut: "https://github.com/SoyOscarRH/LearningNeuralNetworks",
    Color: "blue",
    English: (
      <React.Fragment>
        <span>All the code for my experiments learning deep learning and neuronal networks:</span>
        <ul style={{ padding: "0rem 0.8rem", textAlign: "left" }}>
          <li style={{ listStyleType: "disc" }}>
            <em>Surnames origins</em>: A RRN using PyTorch (+ a DIY LSTM module) that can predict
            the origin of a surname.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>CIFAR10</em>: A RRN using PyTorch that classifies images suing the CIFAR10 dataset.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>Style transfer</em> using a convolutional nn; a Udacity's PyTorch exercise.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>MNIST using a MLP</em>: This is a classic example, a net that recognizes digits.
          </li>
        </ul>
      </React.Fragment>
    ),
    Spanish: (
      <React.Fragment>
        <span>
          Aquí esta todo el código que cree cuando estuve aprendiendo sobre redes neuronales y
          aprendizaje profundo:
        </span>
        <ul style={{ padding: "0rem 0.8rem", textAlign: "left" }}>
          <li style={{ listStyleType: "disc" }}>
            <em>Origen de los apellidos</em>: una RRN que utiliza PyTorch (+ un módulo DIY LSTM) que
            puede predecir el origen de un apellido.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>CIFAR10</em>: una RRN que usa PyTorch para clasificar las imágenes del dataset
            CIFAR10.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>Style transfer</em> Transferencia de estilo usando una nn convolucional; un
            ejercicio del curso de PyTorch de Udacity.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>MNIST using a MLP</em>: Este es un ejemplo clásico, una red que reconoce dígitos.
          </li>
        </ul>
      </React.Fragment>
    ),
    Extension: "jpg",
    Tags: {
      English: ["Python", "Pytorch", "Udacity", "ML"],
      Spanish: ["Python", "Pytorch", "Udacity", "ML"],
    },
  },
  Binary: {
    Title: (
      <span>
        {" "}
        <b>Binary</b>Conversions
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/Binary",
    CheckOut: "https://soyoscarrh.github.io/Binary/#/FromBinarytoComplement2/",
    Color: "green",
    English: (
      <span>
        This was a project just for fun to deeply understand floating-point numbers / arithmetic and
        binary conversions (complement-1 and complement 2).
        <br />
        <br />
        It allows you to transform a binary number to decimal and backwards, the basic ideas for
        representing negative integers (complement 1, complement 2 and partial representation) and
        IEEE floating-point.
        <br />
        <br />
        All the code and documentation is in English, but all the text inside the app is in Spanish
        (my mother tongue).
      </span>
    ),
    Spanish: (
      <span>
        Este fue un proyecto pequeño para ayudarme a comprender realmente los números de punto
        flotante y su aritmética y las conversiones binarias (complemento 1 y complemento 2).
        <br />
        <br />
        Le permite transformar un número binario a decimal y al revés, las ideas básicas para
        representar a los negativos (complemento 1, complemento 2 y la representación parcial) y
        sobre el punto flotante de la IEEE.
        <br />
        <br />
        Todo el código fuente está en inglés, pero todo el texto interno de la aplicación está en
        español.
      </span>
    ),
    Tags: {
      English: ["MaterializeCSS", "React", "One Night project", "SPA"],
      Spanish: ["MaterializeCSS", "React", "Proyecto de clase", "SPA"],
    },
  },
  AIWithLisp: {
    Title: (
      <span>
        {" "}
        <b>AI</b>With<b>Lisp</b>
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/AIWithLisp",
    Color: "purple",
    English: (
      <React.Fragment>
        <span>
          Simple AI exercises using and learning Common Lisp during my class: "Introduction to
          Artificial Intelligence " at the Computer Research Center CIC at my university.
        </span>
        <ul style={{ padding: "0rem 0.8rem", textAlign: "left" }}>
          <li style={{ listStyleType: "disc" }}>
            <em>Mazes</em>: This is an AI that solves any maze you throw at it, it has multiple
            versions including 3D mazes.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>Tic-tac-toe / 4 in line (gato)</em>: This is a classic AI puzzle, to create an agent
            that wins any tic-tac-toe match it can.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>Microworlds</em>: Created an agent that was responsible for the movements /
            decisions of the animals of a world to archive equilibrium, using a paradigm based on
            rules, I created rules to make the ecosystem thrive.
          </li>
        </ul>
      </React.Fragment>
    ),
    Spanish: (
      <React.Fragment>
        <span>
          Ejercicios de IA usando Common Lisp que hice durante mi clase: "Introducción a la
          Inteligencia Artificial" en el Centro de Investigación Informática CIC en mi universidad.
        </span>
        <ul style={{ padding: "0rem 0.8rem", textAlign: "left" }}>
          <li style={{ listStyleType: "disc" }}>
            <em>Mazes</em>: Esta es una IA que resuelve cualquier laberinto que le arrojes, tiene
            múltiples versiones que incluyen laberintos 3D.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>Tic-tac-toe / 4 in line (gato)</em>: este es un clásico juego de IA, crear un agente
            que gane cualquier partido de tic-tac-toe que pueda.
          </li>
          <li style={{ listStyleType: "disc" }}>
            <em>Microworlds</em>: creé un agente responsable de los movimientos / decisiones de los
            animales de un mundo para lograr el equilibrio, utilizando un paradigma basado en
            reglas, creé reglas para hacer prosperar el ecosistema.
          </li>
        </ul>
      </React.Fragment>
    ),
    Tags: {
      English: ["Lisp", "AI", "Mazes"],
      Spanish: ["Lisp", "AI", "Mazes"],
    },
    Extension: "jpg",
  },
  CellularAutomata: {
    Title: (
      <span>
        {" "}
        <b>Cellular</b>Automata
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/CellularAutomata",
    CheckOut: "https://SoyOscarRH.github.io/CellularAutomata/",
    Color: "blue-grey darken-2",
    English: (
      <span>
        This is webapp let you see all the elementary cellular automata (elementary cellular
        automata have two possible values for each cell (0 or 1), and rules that depend only on
        nearest neighbor values), you can edit the size of the cell, how many iterations and even
        see an analysis. It is a one day project, so don't expect anything fancy inside the code,
        but the automatas create really beautiful images.
        <br />
        <br />
        <br />
        Really recommend to check rules: 30, 54, 60, 126, 182, 150, 57. They are beautiful n.n
      </span>
    ),
    Spanish: (
      <span>
        Esta aplicación web te permite ver todos los autómatas celulares elementales, puedes editar
        el tamaño de la celda, cuántas iteraciones e incluso ver un análisis. Es un proyecto de un
        día, así que no esperes nada elegante, pero hay realmente bellas imágenes aquí.
        <br />
        <br />
        La mayoría de las implementaciones están en C ++, pero también puedes encontrar algunas en C
        e incluso en Python y Java.
        <br />
        <br />
        Realmente recomiendo checar las reglas: 30, 54, 60, 126, 182, 150, 57.
      </span>
    ),
    Tags: {
      English: ["React", "Complex Systems", "Automatas"],
      Spanish: ["React", "Sistemas complejos", "Automatas"],
    },
    Extension: "jpg",
  },
  DIYCompiler: {
    Title: (
      <span>
        {" "}
        <b>DIY</b>Compiler
      </span>
    ),
    LinkToProject: "https://github.com/CompilandoConocimiento/Compiler",
    CheckOut: "https://compilandoconocimiento.github.io/Compiler/#/grammars",
    Color: "orange",
    English: (
      <span>
        This was a school project for my Compiler class.
        <br />
        <br />
        It allows you to create tokens, finite state automatas and context-free grammars; and with
        them a lexical and syntactical analyzer. I did it with the help of Alan Ontiveros and Laura
        Lopez, my classroom partners and friends.
        <br />
        <br />
        We did operations for automatas like: join, concatenate, closures, convert to deterministic,
        create basic automata, create from regular expression, lexical analysis, etc.
        <br />
        And for grammars operations like: LL(1), LR(0), LALR(1), LR(1) and Earley parsing, seeing
        step by step this process (table generation and string parsing).
      </span>
    ),
    Spanish: (
      <span>
        Esto fue un proyecto para mi clase de Compiladores.
        <br />
        <br />
        Permite la creación de tokens, autómatas de estados finitos y gramáticas libres de contexto;
        y con ellas crear un analizador sintáctico y semántico. Este ha sido el proyecto más
        ambicioso en el que he participado, hecho gracias a la ayuda de Alan Ontivieros y Laura
        Lopez, mis compañeros de clase y amigos.
        <br />
        <br />
        Para los autómatas tenemos operaciones disponibles como: "join", "concatenate", "closures",
        "convert to deterministic", "create basic automata", "create from regular expression",
        "lexical analysis", etc.
        <br />Y para las gramaticas había operaciones como: LL(1), LR(0), LALR(1), LR(1) y "Earley
        parsing", incluso podrías ver paso a paso el proceso.
      </span>
    ),
    Tags: {
      English: ["MaterializeCSS", "React", "Typescript", "Class project"],
      Spanish: ["MaterializeCSS", "React", "Typescript", "Proyecto de clase"],
    },
  },
  ThingsWithCryptography: {
    Title: (
      <span>
        {" "}
        <b>Things</b>With<b>Crypto</b>
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/ThingsWithCryptography",
    Color: "red",
    English: (
      <React.Fragment>
        <span>Projects I did while I started learning about cryptography</span>
        <ul style={{ padding: "0rem 0.8rem", textAlign: "left" }}>
          <li style={{ listStyleType: "disc" }}>
            <em>Hybrid app</em>: A web application with different types of services, such as
            confidentiality, authenticate, or both for messages (inspired by PGP), that we (I and a
            friend Oscar David) developed. The application uses AES and RSA with signature digital.
          </li>
          <br />
          <li style={{ listStyleType: "disc" }}>
            <em>Binary field</em>: A C ++ class that allows you to store the elements of a field
            finite, especially GF (2 ^ 8), like the one used in AES.
          </li>
          <br />
          <li style={{ listStyleType: "disc" }}>
            <em>Lenstra algorithm</em>: An implementation of the lenstra algorithm, it uses curves
            ellipticals to factor integers.
          </li>
        </ul>
      </React.Fragment>
    ),
    Spanish: (
      <React.Fragment>
        <span>Proyectos que hice mientras aprendía sobre criptografía</span>
        <ul style={{ padding: "0rem 0.8rem", textAlign: "left" }}>
          <li style={{ listStyleType: "disc" }}>
            <em>Hybrid app</em>: una aplicación web con diferentes tipos de servicios, como
            confidencialidad, autentica o ambos para mensajes (inspirados en PGP), que nosotros (yo
            y un amigo Oscar David) desarrollamos. La aplicación se cifra con AES y RSA con la firma
            digital.
          </li>
          <br />
          <li style={{ listStyleType: "disc" }}>
            <em>Binary field</em>: Una clase de C++ que permite almacenar los elementos de un campo
            finito, especialmente GF (2 ^ 8), como el que se usa en AES.
          </li>
          <br />
          <li style={{ listStyleType: "disc" }}>
            <em>Lenstra algorithm</em>: Una implementación del algoritmo de lenstra, utiliza curvas
            elípticas para factorizar enteros.
          </li>
        </ul>
      </React.Fragment>
    ),
    Extension: "jpg",
    Tags: {
      English: ["Python", "Cryptography"],
      Spanish: ["Python", "Criptografia"],
    },
  },
  GameOfLife: {
    Title: (
      <span>
        <b>Game</b>of<b>Life</b>
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/GameOfLife",
    CheckOut: "https://soyoscarrh.github.io/GameOfLife/",
    Color: "pink lighten-3",
    English: (
      <span>
        During my time in a Complex System class I created the classical Game of Life simulator.
        <br />
        The Game of Life is a cellular automaton devised by great the mathematician John Horton
        Conway. It is a zero-player game, meaning that its evolution is determined by its initial
        state, requiring no further input. One interacts with it by creating an initial
        configuration and observing how it evolves.
        <br />
        <br />I created a perfomant webapp using the core game engine in Rust, and then using WASM I
        connected it to a SPA webapp.
        <br />
        It also has the opportunity the save and load states and show some basic analytics of the
        universe.
      </span>
    ),
    Spanish: (
      <span>
        Durante mi clase de Sistemas Complejo, creé el simulador clásico de "Game of Life".
        <br />
        El juego de la vida es un autómata celular ideado por el gran matemático John Horton Conway.
        Es un juego de cero jugadores, lo que significa que su evolución está determinada por su
        estado, no requiriendo más entrada. Uno interactúa con él creando una inicial configuración
        y observando cómo evoluciona.
        <br />
        <br /> Creé una aplicación web eficaz usando el motor de juego principal en Rust y luego
        usando WASM y lo conecté a una aplicación web.
        <br />
        También tiene la oportunidad de guardar y cargar estados y mostrar algunos análisis básicos
        del universo.
      </span>
    ),
    Extension: "jpg",
    Tags: {
      English: ["WASM", "Rust", "React"],
      Spanish: ["WASM", "Rust", "React"],
    },
  },
  TdeTiendita: {
    Title: (
      <span>
        {" "}
        <b>T</b>de<b>Tiendita</b>
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/TdeTiendita",
    Color: "deep-purple lighten-1",
    English: (
      <span>
        This is a minimum viable product for a web system that can control the local store of my
        family.
        <br />
        <br />
        It allow us to sell products using barcodes, sell by quantity and by price, also it allows
        us to edit products and uses keyboard shorcuts.
        <br />
        It allow to have differents types fo users.
        <br />
        <br />
        All the code and documentation is in english, but all the text inside the app is in spanish
        (my mother tongue).
      </span>
    ),
    Spanish: (
      <span>
        Este es el mínimo producto viable para un sistema web que puede controlar la tienda de
        abarrotes de mi familia.
        <br />
        <br />
        Permite vender productos usando un código de barras así como vender por cantidad o por
        precio, manejar usuarios, editar productos y añadir atajos de teclado.
        <br />
        <br />
        Todo el código fuente está en inglés, pero todo el texto interno de la aplicación está en
        español.
      </span>
    ),
    Tags: {
      English: ["SPA", "MVP", "CRUD", "MaterializeCSS", "React", "Python-Flask", "MySQL"],
      Spanish: [
        "SPA",
        "MVP",
        "Altas Bajas Cambios",
        "MaterializeCSS",
        "React",
        "Python-Flask",
        "MySQL",
      ],
    },
  },
  OrganizeAnEvent: {
    Title: (
      <span>
        {" "}
        <b>Organize</b>An<b>Event</b>
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/OrganizeAnEvent",
    Color: "yellow darken-2",
    English: (
      <span>
        This is a minimum viable product for a web system to control assistance and documents to an
        academic ceremony.
        <br />
        <br />
        It allows us to pass assistance using bar codes and QR inside the web app. Also, it allows
        us to get the statistics of the event (in PDF) and to send the invitations through email.
        <br />
        It allow to have different types of users (normal and admins).
        <br />
        <br />
        All the code and documentation are in english, but all the text inside the app is in spanish
        (my mother tongue).
      </span>
    ),
    Spanish: (
      <span>
        Este es el mínimo producto viable para un sistema web que pueda controlar una ceremonia
        académica.
        <br />
        <br />
        Permite pasar asistencia usando códigos de barras y QR dentro de la aplicación. También nos
        permite crear PDF con las estadísticas del evento y enviar las invitaciones por email.
        <br />
        <br />
        Todo el código fuente está en inglés, pero todo el texto interno de la aplicación está en
        español.
      </span>
    ),
    Tags: {
      English: ["MVP", "CRUD", "MaterializeCSS", "React", "Typescript", "PHP", "MySQL"],
      Spanish: [
        "MVP",
        "Altas Bajas Cambios",
        "MaterializeCSS",
        "React",
        "Typescript",
        "PHP",
        "MySQL",
      ],
    },
  },
  FudgeRatio: {
    Title: (
      <span>
        <b>Fudge</b>Ratio
      </span>
    ),
    LinkToProject: "https://github.com/gilemos/FudgeRatio",
    CheckOut: "https://fudgeratio-274623.uc.r.appspot.com",
    Color: "blue lighten-2",
    English: (
      <span>
        During the Spring of 2020, I created with my SPS team at fudge ratio calculator web app.
        <br />
        Your Fudge Ratio is the ratio of estimated time against actual time it takes for you to
        complete a task.
        <br />
        <br />
        SPS or Google Software Product Sprint is virtual, invite only program that brings together
        top university students across North America and Googlers for 11 weeks to design and build
        web apps, gain applied data structure and algorithms skills, and receive tailored career
        development resources
      </span>
    ),
    Spanish: (
      <span>
        Durante la primavera del 2020, creé con mi equipo de SPS en la aplicación web que te
        permitia calcular tu "fudge ratio".
        <br />
        El "fudge ratio" es la relación entre el tiempo estimado y el tiempo real que le lleva
        completar una tarea.
        <br />
        <br />
        SPS o Google Software Product Sprint es un programa virtual, que reúne a los mejores
        estudiantes universitarios de Norteamérica y Googlers durante 11 semanas para diseñar y
        construir aplicaciones web y recibimos recursos para mejorar nuestra carrera.
      </span>
    ),
    Extension: "jpg",
    Tags: {
      English: ["Google SPS", "Vanilla JS", "Google Cloud"],
      Spanish: ["Google SPS", "Vanilla JS", "Google Cloud"],
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
    Color: "blue",
    English: (
      <span>
        This is a web app that can simulate the solution of the famous problem of the Longest Common
        Subsequence of any 2 strings step by step. This is solved using DP (dynamic programming)
        using a bottom-up approach table.
        <br />
        <br />
        All the code and documentation are in english, but all the text inside the app is in spanish
        (my mother tongue).
      </span>
    ),
    Spanish: (
      <span>
        Una aplicación web para aprender React, este juego puede simular la solución del famoso
        problema de la Subsecuencia común más larga de cualquiera 2 cadenas paso por paso.
        <br />
        <br />
        Todo el código fuente está en inglés, pero todo el texto interno de la aplicación está en
        español.
      </span>
    ),
    Tags: {
      English: [
        "Javascript",
        "React",
        "MaterializeCSS",
        "DP",
        "Competitive Programming",
        "One night project",
      ],
      Spanish: [
        "Javascript",
        "React",
        "MaterializeCSS",
        "DP",
        "Programación Competitiva",
        "Proyecto de una noche",
      ],
    },
  },
  CompetitiveReference: {
    Title: (
      <span>
        {" "}
        <b>Competitive</b>Reference
      </span>
    ),
    LinkToProject: "https://github.com/CompilandoConocimiento/Reference",
    CheckOut: "https://compilandoconocimiento.github.io/Reference/",
    Color: "blue-grey darken-3",
    English: (
      <span>
        These are all my personal implementations of the most famous and useful competitive
        programming algorithms.
        <br />
        <br />
        Most of the implementations are in C++, but you can also find them in C and even in Python
        and Java.
        <br />
        <br />
        I'm also working on creating a Reference (Book & Website) so many more people can benefit
        from it, and get further along in this awesome mind-sport.
      </span>
    ),
    Spanish: (
      <span>
        Recopilación de mis implementaciones personales de los más famosos y útiles algoritmos de la
        programación competitiva.
        <br />
        <br />
        La mayoría de las implementaciones están en C ++, pero también puedes encontrar algunas en C
        e incluso en Python y Java.
        <br />
        <br />
        También estoy trabajando en la creación de un "Refence" (libro y sitio web) para que así más
        personas puedan beneficiarse de esto y avanzar más en este increíble deporte mental.
      </span>
    ),
    Tags: {
      English: ["Competitive Programming", "C++", "Webapp", "React", "Typescript", "Book"],
      Spanish: ["Programación Competitiva", "C++", "Webapp", "React", "Typescript", "Libro"],
    },
  },
  ManageYourCinema: {
    Title: (
      <span>
        {" "}
        <b>Manage</b>Your<b>Cinema</b>{" "}
      </span>
    ),
    LinkToProject: "https://github.com/SoyOscarRH/ManageYourCinema",
    Color: "teal",
    English: (
      <span>
        This is an UNFINISHED mini project for a web system that can control a cinema (candy shop
        and tickets)
        <br />
        <br />
        It allows to create users and manage them, sell candy and popcorn, the movie tickets.
        <br />
        <br />
        All the code and documentation are in english, but all the text inside the app is in spanish
        (my mother tongue).
      </span>
    ),
    Spanish: (
      <span>
        Mini proyecto INCOMPLETO para un sistema web que puede controlar un cine (venta de dulces y
        boletos)
        <br />
        <br />
        Permite crear usuarios y administrarlos, vender dulces y palomitas, y las entradas para el
        cine.
        <br />
        <br />
        Todo el código fuente está en inglés, pero todo el texto interno de la aplicación está en
        español.
      </span>
    ),
    Extension: "jpg",
    Tags: {
      English: ["CRUD", "MaterializeCSS", "jQuery", "PHP", "MySQL"],
      Spanish: ["Altas Bajas Cambios", "MaterializeCSS", "jQuery", "PHP", "MySQL"],
    },
  },

  CreatingWithLaTeX: {
    Title: (
      <span>
        {" "}
        <b>Creating</b>With<b>LaTeX</b>
      </span>
    ),
    LinkToProject: "https://github.com/CompilandoConocimiento/CreatingWithLatex/",
    Color: "cyan accent-3",
    English: (
      <span>
        This is where I put all the things that I need when working with LaTeX: code to insert an
        image, make covers, insert tables.
        <br />
        <br />
        Also, here I save a the header I use in almost all my files, which have many math commands
        for easier and higher level equations as \Cis, \UpperDerivate, \BigBrackets, \GenericField,
        etc...
      </span>
    ),
    Spanish: (
      <span>
        Aquí es donde pongo todas las cosas que necesito cuando trabajo con LaTeX: código para
        insertar una imagen, hacer cubiertas, insertar tablas.
        <br />
        <br />
        Además, aquí guardo el encabezado que uso en casi todos mis archivos, que tienen muchos
        comandos matemáticos para un manejo más fácil y de mayor nivel como: \Cis, \UpperDerivate,
        \BigBrackets, \Generic Field, etc...
      </span>
    ),
    Extension: "jpg",
    Tags: {
      English: ["LaTeX", "Math", "Reference"],
      Spanish: ["LaTeX", "Matemáticas", "Referencia"],
    },
  },
}

export default Projects
