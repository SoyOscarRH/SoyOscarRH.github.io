// ======================================================================
// ============          WEB APP IN REACT           =====================
// ======================================================================

/* ========= BASIC REACT THINGS ===============*/
import React from "react"
import ReactDOM from "react-dom"

/* ========= MATERIALIZCE CSS =================*/
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

/* ========= THE COMPONENTS ==================*/
import AppHeader from "./AppHeader"


// =====================================================================
// ============              APP COMPONENTS        =====================
// =====================================================================
class App extends React.Component {
  render () {
    return (
      <div>
      <header>
          <AppHeader />
      </header>
      <main>
        <br />
      </main>
        <br />
      <footer>
        <br />
      </footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("ReactApp"))