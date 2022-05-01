import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './index.css'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <div className="home-page">
        <div className="section header">
          <div className="container">
            <div className="hero-text-container">
              <h1 className="h2 centered">
                Hypha <span id="spin">correlates</span>
              </h1>
              <h1 className="h2 centered">your logs and traces</h1>
              <p className="intro-paragraph colored-paragraph centered bottom-margin">
                Hypha is an open-source observability framework for distributed systems
              </p>
              <div className="button-container">
                <Link to="/case-study" className="primary-button right-margin w-inline-block">
                  <div className="primary-button-text">Read Case Study</div>
                </Link>
              </div>
              <StaticImage
                src="../images/architecture/Hypha-Architecture.jpg"
                alt="Hypha architecture diagram"
                placeholder="blurred"
                loading="eager"
                className="screenshot"
              />
            </div>
          </div>
        </div>
        <div className="section-bottom">
          <div className="container">
            <div className="tabs w-tabs">
              <div className="tabs-content w-tab-content">
                <div
                  data-w-tab="Tab 1"
                  className="w-tab-pane w--tab-active"
                  id="w-tabs-0-data-w-pane-0"
                  role="tabpanel"
                  aria-labelledby="w-tabs-0-data-w-tab-0"
                >
                  <div className="tab-container">
                    <div className="tab-text-wrap">
                      <h2 className="white-h2 phone-centered">Debug Your System</h2>
                      <p
                        className="intro-paragraph white-paragraph bottom-margin phone-centered"
                        id="intro-paragraph-2"
                      >
                        Hypha deploys an end-to-end pipeline that sets up distributed tracing, aggregates your existing
                        logs, and correlates logs with traces. This facilitates a powerful debugging workflow using
                        Hypha's simple UI.
                      </p>
                      <a
                        href="https://github.com/Team-Hypha"
                        target="_blank"
                        rel="noreferrer"
                        className="primary-button w-inline-block"
                      >
                        <div className="primary-button-text">Try It Out</div>
                      </a>
                    </div>
                    <div className="tab-image-wrap">
                      <StaticImage
                        src="../images/screenshots/trace-and-logs.png"
                        alt="Screenshot of Hypha's interface with a trace and logs correlated."
                        placeholder="blurred"
                        loading="eager"
                        imgClassName="side-image"
                      />
                    </div>
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

export default IndexPage
