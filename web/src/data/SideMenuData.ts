import { BooksData } from "./Books"
import Projects from "./Projects"
import Programs from "./Programs"
import { languageName } from "../code/App/Language"

type linkName = string
type linkURL = string
type Link = [linkName, linkURL]

export interface Section {
  Title: string
  Links: Array<Link>
  Icon: [string, string]
}

export interface Sections {
  [key: string]: Section
}

const getSections = (language: languageName) => {
  const BooksNames: Array<Link> = Object.entries(BooksData).map(
    ([nameForLink, data]) => [data.SimpleTitle[language], nameForLink] as Link
  )

  const ProjectsNames: Array<Link> = Object.keys(Projects).map(
    nameForLink => [nameForLink, nameForLink] as Link
  )

  const ProgramsNames: Array<Link> = Object.keys(Programs).map(
    nameForLink => [nameForLink, nameForLink] as Link
  )

  const SideMenuData: Sections = {
    AboutMe: {
      Title: "Personal",
      Icon: ["account_circle", "grey"],
      Links: [
        [language === "english" ? "About Me" : "Sobre Mi", "About Me"],
        [language === "english" ? "Curriculum" : "AboutMe", "AboutMe"],
      ],
    },
    Projects: {
      Title: language === "english" ? "Projects" : "Proyectos",
      Links: ProjectsNames,
      Icon: ["dashboard", "green"],
    },
    Programs: {
      Title: language === "english" ? "Cool Ideas" : "Ideas Interesantes",
      Links: ProgramsNames,
      Icon: ["description", "teal"],
    },
    Books: {
      Title: language === "english" ? "Books" : "Libros",
      Links: BooksNames,
      Icon: ["book", "purple"],
    },
  }

  return SideMenuData
}

export default getSections
