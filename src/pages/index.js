import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
        <h1>Hello World</h1>
        <Link to="case-study">Case Study</Link>
    </Layout>
  )
}

export default IndexPage
