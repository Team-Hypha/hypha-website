import * as React from 'react'
import Layout from '../components/layout'
// import './team.css'

const TeamPage = () => {
  return (
    <Layout>
      <div className="section header" id="team-header">
        <div className="container">
          <div className="hero-text-container">
            <h1 className="h1 centered">The Team</h1>
          </div>
          <p className="intro-paragraph white-paragraph centered" id="team-paragraph">
            Tapestry is built by a remote team of software engineers. We're currently looking for our next
            opportunities. Let's talk!
          </p>
        </div>
      </div>
      <div className="section team-section">
        <div className="container">
          <div className="tabs w-tabs">
            <div className="tabs-content w-tab-content">
              <div>
                <div className="team-grid">
                  <div className="team-member-wrap">
                    <img src="/team/stephen.jpg" loading="lazy" alt="" />
                    <div className="team-member-info">
                      <div className="team-member-name">Katherine Beck</div>
                      <div className="team-member-location">Los Angeles, CA</div>
                    </div>
                    <ul className="team-member-icons">
                      <li>
                        <a href="mailto:hello@katherinebeck.me" target="_blank">
                          <span className="team-member-icon">
                            <i className="fas fa-envelope"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="http://katherinebeck.me" target="_blank">
                          <span className="team-member-icon">
                            <i className="fas fa-globe"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/katherine-m-beck/" target="_blank">
                          <span className="team-member-icon">
                            <i className="fab fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-member-wrap">
                    <img src="/team/isaak.jpg" loading="lazy" alt="" />
                    <div className="team-member-info">
                      <div className="team-member-name">Leah Garrison</div>
                      <div className="team-member-location">Atlanta, GA</div>
                    </div>
                    <ul className="team-member-icons">
                      <li>
                        <a href="mailto:lgarrison1023@gmail.com" target="_blank">
                          <span className="team-member-icon">
                            <i className="fas fa-envelope"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://leahgarrison.com" target="_blank">
                          <span className="team-member-icon">
                            <i className="fas fa-globe"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/leahgarrison/" target="_blank">
                          <span className="team-member-icon">
                            <i className="fab fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-member-wrap">
                    <img src="/team/josh.jpg" loading="lazy" alt="" />
                    <div className="team-member-info">
                      <div className="team-member-name">Rick Molé</div>
                      <div className="team-member-location">New York, NY</div>
                    </div>
                    <ul className="team-member-icons">
                      <li>
                        <a href="mailto:hello@rickmole.dev" target="_blank">
                          <span className="team-member-icon">
                            <i className="fas fa-envelope"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://rickmole.dev" target="_blank">
                          <span className="team-member-icon">
                            <i className="fas fa-globe"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/rick-mole/" target="_blank">
                          <span className="team-member-icon">
                            <i className="fab fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-member-wrap">
                    <img src="/team/iuliu.jpg" loading="lazy" alt="" />
                    <div className="team-member-info">
                      <div className="team-member-name">Adam Peterson</div>
                      <div className="team-member-location">Lexington, KY</div>
                    </div>
                    <ul className="team-member-icons">
                      <li>
                        <a href="mailto:adampeterson.tech@gmail.com" target="_blank">
                          <span className="team-member-icon">
                            <i className="fas fa-envelope"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://adampeterson.tech" target="_blank">
                          <span className="team-member-icon">
                            <i className="fas fa-globe"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/adam-peterson-211a1041/" target="_blank">
                          <span className="team-member-icon">
                            <i className="fab fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TeamPage
