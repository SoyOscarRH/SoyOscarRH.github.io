import { BooksData } from "../PageData"
import Projects from "../PageData/Projects"
import Programs from "../PageData/Programs"
import { Language } from "../App/Language"

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

const getSections = (language: Language) => {
  const { name, index } = language

  const BooksNames: Array<Link> = Object.entries(BooksData).map(
    ([nameForLink, data]) => [data.SimpleTitle[name], nameForLink] as Link
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
      Links: [[["About Me", "Sobre Mi"][index], "AboutMe"], ["Curriculum", "AboutMe"]],
    },
    Projects: {
      Title: ["Projects", "Proyectos"][index],
      Links: ProjectsNames,
      Icon: ["dashboard", "green"],
    },
    Programs: {
      Title: ["Cool Ideas", "Ideas Interesantes"][index],
      Links: ProgramsNames,
      Icon: ["description", "teal"],
    },
    Books: {
      Title: ["Books", "Libros"][index],
      Links: BooksNames,
      Icon: ["book", "purple"],
    },
  }

  return SideMenuData
}

export default getSections
