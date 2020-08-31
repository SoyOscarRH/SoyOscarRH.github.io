import React, { StrictMode } from "react"
import ReactDOM from "react-dom"

import App from "./code/App"

const DOM_NODE = document.getElementById("app")

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  DOM_NODE
)
