import React from "react"

const daysSince = (date: Date) => {
  const milisecondsInADay = 1000 * 60 * 60 * 24
  const date1 = date.getTime()
  const date2 = Date.now()

  return Math.round((date2 - date1) / milisecondsInADay)
}

const Footer = () => (
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

export { daysSince }
export default Footer
