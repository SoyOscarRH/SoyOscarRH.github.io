import React, { FunctionComponent, useContext } from "react"

import { useCurrentLanguage } from "../App/Language"
import { Project } from "../../data/Projects"
import { Program } from "../../data/Programs"
import { Book } from "../../data/Books"

import Styles from "./Styles.module.css"

interface CardInfo {
  name: string
  Element: Project | Program | Book
  type: "Project" | "Program" | "Book"
}

// @ts-ignore Just ignore the default value
const CardInfoContext = React.createContext<CardInfo>(null)

export const Card: FunctionComponent<CardInfo> = props => {
  const language = useCurrentLanguage()

  let link: string | undefined = ""
  let coauthors: Array<string> = []
  let text = <span />
  let topics: Array<Topic> = []

  if (props.type === "Project" || props.type === "Program") {
    const ProjectProgram = props.Element as Project | Program
    link = ProjectProgram.CheckOut
    text = ProjectProgram[language]
  } else {
    const Book = props.Element as Book
    link = Book.LinkToReadOnline
    coauthors = Book.CoAuthors
    text = Book.Intro[language]
    topics = Book.Topics[language]
  }

  const cardActionsStyle = link
    ? { marginBottom: "0.1rem", cursor: "pointer" }
    : { display: "none" }

  return (
    <CardInfoContext.Provider value={props}>
      <div className={Styles.GridElement} id={props.name}>
        <div className={"card hoverable " + Styles.CardStyle}>
          <div className="card-reveal blue-grey-text text-darken-3">
            <ListInCard Topics={topics} />
          </div>

          <div className="card-image">
            <ImageIcon />
          </div>

          <div className="card-content left-align" style={{ padding: "16px" }}>
            <CardText text={text} coauthors={coauthors} />
          </div>

          <div className={Styles.BottomPart}>
            <ShowTags tags={props.Element.Tags[language]} />

            <div className="card-action" style={{ ...cardActionsStyle, fontWeight: 600 }}>
              <CardActions type={props.type} link={link} />
            </div>
          </div>
        </div>
      </div>
    </CardInfoContext.Provider>
  )
}

const CardText: FunctionComponent<{
  text: JSX.Element
  coauthors: Array<string>
}> = props => {
  const language = useCurrentLanguage()
  const coauthors =
    props.coauthors.length > 0 ? (
      <React.Fragment>
        <br />
        <span className="blue-grey-text text-darken-3">
          {language === "english" ? "Created with: " : "Creado junto con: "}
          {props.coauthors.join(", ")}
        </span>
        <br />
      </React.Fragment>
    ) : null

  return (
    <div className={"blue-grey-text text-darken-3 " + Styles.TextStyle}>
      <br />
      <div>{props.text}</div>
      {coauthors}
    </div>
  )
}

const CardActions: FunctionComponent<{
  type: "Book" | "Project" | "Program"
  link: string | undefined
}> = props => {
  const language = useCurrentLanguage()

  if (props.type === "Book")
    return (
      <React.Fragment>
        <span className="activator orange-text text-accent-2" style={{ cursor: "pointer", paddingRight: "1.5rem" }}>
          {language === "english" ? "TOPICS" : "TEMARIO"}
        </span>
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          {language === "english" ? "READ ONLINE" : "LEE EN LÍNEA"}
        </a>
      </React.Fragment>
    )
  else
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {language === "english" ? "Check out" : "Velo tu mismo"}
      </a>
    )
}

const ImageIcon: FunctionComponent = () => {
  const language = useCurrentLanguage()

  const { Element, name, type } = useContext(CardInfoContext)
  const { Color: color, LinkToProject: link, Title: title, Extension: extension } = Element
  const tooltipped = language === "english" ? "See it in Github" : "Ver el proyecto en Github"

  const folder = type === "Book" ? "Books" : "Projects"

  let icon = ""
  if (type === "Book") icon = "book"
  else if (type === "Project") icon = "dashboard"
  else if (type === "Program") icon = "description"

  return (
    <>
      <img
        className="materialboxed lazy"
        alt={name}
        data-src={`Images/${folder}/${name}.${extension ?? "png"}`}
        src={"Images/Blank.png"}
      />
      <span className={"card-title blue-grey-text text-darken-4 valign-wrapper " + Styles.Title}>
        <i className="material-icons" style={{ fontSize: "1.5rem" }}>
          {icon}
        </i>
        &nbsp;
        {
        // @ts-ignore
        type === "Book" ? title[language] : title
        }
        {language === "english" ? "Topics in the Book" : "Temario del Libro"}
      </span>
      <a
        className={"tooltipped btn-floating btn-large halfway-fab " + color}
        href={link}
        style={{ padding: "3.5px 4px 4px 4px" }}
        data-position="top"
        data-tooltip={tooltipped}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="github-icon"src="Images/Icons/githubMini.png" />
      </a>
    </>
  )
}

const ShowTags: FunctionComponent<{ tags: Array<string> }> = ({ tags }) => (
  <div className={Styles.TagsPart}>
    {tags.map(tag => (
      <div key={tag} className="chip" style={{ fontSize: "0.8rem" }}>
        {tag}
      </div>
    ))}
  </div>
)

interface Topic {
  Name: string
  SubTopics: Array<string>
}

const ListInCard: React.StatelessComponent<{
  Topics: Array<Topic>
}> = props => {
  const language = useCurrentLanguage()
  if (!props.Topics) return null

  return (
    <React.Fragment>
      <span className={"card-title grey-text text-darken-4 valign-wrapper " + Styles.Title}>
        {language === "english" ? "Topics in the Book" : "Temario del Libro"}
        <i className="material-icons right">close</i>
      </span>

      <br />
      <br />

      <div>
        <ul className="collapsible popout left-align">
          {props.Topics.map((Topic, index) => (
            <li key={index}>
              <div className="collapsible-header">{Topic.Name}</div>

              <div className="collapsible-body">
                <ul style={{ fontSize: "0.8rem" }} className="browser-default">
                  {Topic.SubTopics.map((item, subindex) => (
                    <li key={subindex}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Card
