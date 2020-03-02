import React, { FC, useEffect, useState } from "react"

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
    const response = await fetch("/get_comments")
    const comments = (await response.json()) as Array<Comment>
    updateComments(comments)
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <section className={`center-align ${ContainerStyle}`}>
      <h4 className="blue-grey-text text-darken-3">
        <b>Comments</b>
      </h4>
      <br />

      <div className={Styles.commentsContainer}>
        {comments.map(comment => (
          <div className={Styles.comment} key={`${comment.time} ${comment.username}`}>
            <div>
              {comment.username} {" "}
              {new Date(comment.time).toLocaleString()}
            </div>
            <div>{comment.message}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Comments
