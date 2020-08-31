import React from "react"
import { LanguageOption } from "../code/App/Language"

export interface Topic {
  Name: string
  SubTopics: Array<string>
}

export interface Book {
  Title: LanguageOption<JSX.Element>
  SimpleTitle: LanguageOption<string>
  LinkToProject: string
  Color: string
  Intro: LanguageOption<JSX.Element>
  Topics: LanguageOption<Array<Topic>>
  Tags: LanguageOption<Array<string>>
  CoAuthors: Array<string>
  LinkToReadOnline: string
  LinkToDownload: string,
  Extension?: string
}

export interface BooksI {
  [key: string]: Book
}

export const AboutBooksData: LanguageOption<JSX.Element> = {
  english: (
    <div className="blue-grey-text text-darken-3" style={{ textAlign: "justify" }}>
      <br />
      <h6 style={{ textAlign: "center" }}>
        <b>Books, "Compilados" or Notes?</b>
      </h6>
      <br />

      <span>
        First of all, I have to admit that many of these texts have been written together with a lot
        of people, people who without them I could not have gotten that far, thanks to Alan, Laura,
        Abii, Leilan, and all my teachers.
        <br />
        <br />
        <b> So... What the hell are these texts? </b>
        <br />
        <br />
        The most immediate answer is that these texts (or "Compilados" as I like to tell them) Are a
        compilation of theorems, ideas, examples, and important concepts that we learned throughout
        time on each of the topics.
        <br />
        <br />
        On a regular basis, we will be updating these texts with everything new that we learn trying
        to deepen in all these topics and close possible doubts on these pages. These "Compilados"
        try to be as strict as possible, although we are human (and students) and it is possible
        (and even probable) that we make small mistakes from time to time. I hope you take these
        pages as a gift created by imperfect beings with hopes to make the world a better place.
      </span>
    </div>
  ),
  spanish: (
    <div className="blue-grey-text text-darken-3" style={{ textAlign: "justify" }}>
      <br />
      <h6 style={{ textAlign: "center" }}>
        <b>¿Libros, Compilados o Apuntes?</b>
      </h6>
      <br />

      <span>
        Antes que nada, tengo que admitir que muchos de estos textos los he escrito con conjunto con
        un montón de gente, gente que sin ellos no podría haber llegado tan lejos, gracias Alan,
        Laura, Abbi, Leilan y a todos mis profesores.
        <br />
        <br />
        <b>Ahora, ¿Qué demonios son estos textos?</b>
        <br />
        <br />
        La respuesta más inmediata es que estos textos (o compilado como a mí me gusta decirles) son
        una recopilación de teoremas, ideas, ejemplos y conceptos importantes que aprendimos a lo
        largo del tiempo sobre cada uno de los temas.
        <br />
        <br />
        De manera regular estaremos actualizando estos textos con todo aquello nuevo que aprendamos
        intentando profundizar en todos estos temas y cerrar posibles dudas en estas páginas. Estos
        Compilados intentamos ser lo más estrictos posible, aúnque somos humanos (y estudiantes) y
        es posible(e incluso probable) que cometamos pequeños errores de vez en cuando. Espero que
        tomes estas páginas como un regalo creado por seres imperfectos pero con muchos ánimos de
        hacer del mundo un lugar mejor, ahora si, abróchate los cinturones que esto acaba de
        empezar.
      </span>
    </div>
  ),
}

export const BooksData: BooksI = {
  LibroProbabilidad: {
    Title: {
      english: (
        <span>
          <b>Probability</b> and Statistics
        </span>
      ),
      spanish: (
        <span>
          <b>Probabilidad</b> y Estadística
        </span>
      ),
    },
    SimpleTitle: {
      english: "Probability",
      spanish: "Probabilidad",
    },
    LinkToProject: "https://github.com/CompilandoConocimiento/LibroProbabilidad",
    Color: "orange lighten-1",
    Intro: {
      english: (
        <span>
          When I was a little boy the only topics I dislike in math were the ones that have
          something to do with probability. But then I decided to make this book, with this book I
          learned all the amazing things about this topic.
          <br />
          <br />
          This book starts with the basic, the concept of probability and of an event, the idea of
          conditional probability and Bayes theorem.
          <br />
          <br />
          Then we will explore the idea of a random variable, of the mean, the variance, moments.
          <br />
          <br />
          Above all, this text focuses on distributions (discrete and continuous like Bernoulli,
          Binomial, Geometric, Hypergeometric, Uniform, Exponential, Gamma, Normal) and this is the
          kind of book that demonstrate all the statements that it presents.
          <br />
          <br />
          This book is in Spanish only. Sorry :(
        </span>
      ),
      spanish: (
        <span>
          Cuando era pequeño, los únicos temas que no me gustaban en matemáticas eran los que tienen
          algo que ver con probabilidad. Pero luego decidí hacer este libro, con este libro aprendí
          todo las cosas increíbles sobre este tema.
          <br />
          <br />
          Este libro comienza con lo básico, el concepto de probabilidad y de un evento, la idea de
          la probabilidad condicional y el Teorema de Bayes.
          <br />
          <br />
          Después exploraremos la idea de una variable aleatoria, de la esperanza, la varianza,
          covarianza y los momentos.
          <br />
          <br />
          Sobre todo, este texto se centra en las distribuciones (discretas y continuas como:
          Bernoulli, Binomial, Geométrica, Hipergeométrica, Uniforme, Exponencial, Gamma, Normal)
          este es el tipo de libro que demuestra todas las proposiciones que presenta.
        </span>
      ),
    },
    Topics: {
      spanish: [
        {
          Name: "Notación",
          SubTopics: ["Experimentos, espacios muestrales y eventos"],
        },
        {
          Name: "Probabilidad",
          SubTopics: ["Probabilidad básica", "Propiedades", "Probabilidad Condicional"],
        },
        {
          Name: "Eventos Independientes",
          SubTopics: ["Propiedades", "Teorema de Bayes"],
        },
        {
          Name: "Combinatoria",
          SubTopics: ["Permutación", "Combinación", "Coheficientes Binomiales"],
        },
        {
          Name: "Variables Aleatorias",
          SubTopics: [
            "Función de Probabilidad",
            "Función Acumulada",
            "Esperanza",
            "Varianza",
            "Covarianza",
            "Momentos",
          ],
        },
        {
          Name: "Distribuciones Famosas",
          SubTopics: [
            "Bernoulli",
            "Binomial",
            "Geométrica",
            "Hipergeométrica",
            "Uniforme",
            "Exponencial",
            "Gamma",
            "Normal",
          ],
        },
        {
          Name: "Hardcore",
          SubTopics: ["Teorema Central del Límite", "Teorema Central de Chebyshue"],
        },
        {
          Name: "Probabilidad Conjunta",
          SubTopics: [
            "Propiedades",
            "Acumulada",
            "Marginal",
            "Condicional",
            "Independencia de Variables",
          ],
        },
        {
          Name: "Estimadores Puntuales",
          SubTopics: [
            "Insesgado",
            "Varianza mínima",
            "Optimo",
            "Método de los Momentos",
            "Método de Máxima Verosimilitud",
          ],
        },
      ],
      english: [
        {
          Name: "Notation",
          SubTopics: ["Experiments, sample spaces and events"],
        },
        {
          Name: "Probability",
          SubTopics: ["Basic probability", "Properties", "Conditional Probability"],
        },
        {
          Name: "Independent Events",
          SubTopics: ["Properties", "Bayes Theorem"],
        },
        {
          Name: "Combinatorial",
          SubTopics: ["Permutation", "Combination", "Binomial Cohefficients"],
        },
        {
          Name: "Random Variables",
          SubTopics: [
            "Probability Function",
            "Accumulated Function",
            "Hope",
            "Variance",
            "Covariance",
            "Moments",
          ],
        },
        {
          Name: "Famous Distributions",
          SubTopics: [
            "Bernoulli",
            "Binomial",
            "Geometric",
            "Hypergeometric",
            "Uniform",
            "Exponential",
            "Gamma",
            "Normal",
          ],
        },
        {
          Name: "Hardcore",
          SubTopics: ["Central Limit Theorem", "Central Theorem of Chebyshue"],
        },
        {
          Name: "Joint Probability",
          SubTopics: [
            "Properties",
            "Accumulated",
            "Marginal",
            "Conditional",
            "Variable Independence",
          ],
        },
        {
          Name: "Point Estimators",
          SubTopics: [
            "Insessional",
            "Minimum variance",
            "Optimum",
            "Method of the Moments",
            "Maximum Likelihood Method",
          ],
        },
      ],
    },
    Tags: {
      english: ["Probability", "Distributions", "Proofs"],
      spanish: ["Probabilidad", "Distribuciones", "Demostraciones"],
    },
    CoAuthors: ["Leticia Cañedo"],
    LinkToReadOnline:
      "https://compilandoconocimiento.github.io/LibroProbabilidad/LibroProbabilidadYEstadistica.pdf",
    LinkToDownload:
      "https://compilandoconocimiento.github.io/LibroProbabilidad/LibroProbabilidadYEstadistica.pdf",
  },
  LibroAlgebraLineal: {
    Title: {
      english: (
        <span>
          <b>Lineal</b> Algebra and <b>Numeric</b> Analysis{" "}
        </span>
      ),
      spanish: (
        <span>
          <b>Álgebra</b> Lineal y <b>Análisis</b> Numérico
        </span>
      ),
    },
    SimpleTitle: {
      english: "Lineal Algebra",
      spanish: "Álgebra Lineal",
    },
    LinkToProject: "https://github.com/CompilandoConocimiento/LibroAlgebraLineal",
    Color: "purple lighten-1",
    Intro: {
      english: (
        <span>
          This is the book that contains the bases of the entire branch of mathematics called linear
          algebra. We will first see the idea of matrices and the operations that we can do with
          them without giving much sense to what are the matrices.
          <br />
          <br />
          Then we will see the idea of a vector space, of subspaces and of its properties and ways
          of representing its elements, the vectors. We will see about linear transformations, a few
          rare functions but that they reveal to us the true nature of the matrices.
          <br />
          <br />
          Finally, with this understanding of linear algebra we can talk of one of the most amazing
          applications of the theory: <b>Numerical Analysis</b>.
          <br />
          <br />
          We will talk about how to solve Ax = b using LU decomposition, and Cholesky decomposition.
          <br />
          Also, we will try to approximate the solution using the Least Squares, and QR
          Decomposition (HouseHolder, Gram-Schmidt, Givens).
          <br />
          <br />
          This book is in Spanish only. Sorry :(
        </span>
      ),
      spanish: (
        <span>
          Este es libro contiene las bases de toda la rama de las matemáticas denominada álgebra
          lineal. Veremos primero la idea de las matrices y de las operaciones que podemos hacer con
          ellas sin darles mucho sentido a que son las matrices.
          <br />
          <br />
          Después veremos la idea de un espacio vectorial, de los subespacios y de sus propiedades y
          de formas de representar sus elementos, los vectores. Veremos sobre las transformaciones
          lineales, unas funciones medio raras pero que nos desvelan la verdadera naturaleza de las
          matrices.
          <br />
          <br />
          Finalmente con todo el conocimiento que hemos adquirido podemos hablar de una de las
          aplicaciones más importantes de la teoría: <b>Análisis Numérico</b>.
          <br />
          <br />
          Hablaremos de como resolver Ax = b usando la Factorización LU, y de Cholesky.
          <br />
          También de como aproximar la solución usando Mínimos Cuadrados y la Factorización QR
          (HouseHolder, Gram-Schimidt, Givens).
        </span>
      ),
    },
    Topics: {
      spanish: [
        {
          Name: "Intro a Matrices",
          SubTopics: ["Definición", "Simbología", "Clasificación", "Matrices Diagonales"],
        },
        {
          Name: "Álgebra Matricial",
          SubTopics: [
            "Suma",
            "Producto Escalar",
            "Producto de Matrices",
            "Traza",
            "Transpuesta y Simetría",
          ],
        },
        {
          Name: "Espacios Vectoriales",
          SubTopics: [
            "Definición",
            "Subespacios",
            "Combinaciones Lineales",
            "Generadores",
            "Dependencia Lineal",
            "Bases",
          ],
        },
        {
          Name: "Producto Interno",
          SubTopics: [
            "Definición",
            "Longitud",
            "Ortogonalidad",
            "Proyección y Ortogonales",
            "Dependencia Lineal",
            "Descomposición",
          ],
        },
        {
          Name: "Transformaciones Lineales",
          SubTopics: ["Definición", "Kernel", "Rango", "Proyecciones", "Invariantes"],
        },
        {
          Name: "Transformaciones y Matrices",
          SubTopics: [
            "Definición",
            "Base Ordenada",
            "Representación Matricial",
            "Composición",
            "Encaje",
            "Inversa",
            "Isomorfismos",
            "Cambios de Coordenadas",
          ],
        },
        {
          Name: "Ecuaciones Lineales",
          SubTopics: [
            "Operaciones Elementales",
            "Rango de Matrices",
            "Matriz Aumentada",
            "Sistemas de Ecuaciones",
            "Gauss-Jordan",
          ],
        },
        {
          Name: "Determinantes",
          SubTopics: [
            "Definición",
            "Propiedades",
            "Cofactor",
            "Adjunta",
            "Normas Vectoriales",
            "Normas Matriciales",
          ],
        },
        {
          Name: "Análisis Numérico: Solucionar Ax = b",
          SubTopics: [
            "Factorización LU",
            "Factorización con Pivote",
            "Factorización de Cholesky",
            "Matrices definidas positivas",
            "Analisis del Error (Condición de una matriz)",
          ],
        },
        {
          Name: "Análisis Numérico: Aproximar Ax = b",
          SubTopics: [
            "Mínimos Cuadradados",
            "Ecuaciones Normales",
            "PseudoInversa",
            "Factorización QR",
            "HouseHolder: Reflexiones",
            "Gram-Schimidt: Ortogonalizar",
            "Givens: Rotaciones",
          ],
        },
      ],
      english: [
        {
          Name: "Introduction to Matrices",
          SubTopics: ["Definition", "Symbology", "Classification", "Diagonal Matrices"],
        },
        {
          Name: "Matrix Algebra",
          SubTopics: [
            "Sum",
            "Scalar product",
            "Product of Matrices",
            "Trace",
            "Transposed and Symmetry",
          ],
        },
        {
          Name: "Vector spaces",
          SubTopics: [
            "Definition",
            "Subspaces",
            "Linear Combinations",
            "Generators",
            "Linear dependence",
            "Bases",
          ],
        },
        {
          Name: "Inner Product",
          SubTopics: [
            "Definition",
            "Length",
            "Orthogonality",
            "Projections and Orthogonal",
            "Linear dependence",
            "Decomposition",
          ],
        },
        {
          Name: "Linear Transformations",
          SubTopics: ["Definition", "Kernel", "Rank", "Projections", "Invariant"],
        },
        {
          Name: "Transformations and Matrices",
          SubTopics: [
            "Definition",
            "Ordered Base",
            "Matrix Representation",
            "Composition",
            "Lace",
            "Reverse",
            "Isomorphisms",
            "Changes of Coordinates",
          ],
        },
        {
          Name: "Linear equations",
          SubTopics: [
            "Elemental Operations",
            "Range of Matrices",
            "Increased Matrix",
            "Ecuation systems",
            "Gauss-Jordan",
          ],
        },
        {
          Name: "Determinants",
          SubTopics: [
            "Definition",
            "Properties",
            "Cofactor",
            "Attached",
            "Vectors norms",
            "Matrix norms",
          ],
        },
        {
          Name: "Numerical Analysis: Solve Ax = b",
          SubTopics: [
            "LU Decomposition",
            "Cholesky Decomposition",
            "Positive defined matrices",
            "Error Analysis (Condition of a matrix)",
          ],
        },
        {
          Name: "Numerical Analysis: Approximate Ax = b",
          SubTopics: [
            "Least Squares",
            "Normal Equations",
            "QR Decomposition",
            "HouseHolder: Reflections",
            "Gram-Schmidt: Orthogonalize",
            "Givens: Rotations",
          ],
        },
      ],
    },
    Tags: {
      english: ["Matrixs", "Vectorial Spaces", "Lineal Transformations", "Numerical Analysis"],
      spanish: [
        "Matrices",
        "Espacios Vectoriales",
        "Transformaciones Lineales",
        "Análisis Numérico",
      ],
    },
    CoAuthors: [],
    LinkToReadOnline:
      "https://compilandoconocimiento.github.io/LibroAlgebraLineal/LibroAlgebraLineal.pdf",
    LinkToDownload:
      "https://compilandoconocimiento.github.io/LibroAlgebraLineal/LibroAlgebraLineal.pdf",
  },
  LibroAnalisisComplejo: {
    Title: {
      english: (
        <span>
          <b>Complex</b> Analysis
        </span>
      ),
      spanish: (
        <span>
          <b>Análisis</b> Complejo
        </span>
      ),
    },
    SimpleTitle: {
      english: "Complex Analysis",
      spanish: "Análisis Complejo",
    },
    LinkToProject: "https://github.com/CompilandoConocimiento/LibroAnalisisComplejo",
    Color: "red lighten-1",
    Intro: {
      english: (
        <span>
          This is the book contains the bases of all the mathematics necessary for complex analysis,
          we talk about complex numbers, how to operate with them and the various forms that we have
          to represent them.
          <br />
          <br />
          We see how we can extend the idea of the calculation on complex functions, we will see the
          complex integrals and as they are often easier than "normal" ones. We see the residuals
          and the power series and how to simplify all these operations even more.
          <br />
          <br />
          We Finally, see Fourier, how to make his series, how to make his transform and how it is
          that with solving differential equations is the simplest thing in the world.
          <br />
          <br />
          This book is in Spanish only. Sorry :(
        </span>
      ),
      spanish: (
        <span>
          Este es libro contiene las bases de toda la matemática necesaria para el análisis
          complejo, hablaremos sobre los números complejos, como operar con ellos y las diversas
          formas que tenemos de representarlos.
          <br />
          <br />
          Veremos como podemos extender la idea del Cálculo sobre funciones complejas, veremos las
          integrales complejas y como muchas veces resultan más fáciles que las “normales”. Veremos
          los residuos y las series de potencias y como simplificar aún más todas las operaciones.
          <br />
          <br />
          Veremos finalmente a gran Fourier, como hacer sus series y como hacer su transformada y
          como es que con ella resolver ecuaciones diferenciales es de lo más sencillo del mundo
        </span>
      ),
    },
    Topics: {
      spanish: [
        {
          Name: "Números Complejos",
          SubTopics: [
            "Heaviside",
            "Funciones Trigonometricos",
            "Definición de i",
            "Definición del Campo de los Complejos",
          ],
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
          ],
        },
        {
          Name: "Forma Polar",
          SubTopics: ["Forma Polar", "Argumento de z"],
        },
        {
          Name: "Forma de Euler y Raíces",
          SubTopics: ["Forma de Euler", "Identidad de Lagrange", "Ley de Moivre", "Raíces"],
        },
        {
          Name: "Funciones Complejas",
          SubTopics: ["Definición", "Fn Hiperbolicas", "Fn Trigonometricas", "Límites"],
        },
        {
          Name: "Derivación",
          SubTopics: [
            "Funciones Analíticas",
            "Continuidad",
            "Ecuaciones de Cauchy-Riemann",
            "Funciones Armónicas",
          ],
        },
        {
          Name: "Integración",
          SubTopics: [
            "Teorema de la Deformación",
            "Teorema de Cauchy-Goursat",
            "Teorema de la Integral de Cauchy",
            "Teorema de la Derivación",
          ],
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
          ],
        },
        {
          Name: "Residuos",
          SubTopics: ["Definición", "Como encontrarlos", "Teorema del Residuo de Cauchy"],
        },
        {
          Name: "Serie de Fourier",
          SubTopics: [
            "Teorema de Fourier",
            "Coeficientes de Fourier",
            "Serie Compleja",
            "Aplicaciones",
          ],
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
            "Convolución",
            "Ecuaciones Diferenciales",
          ],
        },
      ],
      english: [
        {
          Name: "Complex Numbers",
          SubTopics: [
            "Heaviside",
            "Trigonometric functions",
            "Definition of i",
            "Definition of the Complex Field",
          ],
        },
        {
          Name: "Complex Arithmetic",
          SubTopics: [
            "Basic operations",
            "Identity Element",
            "Inverse multiplicative",
            "Conjugate",
            "Absolute value",
            "Point y Cross Product",
          ],
        },
        {
          Name: "Polar Form",
          SubTopics: ["Polar Form", "Argument of z"],
        },
        {
          Name: "Form of Euler and Roots",
          SubTopics: ["Form of Euler", "Lagrange Identity", "Law of Moivre", "Estate"],
        },
        {
          Name: "Complex Functions",
          SubTopics: ["Definition", "Hyperbolic Fn", "Fn Trigonometric", "Limits"],
        },
        {
          Name: "Derivation",
          SubTopics: [
            "Analytical functions",
            "Continuity",
            "Cauchy-Riemann equations",
            "Harmonic functions",
          ],
        },
        {
          Name: "Integration",
          SubTopics: [
            "Deformation Theorem",
            "Cauchy-Goursat Theorem",
            "Cauchy's Integral Theorem",
            "Derivation Theorem",
          ],
        },
        {
          Name: "Complex Series",
          SubTopics: [
            "Geometric Series",
            "Power Series",
            "Taylor series",
            "Maclaurin Series",
            "Laurent Series",
            "Poles and Singularities",
          ],
        },
        {
          Name: "Waste",
          SubTopics: ["Definition", "How to find them", "Cauchy Residue Theorem"],
        },
        {
          Name: "Fourier Series",
          SubTopics: [
            "Fourier's Theorem",
            "Fourier coefficients",
            "Complex Series",
            "Applications",
          ],
        },
        {
          Name: "Fourier Transform",
          SubTopics: [
            "Definition",
            "Complex Fourier Integral",
            "Transformed by Definition",
            "Transformed Derivatives",
            "Transfers of Transfers",
            "Symmetry Theorem",
            "Escalation Theorem",
            "Modulation Theorem",
            "Reverse Transform",
            "Convolution",
            "Differential equations",
          ],
        },
      ],
    },
    Tags: {
      english: ["Complex Analysis and Calculus", "Fourier", "Complex Numbers"],
      spanish: ["Análisis y Cálculo Complejo", "Fourier", "Números Complejos"],
    },
    CoAuthors: ["Ángel López Manríquez"],
    LinkToReadOnline:
      "https://CompilandoConocimiento.github.io/LibroAnalisisComplejo/LibroAnalisisComplejo.pdf",
    LinkToDownload:
      "https://CompilandoConocimiento.github.io/LibroAnalisisComplejo/LibroAnalisisComplejo.pdf",
  },
  LibroTeoriaDeNumeros: {
    Title: {
      english: (
        <span>
          <b>Number</b> Theory
        </span>
      ),
      spanish: (
        <span>
          <b>Teoría</b> de Números
        </span>
      ),
    },
    SimpleTitle: {
      english: "Number Theory",
      spanish: "Teoría de Números",
    },
    LinkToProject: "https://github.com/CompilandoConocimiento/LibroTeoriaDeNumeros",
    Color: "green lighten-1",
    Intro: {
      english: (
        <span>
          Come on, you have to admit that this book has the coolest name in the world, Here you will
          learn everything about the integers, their cousins and their mysteries.
          <br />
          <br />
          Above all, this text focuses on divisibility, we will talk about Euclid's algorithms, as
          well as the classical GCD, LCM, the Diophantine equations, as well as the Phi function.
          <br />
          <br />
          Finally, we will see everything you need to know about congruence, how to use them to
          solve problems, Modular Arithmetic and important Theorems such as Wilson's, Chinese
          Residual Theorem or one of Fermat's.
          <br />
          <br />
          We also see many important ideas that I have used almost every day in competitive
          programming.
          <br />
          <br />
          This book is in Spanish only. Sorry :(
        </span>
      ),
      spanish: (
        <span>
          Vamos, tienes que admitir que esta materia tiene el nombre más genial del mundo, Aquí
          aprenderas todo sobre los enteros, los primos y sus misterios.
          <br />
          <br />
          Sobretodo este texto se enfoca en la divisibilidad, hablaremos de los algoritmos de
          Euclides, así como del clásico GCD, LCM, las ecuaciones diofánticas, así como la función
          de Phi.
          <br />
          <br />
          Además también veremos ideas muy importantes que he usado casi todos los días en
          programación competitiva.
          <br />
          <br />
          Finalmente veremos todo lo que necesitas saber de las congruencias, como usarlas para
          resolver problemas, la Aritmética Modular y Teoremas importantes como el de Wilson,
          Teorema Chino del Residuo o alguno de Fermat.
        </span>
      ),
    },
    Topics: {
      spanish: [
        {
          Name: "Enteros",
          SubTopics: ["Construcción de los Enteros", "Operaciones con los Enteros"],
        },
        {
          Name: "Divisibilidad",
          SubTopics: [
            "Algoritmo de la División",
            "Divisibilidad",
            "Máximo Común Divisor",
            "Algoritmo de Euclides",
            "Mínimo Común Múltiplo",
            "Ecuaciones diofánticas",
            "Función Phi de Euler",
          ],
        },
        {
          Name: "Números Primos",
          SubTopics: [
            "Definición",
            "Proposiciones Importantes",
            "Teorema Fundamental de la Aritmética",
            "Factorización",
          ],
        },
        {
          Name: "Congruencias",
          SubTopics: [
            "Congruencias Módulo N",
            "Aritmetica Modular",
            "Teoremas Importantes",
            "Teorema de Wilson",
            "Teorema Chino del Residuo",
            "Ecuaciones Modulares",
          ],
        },
        {
          Name: "Polinomios",
          SubTopics: ["Cosas Básicas"],
        },
      ],
      english: [
        {
          Name: "Integers",
          SubTopics: ["Construction of the Integers", "Operations with the Integers"],
        },
        {
          Name: "Divisibility",
          SubTopics: [
            "Algorithm of the Division",
            "Divisibility",
            "Greatest common divisor",
            "Algorithm of Euclid",
            "Minimum Common Multiple",
            "Diofantic equations",
            "Phi function of Euler",
          ],
        },
        {
          Name: "Prime Numbers",
          SubTopics: [
            "Definition",
            "Important Proposals",
            "The fundamental theorem of arithmetic",
            "Factoring",
          ],
        },
        {
          Name: "Congruences",
          SubTopics: [
            "Congruences Module N",
            "Modular Arithmetic",
            "Important Theorems",
            "Wilson's Theorem",
            "Chinese Theorem of the Residue",
            "Modular equations",
          ],
        },
        {
          Name: "Polynomials",
          SubTopics: ["Basic things"],
        },
      ],
    },
    Tags: {
      english: ["Number Theory", "Divisibility", "Congruences"],
      spanish: ["Teoría de Números", "Divisibilidad", "Congruencias"],
    },
    CoAuthors: [],
    LinkToReadOnline:
      "https://CompilandoConocimiento.github.io/LibroTeoriaDeNumeros/LibroTeoriaDeNumeros.pdf",
    LinkToDownload:
      "https://CompilandoConocimiento.github.io/LibroTeoriaDeNumeros/LibroTeoriaDeNumeros.pdf",
  },
  LibroMatematicasDiscretas: {
    Title: {
      english: (
        <span>
          <b>Discrete</b> Math
        </span>
      ),
      spanish: (
        <span>
          <b>Matemáticas</b> Discretas
        </span>
      ),
    },
    SimpleTitle: {
      english: "Discrete Math",
      spanish: "Matemáticas Discretas",
    },
    LinkToProject: "https://github.com/CompilandoConocimiento/LibroMatematicasDiscretas",
    Color: "blue lighten-1",
    Intro: {
      english: (
        <span>
          This book contains the bases of all the mathematics, at least a small introduction,
          starting with Logic, induction and inferences.
          <br />
          <br />
          It contains the bases of the most famous mathematical object and perhaps the most
          important of all, sets, sets and sets, learn something sets!
          <br />
          <br />
          Finally, we will learn about relations and functions, the real base of Calculus.
          <br />
          <br />
          This book is in Spanish only. Sorry :(
        </span>
      ),
      spanish: (
        <span>
          Este libro contiene las bases de todas las matemáticas, al menos una pequeña introducción,
          comenzando con la Lógica. Inducción e inferencias.
          <br />
          <br />
          Contiene las bases del objeto matemático más famoso y tal vez el más importante de todos,
          conjuntos, conjuntos y conjuntos, ¡Aprende algo conjunto!
          <br />
          <br />
          Finalmente, aprenderemos sobre las relaciones y funciones, la base real de Cálculo.
        </span>
      ),
    },
    Topics: {
      spanish: [
        {
          Name: "Lógica Matemática",
          SubTopics: [
            "Proposiciones",
            "Conectores Lógicos",
            "Equivalentes Lógicos",
            "Leyes de Lógica",
            "Inferencias Lógicas",
          ],
        },
        {
          Name: "Cuantificadores Lógicos",
          SubTopics: [
            "Cuantificadores Y Sentencias Abiertas",
            "Cuantificador Universal",
            "Cuantificador Existencial",
            "Leyes",
          ],
        },
        {
          Name: "Conjuntos",
          SubTopics: [
            "Definición",
            "¿Cómo definirlo?",
            "Clasificación",
            "Conjunto Vacío",
            "Conjunto Universo",
          ],
        },
        {
          Name: "Álgebra de Conjuntos",
          SubTopics: [
            "Equivalencia",
            "Subconjunto",
            "Intersección",
            "Unión",
            "Resta",
            "Complemento",
            "Producto Potencia",
            "Producto Cartesiano",
            "Leyes de Conjuntos",
            "Cardinalidad y sus propiedades",
          ],
        },
        {
          Name: "Relaciones",
          SubTopics: [
            "Definición",
            "Dominio, Contradominio e Imágen",
            "Relación Inversa",
            "Relación Compuesta",
            "Relación Identidad",
            "Reflexiva, Simétrica y Transitiva",
            "Relación Equivalencia",
          ],
        },
        {
          Name: "Funciones",
          SubTopics: [
            "Definición",
            "Dominio e Imágen",
            "Inyectivas, Suprayectivas y Biyectivas",
            "Función Inversa",
            "Conjuntos Equipotentes",
            "Cardinalidad",
          ],
        },
        {
          Name: "Cosas Fueras de Lugar",
          SubTopics: ["Inducción", "Grupos", "Anillos", "Campos"],
        },
      ],
      english: [
        {
          Name: "Mathematical Logic",
          SubTopics: [
            "Propositions",
            "Logical connectors",
            "Logical Equivalents",
            "Logic Laws",
            "Logical Inferences",
          ],
        },
        {
          Name: "Logical Quantifiers",
          SubTopics: [
            "Quantifiers and Open Sentences",
            "Universal Quantifier",
            "Existential Quantifier",
            "Laws",
          ],
        },
        {
          Name: "Sets",
          SubTopics: [
            "Definition",
            "How to define it?",
            "Classification",
            "Empty Set",
            "Universe Set",
          ],
        },
        {
          Name: "Set Operations",
          SubTopics: [
            "Equivalence",
            "Subset",
            "Intersection",
            "Union",
            "Subtraction",
            "Complement",
            "Product Power",
            "Cartesian product",
            "Laws of Sets",
            "Cardinality and its properties",
          ],
        },
        {
          Name: "Relations",
          SubTopics: [
            "Definition",
            "Domain, Condominium and Image",
            "Inverse Relations",
            "Composite Relations",
            "Identity Relations",
            "Reflective, Symmetric and Transitive",
            "Equivalence Relation",
          ],
        },
        {
          Name: "Functions",
          SubTopics: [
            "Definition",
            "Domain and Image",
            "Injectives, Suprayectives and Bijectives",
            "Reverse Function",
            "Equipotent Sets",
            "Cardinality",
          ],
        },
        {
          Name: "Thing out of Place",
          SubTopics: ["Induction", "Groups", "Rings", "Fields"],
        },
      ],
    },
    Tags: {
      english: ["Math", "Sets", "Functions", "Logics"],
      spanish: ["Matemáticas", "Conjuntos", "Funciones", "Lógica"],
    },
    CoAuthors: [],
    LinkToReadOnline:
      "https://CompilandoConocimiento.github.io/LibroMatematicasDiscretas/LibroMatematicasDiscretas.pdf",
    LinkToDownload:
      "https://CompilandoConocimiento.github.io/LibroMatematicasDiscretas/LibroMatematicasDiscretas.pdf",
  },
  LibroAnalisisNumerico: {
    Title: {
      english: (
        <span>
          <b>Numerical</b> Analysis
        </span>
      ),
      spanish: (
        <span>
          <b>Análisis</b> Numérico
        </span>
      ),
    },
    SimpleTitle: {
      english: "Numerical Analysis",
      spanish: "Análisis Numérico",
    },
    LinkToProject: "https://github.com/CompilandoConocimiento/LibroAnalisisNumerico",
    Color: "grey darken-1",
    Intro: {
      english: (
        <span>
          This book contains some topics of Numerical Analysis. I have separated this topic into 2
          books, all the theory that includes Linear Algebra are in the book in Linear Algebra, all
          else are here.
          <br />
          <br />
          It contains the basics ideas for finding roots using numerical methods as Newton, Secant,
          Bisection; and their generalizations.
          <br />
          <br />
          Finally, we will learn about interpolation, or how to "approximate" a function with just
          some information about it.
          <br />
          <br />
          This book is in Spanish only. Sorry :(
        </span>
      ),
      spanish: (
        <span>
          Este libro contiene algunos temas de Análisis Numérico. He separado este tema en dos
          partes, todo lo que tiene que ver con Álgebra Lineal está en su libro, todo lo demás está
          aquí.
          <br />
          <br />
          Hablamos de la bases de como encontrar raíces usando métodos numéricos como el de Newton,
          Secante, Bisección y sus generalizaciones.
          <br />
          <br />
          Finalmente, aprendemos un poco sobre interpolación y como es que podemos aproximar una
          función con solo un poco de información.
        </span>
      ),
    },
    Topics: {
      spanish: [
        {
          Name: "Raíces de Funciones",
          SubTopics: ["Tolerancia", "Bisección", "Punto Fijo", "Newton", "Secante", "Regla Falsa"],
        },
        {
          Name: "Aproximar Sistemas de Ecuaciones NO lineales",
          SubTopics: ["Ideas generales"],
        },
        {
          Name: "Interpolantes",
          SubTopics: [
            "Interpolante Lineal",
            "Interpolante de Grado N",
            "Interpolante de Lagrange",
            "Interpolante de Newton",
            "Interpolante de Hermite",
          ],
        },
        {
          Name: "Optimización",
          SubTopics: ["Ideas generales"],
        },
      ],
      english: [
        {
          Name: "Roots of Functions",
          SubTopics: ["Tolerance", "Bisection", "Fixed Point", "Newton", "Drying", "False Rule"],
        },
        {
          Name: "Approximate Systems of Nonlinear Equations",
          SubTopics: ["General ideas"],
        },
        {
          Name: "Interpolants",
          SubTopics: [
            "Linear Interpolant",
            "Grade N Interpolant",
            "Lagrange's Interpolant",
            "Newton's Interpolant",
            "Hermite's Interpolant",
          ],
        },
        {
          Name: "Optimization",
          SubTopics: ["General ideas"],
        },
      ],
    },
    Tags: {
      english: ["Math", "Roots", "Newton", "Interpolants", "Optimization"],
      spanish: ["Matemáticas", "Raíces", "Newton", "Interpolantes", "Optimización"],
    },
    CoAuthors: [],
    LinkToReadOnline:
      "https://CompilandoConocimiento.github.io/LibroAnalisisNumerico/LibroAnalisisNumerico.pdf",
    LinkToDownload:
      "https://CompilandoConocimiento.github.io/LibroAnalisisNumerico/LibroAnalisisNumerico.pdf",
  },
  LibroBasesDeDatos: {
    Title: {
      english: (
        <span>
          <b>Data</b> Bases
        </span>
      ),
      spanish: (
        <span>
          <b>Bases </b>de Datos
        </span>
      ),
    },
    SimpleTitle: {
      english: "Data Bases",
      spanish: "Bases de Datos",
    },
    LinkToProject: "https://github.com/CompilandoConocimiento/LibroBasesDeDatos",
    Color: "yellow darken-2",
    Intro: {
      english: (
        <span>
          This book talks about databases, from several formal definitions, management systems and
          the operation and basic parts of the architecture of a database.
          <br />
          <br />
          It also talks about the ideas that it is an entity, a relationship, which are the
          attributes and that is the extended system. We will see about the relational databases,
          primary and foreign keys.
          <br />
          <br />
          Finally, we will see the bases of SQL.
          <br />
          <br />
          This book is in Spanish only. Sorry :(
        </span>
      ),
      spanish: (
        <span>
          Este libro habla de bases de datos, desde varias definiciones formales, sistemas gestores
          y el funcionamiento y partes básicas de la arquitectura de una base de datos.
          <br />
          <br />
          También habla de las ideas de que es una entidad, una relación, que son los atributos y
          que es el sistema extendido. Veremos sobre las bases de datos relacionales, llaves
          primarias y foráneas.
          <br />
          <br />
          Finalmente veremos las bases de SQL.
        </span>
      ),
    },
    Topics: {
      spanish: [
        {
          Name: "Definición",
          SubTopics: [
            "Repositorios de Datos",
            "Bases de Datos",
            "Elementos",
            "Abstracción",
            "DML y DDL",
            "Sistema Gestor",
            "Arquitectura",
          ],
        },
        {
          Name: "Entidad-Relación",
          SubTopics: ["Entidades", "Relaciones", "Atributos", "Sistema extendido"],
        },
        {
          Name: "Relacional",
          SubTopics: [
            "Introducción",
            "Llaves primarias y foráneas",
            "Mapear entidad-relación a relacional",
            "Normalización",
          ],
        },
        {
          Name: "SQL",
          SubTopics: ["Queries", "Views", "Procedimientos", "Locks", "Insertar información"],
        },
      ],
      english: [
        {
          Name: "Definition",
          SubTopics: [
            "Data Repositories",
            "Databases",
            "Elements",
            "Abstraction",
            "DML and DDL",
            "System Manager",
            "Architecture",
          ],
        },
        {
          Name: "Entity-Relationship",
          SubTopics: ["Entities", "Relations", "Attributes", "Extended system"],
        },
        {
          Name: "Relational",
          SubTopics: [
            "Introduction",
            "Primary and foreign keys",
            "Map entity-relationship to relationship",
            "Standardization",
          ],
        },
        {
          Name: "SQL",
          SubTopics: ["Queries", "Views", "Procedures", "Locks", "Insert information"],
        },
      ],
    },
    Tags: {
      english: ["BD", "Entity-Relationship", "Relational", "MySQL"],
      spanish: ["Entidad Relación", "Relacional", "MySQL"],
    },
    CoAuthors: [],
    LinkToReadOnline:
      "https://CompilandoConocimiento.github.io/LibroBasesDeDatos/LibroBasesDeDatos.pdf",
    LinkToDownload:
      "https://CompilandoConocimiento.github.io/LibroBasesDeDatos/LibroBasesDeDatos.pdf",
  },
}
