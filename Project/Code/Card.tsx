import React, { FunctionComponent, useContext } from "react"
import { Project } from "./PageData/Projects"
import { Program } from "./PageData/Programs"
import { Book } from "./PageData/Books"
import { LanguageContext } from "./App"

import * as Styles from "./Styles.css"

interface CardInfo {
  name: string
  Element: Project | Program
}

// @ts-ignore Just ignore the default value
const CardInfoContext = React.createContext<CardInfo>(null)

export const ProjectProgramCard: FunctionComponent<CardInfo> = props => {
  const [language] = useContext(LanguageContext)
  const { CheckOut: checkoutLink } = props.Element
  const checkOutStyle = props.Element.CheckOut
    ? { marginBottom: "0.1rem", cursor: "pointer" }
    : { display: "none" }

  return (
    <CardInfoContext.Provider value={props}>
      <div className={Styles.GridElement}>
        <div className={"card hoverable " + Styles.CardStyle}>
          <div className="card-image">
            <ImageIcon />
          </div>

          <div className="card-content left-align" style={{ padding: "16px" }}>
            <br />
            <p className={"blue-grey-text text-darken-3" + Styles.textStyle}>
              {props.Element[language]}
            </p>
          </div>

          <div className={Styles.BottomPart}>
            <ShowTags tags={props.Element.Topics[language]} />

            <div className="card-action" style={checkOutStyle}>
              <a className="activator" href={checkoutLink} target="_blank">
                {language === "English" ? "Check out" : "Velo tu mismo"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </CardInfoContext.Provider>
  )
}

const ImageIcon: FunctionComponent = () => {
  const [language] = useContext(LanguageContext)
  const index = language === "English" ? 0 : 1

  const { name, Element } = useContext(CardInfoContext)
  const { Color: color, LinkToProject: link, Title: title } = Element
  const tooltipped = ["See it in Github", "Ver el proyecto en Github"][index]

  return (
    <React.Fragment>
      <img
        className="materialboxed lazy"
        data-src={`Assets/Projects/${name}.png`}
        src={"Assets/Blank.png"}
      />
      <span className="card-title blue-grey-text text-darken-4">{title}</span>
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

/*
















*/

interface ListInCardProps {
  Language: "Spanish" | "English"
  Topics: Array<Topic>
}

interface Topic {
  Name: string
  SubTopics: Array<string>
}

const ListInCard: React.StatelessComponent<ListInCardProps> = props => (
  <React.Fragment>
    <span className="card-title grey-text text-darken-4 valign-wrapper">
      {props.Language === "English"
        ? "Topics in the Book"
        : "Temario del Libro"}
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

/*
export function BookCard(
  BookName: string,
  Book: Book,
  Language: "English" | "Spanish"
) {
  return (
    <div className={Styles.GridElement} key={BookName} id={BookName}>
      <div className="card hoverable" + Styles.CardStyle}>
        <div className="card-reveal blue-grey-text text-darken-3">
          <ListInCard Language={Language} Topics={Book.Topics[Language]} />
        </div>

        <div className="card-image">
          <ImageIcon {...props}
            imageName={`Assets/Books/${BookName}.png`}
            title={Book.Title[Language]}
            linkToProject={Book.LinkToProject}
            color={Book.Color}
            tooltip={
              Language === "English"
                ? "See it in Github"
                : "Ver el proyecto en Github"
            }
          />
        </div>

        <div className="card-content left-align" style={{ padding: "16px" }}>
          <br />

          <p
            className="blue-grey-text text-darken-3"
            style={{ padding: "0.6rem", textAlign: "justify" }}
          >
            {Book.Intro[Language]}
          </p>

          {Book.CoAuthors != "" ? (
            <React.Fragment>
              <br />
              <span className="blue-grey-text text-darken-3">
                {Language === "English"
                  ? "Written in collaboration with: "
                  : "Escrito en colaboración con: "}
                {Book.CoAuthors}
              </span>
              <br />
            </React.Fragment>
          ) : null}
        </div>

        <div className={Styles.BottomPart}>
          <ShowTags tags={Book.Tags[Language]} />

          <div className="card-action" style={Styles.CardActionStyle}>
            <a className="activator" style={{ cursor: "pointer" }}>
              {Language === "English" ? "TOPICS" : "TEMARIO"}
            </a>
            <a target="_blank" href={Book.LinkToReadOnline}>
              {Language === "English" ? "READ ONLINE" : "LEE EN LÍNEA"}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

*/
