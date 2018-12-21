import React from "react"
import {ProjectsAndPrograms, Books, LanguageOption} from "../PageData"

type Link = [string, string]
interface Section { Title: string, Links: Array<Link> }
interface SideMenu {
    AboutMe:  LanguageOption<Section>,
    Projects: LanguageOption<Section>,
    Programs: LanguageOption<Section>,
    Books:    LanguageOption<Section>,
}

const BooksNames: Array<[LanguageOption<string>, string]> = Object.entries(Books).map( 
    ([Name, Data]) => [Data.SimpleTitle, Name] as [LanguageOption<string>, string]
)

const ProjectsAndProgramsNames: Array<[string, "Project" | "Program"]> = Object.entries(ProjectsAndPrograms).map( 
    ([Name, Data]) => [Name, Data.Type] as [string, "Project" | "Program"]
)

const ProjectsNames = ProjectsAndProgramsNames
        .filter(Element => Element[1] === "Project")
        .map(Element => [Element[0], Element[0]] as Link)

const ProgramsNames = ProjectsAndProgramsNames
        .filter(Element => Element[1] === "Program")
        .map(Element => [Element[0], Element[0]] as Link)


const SideMenuData: SideMenu = {
    AboutMe: {
        Spanish: {
            Title: "Personal",
            Links: [ ["Sobre Mi", "AboutMe"], ["Curriculum", "AboutMe"] ]
        },
        English: {
            Title: "Personal",
            Links: [ ["About Me", "AboutMe"], ["Curriculum", "AboutMe"] ]
        },
    },
    Projects: {
        Spanish: { Title: "Proyectos", Links: ProjectsNames },
        English: { Title: "Projects",  Links: ProjectsNames },
    },
    Programs: {
        Spanish: { Title: "Programas", Links: ProgramsNames },
        English: { Title: "Programs",  Links: ProgramsNames },
    },
    Books: {
        Spanish: { Title: "Libros", Links: BooksNames.map( Element => [Element[0].Spanish, Element[1]] as Link ) },
        English: { Title: "Books",  Links: BooksNames.map( Element => [Element[0].English, Element[1]] as Link ) },
    }
}

const LinksToSocialMedia: React.StatelessComponent<{}> = () => (
    <div className="row">
        <div className="col s8 offset-s2">
            <div className="row">
                <a target="_blank" href="https://github.com/SoyOscarRH">
                    <img className="col s3" src="Assets/Icons/github.png"/>
                </a>
                <a target="_blank" href="http://compilandoconocimiento.com/">
                    <img className="col s3" src="Assets/Icons/wordpress.png"/>
                </a>
                <a target="_blank" href="http://twitter.com/SoyOscarRH">
                    <img className="col s3" src="Assets/Icons/twitter.png"/>
                </a>
                <a target="_blank" href="https://telegram.me/SoyOscarRH">
                    <img className="col s3" src="Assets/Icons/telegram.png"/>
                </a>
            </div>
        </div>
    </div>
)

interface NameLogoProps {
    baseColor: string,
    accentColor: string,
}

const NameLogo: React.StatelessComponent<NameLogoProps> = (props: NameLogoProps) => {

    const someStyle = {color: props.accentColor}
    return (
        <h5 style={{fontWeight: 500, fontSize: "2.1rem", margin: "2.5rem", color: props.baseColor, fontFamily: 'Source Sans Pro'}}>
            <b style={someStyle}>Soy</b>Oscar<b style={someStyle}>RH</b>
        </h5>
    )
}


interface SideMenuProps {
    manageChangeLanguage: any,
    Language: any,
}

const SideMenu: React.StatelessComponent<SideMenuProps> = (props: SideMenuProps) => {

    const currentLanguage = props.Language === "English"? "English" : "Inglés" 
    const otherLanguage   = props.Language === "English"? "Spanish" : "Español" 
    const languageTitle   = props.Language === "English"? "Language" : "Lenguaje" 

    return (
        <ul id="SideBarID" className="sidenav">
                    
            <li className="center">
                <NameLogo baseColor="#2e4045" accentColor="#5e3c58" />
            </li>

            <li>
                <LinksToSocialMedia />
            </li>

            <li>
                <a className="subheader center">{languageTitle}</a>
            </li>

            <li className="container">
                <div className="switch center">
                    <label>
                        {otherLanguage}
                        <input type="checkbox" onChange={props.manageChangeLanguage} checked={props.Language === "English"} />
                        <span className="lever" />
                        {currentLanguage}
                    </label>
                </div>  
            </li>
            
            <li><div className="divider" /></li>

            {
                Object.entries(SideMenuData).map( Element => {
                    const sectionName = Element[0], SideElementSection = Element[1][props.Language]

                    return (
                        <React.Fragment key={`Type ${sectionName}`}>
                            <li>
                                <a className="subheader">
                                    {SideElementSection.Title}
                                </a>
                            </li>

                            {SideElementSection.Links.map( 
                                (Link: [string, string]) => (
                                    <li key={`Link ${Link[1]} ${Link[0]}`}>
                                        <a className="waves-effect" href={`#${Link[1]}`}>
                                            &nbsp; &nbsp; {Link[0]}
                                        </a>
                                    </li>
                                )
                            )}

                        </React.Fragment>
                    )

                })
            }

            <br />
            <br />
            <br />
            <br />
            <br />
        </ul>
    )
}



export default SideMenu