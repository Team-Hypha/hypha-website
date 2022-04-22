import * as React from 'react'
import Layout from '../components/layout'
import TableOfContents from '../components/tableOfContents'
import { MDXProvider } from '@mdx-js/react'
import CaseStudy from '../components/caseStudy.mdx'

const CaseStudyPage = ({ location }) => {
  return (
    <Layout>
      <TableOfContents location={location} />
      <MDXProvider
        components={{
          h2: ({ children }) => {
            return <h2 id={children.replaceAll(' ', '-').toLowerCase()}>{children}</h2>
          },
          h3: ({ children }) => {
            return <h3 id={children.replaceAll(' ', '-').toLowerCase()}>{children}</h3>
          },
          img: ({ src, alt }) => {
            return (
              <div className="case-study__image-background">
                <img src={src} alt="placeholder" />
              </div>
            )
          },
        }}
      >
        <CaseStudy />
      </MDXProvider>
    </Layout>
  )
}

export default CaseStudyPage
