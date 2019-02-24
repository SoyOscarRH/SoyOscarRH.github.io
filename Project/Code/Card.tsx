import React, { FunctionComponent, useContext } from "react"
import { Project } from "./PageData/Projects"
import { Program } from "./PageData/Programs"
import { Book } from "./PageData/Books"
import { LanguageContext } from "./App"

import * as Styles from "./Styles.css"

interface CardInfo {
  name: string
  Element: Project | Program | Book
  type: "ProjectProgram" | "Book"
}

// @ts-ignore Just ignore the default value
const CardInfoContext = React.createContext<CardInfo>(null)

export const Card: FunctionComponent<CardInfo> = props => {
  const [language] = useContext(LanguageContext)
  const index = language === "English" ? 0 : 1

  let link: string | undefined = ""
  let coauthors: Array<string> = []
  let text = <span />
  let topics: Array<Topic> = []

  if (props.type === "ProjectProgram") {
    const ProjectProgram = props.Element as Project | Program
    link = ProjectProgram.CheckOut
    text = ProjectProgram[language]
  } else {
    const Book = props.Element as Book
    link = Book.LinkToReadOnline
    if (Book.CoAuthors) coauthors = [Book.CoAuthors]
    text = Book.Intro[language]
    topics = Book.Topics[language]
  }

  // from <div className="card-reveal blue-grey-text text-darken-3">
  // to <div className="card-reveal">

  const cardActionsStyle = link
    ? { marginBottom: "0.1rem", cursor: "pointer" }
    : { display: "none" }

  return (
    <CardInfoContext.Provider value={props}>
      <div className={Styles.GridElement} id={name}>
        <div className={"card hoverable " + Styles.CardStyle}>
          <div className="card-reveal blue-grey-text text-darken-3">
            <ListInCard Topics={topics} />
          </div>

          <div className="card-image">
            <ImageIcon />
          </div>

          <div className="card-content left-align" style={{ padding: "16px" }}>
            <br />
            <p className={"blue-grey-text text-darken-3" + Styles.textStyle}>
              {text}
            </p>
            {coauthors != [] ? (
              <React.Fragment>
                <br />
                <span className="blue-grey-text text-darken-3">
                  {
                    [
                      "Created in collaboration with: ",
                      "Creado en colaboración con: ",
                    ][index]
                  }
                  {coauthors}
                </span>
                <br />
              </React.Fragment>
            ) : null}
          </div>

          <div className={Styles.BottomPart}>
            <ShowTags tags={props.Element.Tags[language]} />

            <div className="card-action" style={cardActionsStyle}>
              <CardActions type={props.type} link={link} />
            </div>
          </div>
        </div>
      </div>
    </CardInfoContext.Provider>
  )
}

const CardActions: FunctionComponent<{
  type: "Book" | "ProjectProgram"
  link: string | undefined
}> = props => {
  const [language] = useContext(LanguageContext)
  const index = language === "English" ? 0 : 1

  if (props.type === "Book")
    return (
      <React.Fragment>
        <a className="activator" style={{ cursor: "pointer" }}>
          {["TOPICS", "TEMARIO"][index]}
        </a>
        <a target="_blank" href={props.link}>
          {["READ ONLINE", "LEE EN LÍNEA"][index]}
        </a>
      </React.Fragment>
    )
  else
    return (
      <a className="activator" href={props.link} target="_blank">
        {["Check out", "Velo tu mismo"][index]}
      </a>
    )
}

const ImageIcon: FunctionComponent = () => {
  const [language] = useContext(LanguageContext)
  const index = language === "English" ? 0 : 1

  const { Element, name, type } = useContext(CardInfoContext)
  const { Color: color, LinkToProject: link, Title: title } = Element
  const tooltipped = ["See it in Github", "Ver el proyecto en Github"][index]

  const folder = type === "Book"? "Books" : "Projects" 

  return (
    <React.Fragment>
      <img
        className="materialboxed lazy"
        data-src={`Assets/${folder}/${name}.png`}
        src={"Assets/Blank.png"}
      />
      <span className="card-title blue-grey-text text-darken-4">
        {
          type === "Book"? title[language] : title}
      </span>
      <a
        className={"tooltipped btn-floating btn-large halfway-fab " + color}
        href={link}
        style={{ padding: "3.5px 4px 4px 4px" }}
        data-position="top"
        data-tooltip={tooltipped}
        target="_blank"
      >
        <img src="Assets/Icons/githubMini.png" />
      </a>
    </React.Fragment>
  )
}

const ShowTags: FunctionComponent<{ tags: Array<string> }> = ({ tags }) => (
  <div className={Styles.tagsPart}>
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
  const [language] = useContext(LanguageContext)
  const index = language === "English" ? 0 : 1

  if (!props.Topics) return null

  return (
    <React.Fragment>
      <span className="card-title grey-text text-darken-4 valign-wrapper">
        {["Topics in the Book", "Temario del Libro"][index]}
        <i className="material-icons right">close</i>
      </span>

      <br />
      <br />

      <div>
        <ul className="collapsible popout left-align">
          {props.Topics.map((Topic, index) => (
            <li key={`${index} Collapsible`}>
              <div className="collapsible-header">{Topic.Name}</div>

              <div className="collapsible-body">
                <ul style={{ fontSize: "0.8rem" }} className="browser-default">
                  {Topic.SubTopics.map((item, subindex) => (
                    <li key={`${Topic.Name} ${subindex}`}>{item}</li>
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
