import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/hypha-graphic-color.png'
import './layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav className="nav">
          <Link to="/" title="Home Page">
            <img src={logo} alt="Hypha Logo" className="nav__logo" />
          </Link>
          <ul className="nav__list">
            <li>
              <Link to="/case-study">Case Study</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <a href="https://github.com" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
