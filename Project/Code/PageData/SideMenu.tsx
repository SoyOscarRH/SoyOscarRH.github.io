import ProjectsAndProgramsData from "./ProjectsAndPrograms"
import {BooksData} from "./Books"
import {LanguageOption} from "./index"

export type Link = [string, string]
export interface Section {
    Title: string,
    Links: Array<Link>
}

export interface SideMenu {
    AboutMe:  LanguageOption<Section>,
    Projects: LanguageOption<Section>,
    Programs: LanguageOption<Section>,
    Books:    LanguageOption<Section>,
}

const BooksNames: Array<[LanguageOption<string>, string]> = Object.entries(BooksData).map( 
    ([Name, Data]) => [Data.SimpleTitle, Name] as [LanguageOption<string>, string]
)

const ProjectsAndPrograms: Array<[string, "Project" | "Program"]> = Object.entries(ProjectsAndProgramsData).map( 
    ([Name, Data]) => [Name, Data.Type] as [string, "Project" | "Program"]
)

const ProjectsNames = ProjectsAndPrograms
        .filter(Element => Element[1] === "Project")
        .map(Element => [Element[0], Element[0]] as Link)

const ProgramsNames = ProjectsAndPrograms
        .filter(Element => Element[1] === "Program")
        .map(Element => [Element[0], Element[0]] as Link)

const SideMenuData: SideMenu = {
    AboutMe: {
        Spanish: {
            Title: "Personal",
            Links: [
                ["Sobre Mi", "AboutMe"],
                ["Curriculum", "AboutMe"],
            ]
        },
        English: {
            Title: "Personal",
            Links: [
                ["About Me", "AboutMe"],
                ["Curriculum", "AboutMe"],
            ]
        },
    },
    Projects: {
        Spanish: {
            Title: "Proyectos",
            Links: ProjectsNames
        },
        English: {
            Title: "Projects",
            Links: ProjectsNames
        }
    },
    Programs: {
        Spanish: {
            Title: "Programas",
            Links: ProgramsNames
        },
        English: {
            Title: "Programs",
            Links: ProgramsNames
        }
    },
    Books: {
        Spanish: {
            Title: "Libros",
            Links: BooksNames.map( Element => [Element[0].Spanish, Element[1]] as Link )
        },
        English: {
            Title: "Books",
            Links: BooksNames.map( Element => [Element[0].English, Element[1]] as Link )
        },
    }
}

export default SideMenuData