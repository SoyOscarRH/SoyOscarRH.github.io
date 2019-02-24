import AboutMeData from "./AboutMe"
import ProjectsAndProgramsData from "./ProjectsAndPrograms"
import {AboutBooksData, BooksData} from "./Books"
import ProjectsData from "./Projects"


export interface LanguageOption<T> {
    English: T, 
    Spanish: T
}

export const ProjectsAndPrograms = ProjectsAndProgramsData
export const AboutMe = AboutMeData
export const AboutBooks = AboutBooksData
export const Books = BooksData
export const Projects = ProjectsData
