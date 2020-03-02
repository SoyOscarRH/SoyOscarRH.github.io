import React, { FC, useEffect, useState, useRef } from "react"

import { Container as ContainerStyle } from "../Card/Styles.css"
import * as Styles from "./Styles.css"

interface Comment {
  username: string
  message: string
  time: number
}

const Comments: FC = () => {
  const [comments, updateComments] = useState([] as Array<Comment>)

  async function getComments() {
    const response = await fetch("/get_comments", { method: "POST" })
    const comments = (await response.json()) as Array<Comment>
    updateComments(comments)
  }

  useEffect(() => {
    getComments()
  }, [])


  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const username = form.current?.elements["username"].value as string
    const message = form.current?.elements["message"].value as string

    console.log({username,  message})
    event.preventDefault()
  }

  return (
    <section className={`center-align ${ContainerStyle} blue-grey-text text-darken-3`}>
      <h4>
        <b>Comments</b>
      </h4>
      <br />

      <div className={Styles.commentsContainer}>
        <form ref={form} className={Styles.newComment} onSubmit={handleSubmit}>
          <h5>Leave a comment:</h5>
          <div className={Styles.comment}>
            <div className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <input required id="username" name="username" type="text" className="validate" />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">chat</i>
              <input required id="message" name="message" type="text" className="validate" />
              <label htmlFor="message">Comment</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>

        {comments.map(comment => (
          <div className={Styles.comment} key={`${comment.time} ${comment.username}`}>
            <div>
              {comment.username} {new Date(comment.time).toLocaleString()}
            </div>
            <div>{comment.message}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Comments
