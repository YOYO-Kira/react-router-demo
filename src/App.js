import React from "react"
import Main from "./commponents/Main"
import { NavLink } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import './app.css'
function App() {
  return (
    <Router className='App'>
      <ul>
        <li>
          <NavLink
            className='nav-item'
            exact
            activeStyle={{ color: "red" }}
            to='/'
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to='/about'>
            about
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to='/users'>
            users
          </NavLink>
        </li>
      </ul>
      <Main />
    </Router>
  )
}
export default App