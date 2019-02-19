import { ProjectsAndPrograms, Books, LanguageOption } from "../../PageData"

type linkName = string
type linkURL = string
type Link = [linkName, linkURL]

const BooksNames = Object.entries(Books).map(
  ([name, data]) => [data.SimpleTitle, name] as [LanguageOption<string>, string]
)

const ProjectsNames: Array<Link> = []
const ProgramsNames: Array<Link> = []

Object.entries(ProjectsAndPrograms)
  .map(([name, data]) => [name, data.Type] as [string, "Project" | "Program"])
  .forEach(([name, type]) => {
    switch (type) {
      case "Project":
        ProjectsNames.push([name, name])
        break
      case "Program":
        ProgramsNames.push([name, name])
        break
    }
  })

export interface Section {
  Title: string
  Links: Array<Link>
}

interface SideMenuSections {
  AboutMe: LanguageOption<Section>
  Projects: LanguageOption<Section>
  Programs: LanguageOption<Section>
  Books: LanguageOption<Section>
}

export const SideMenuData: SideMenuSections = {
  AboutMe: {
    Spanish: {
      Title: "Personal",
      Links: [["Sobre Mi", "AboutMe"], ["Curriculum", "AboutMe"]],
    },
    English: {
      Title: "Personal",
      Links: [["About Me", "AboutMe"], ["Curriculum", "AboutMe"]],
    },
  },
  Projects: {
    Spanish: { Title: "Proyectos", Links: ProjectsNames },
    English: { Title: "Projects", Links: ProjectsNames },
  },
  Programs: {
    Spanish: { Title: "Ideas Interesantes", Links: ProgramsNames },
    English: { Title: "Cool Programs", Links: ProgramsNames },
  },
  Books: {
    Spanish: {
      Title: "Libros",
      Links: BooksNames.map(
        ([bookname, bookLink]) => [bookname.Spanish, bookLink] as Link
      ),
    },
    English: {
      Title: "Books",
      Links: BooksNames.map(
        ([bookname, bookLink]) => [bookname.English, bookLink] as Link
      ),
    },
  },
}