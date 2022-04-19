import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/hypha-logo-color.png'
import './layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" title="Home Page">
                <img src={logo} alt="Hypha Logo" />
              </Link>
            </li>
            <li>
              <Link to="/case-study">Case Study</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <a href="https://github.com">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
