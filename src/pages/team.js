import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Team from '../components/team'

const TeamPage = () => {
  return (
    <Layout>
      <Seo title="Hypha Team" />
      <div className="team-page">
        <div className="section header" id="team-header">
          <div className="container">
            <div className="hero-text-container">
              <h1 className="h1 centered">The Team</h1>
            </div>
            <p className="intro-paragraph white-paragraph centered" id="team-paragraph">
              Hypha was built by a remote team of software engineers. We're currently looking for our next
              opportunities. Let's talk!
            </p>
          </div>
        </div>
        <Team />
      </div>
    </Layout>
  )
}

export default TeamPage
