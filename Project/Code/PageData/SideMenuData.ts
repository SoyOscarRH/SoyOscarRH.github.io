import { Books } from "../PageData"
import Projects from "../PageData/Projects"
import Programs from "../PageData/Programs"
import { languages } from "../App"

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

const getSections = (language: languages) => {
  const BooksNames: Array<Link> = Object.entries(Books).map(
    ([nameForLink, data]) => [data.SimpleTitle[language], nameForLink] as Link
  )

  const ProjectsNames: Array<Link> = Object.keys(Projects).map(
    nameForLink => [nameForLink, nameForLink] as Link
  )

  const ProgramsNames: Array<Link> = Object.keys(Programs).map(
    nameForLink => [nameForLink, nameForLink] as Link
  )

  const index = language === "English" ? 0 : 1

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
