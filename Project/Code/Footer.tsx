import React from "react"

export function daysSince(Date1: Date) {
  const milisecondsInADay = 1000 * 60 * 60 * 24
  const date1 = Date1.getTime(),
    date2 = Date.now()
  const differenceMs = Math.abs(date1 - date2)

  return Math.round(differenceMs / milisecondsInADay)
}

export default function Footer() {
  return (
    <footer className="page-footer blue-grey darken-3">
      <br />
      <br />

      <div className="footer-copyright blue-grey darken-4">
        <div className="container">
          Made by Oscar Andrés Rosas Hernandez. {daysSince(new Date("03/23/1998"))} days alive
        </div>
      </div>
    </footer>
  )
}
