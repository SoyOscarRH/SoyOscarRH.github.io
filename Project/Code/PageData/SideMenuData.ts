import { ProjectsAndPrograms, Books } from "../PageData"
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
  const BooksNames: Array<Link> = []
  const ProjectsNames: Array<Link> = []
  const ProgramsNames: Array<Link> = []

  Object.entries(Books).forEach(([name, data]) =>
    BooksNames.push([data.SimpleTitle[language], name])
  )

  Object.entries(ProjectsAndPrograms).forEach(([name, data]) => {
    switch (data.Type) {
      case "Project":
        ProjectsNames.push([name, name])
        break
      case "Program":
        ProgramsNames.push([name, name])
        break
    }
  })

  const index = language === "English" ? 0 : 1

  const SideMenuData: Sections = {
    AboutMe: {
      Title: "Personal",
      Icon: ["account_circle", "grey"],
      Links: [
        [["About Me", "Sobre Mi"][index], "AboutMe"],
        ["Curriculum", "AboutMe"],
      ],
    },
    Projects: {
      Title: ["Projects", "Proyectos"][index],
      Links: ProjectsNames,
      Icon: ["dashboard", "green"]
    },
    Programs: {
      Title: ["Cool Ideas", "Ideas Interesantes"][index],
      Links: ProgramsNames,
      Icon: ["description", "teal"]
    },
    Books: {
      Title: ["Books", "Libros"][index],
      Links: BooksNames,
      Icon: ["book", "purple"]
    },
  }

  return SideMenuData
}

export default getSections
