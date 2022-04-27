import * as React from 'react'
import Layout from '../components/layout'
import TableOfContents from '../components/tableOfContents'
import { MDXProvider } from '@mdx-js/react'
import CaseStudy from '../components/caseStudy.mdx'
import './case-study.css'

const CaseStudyPage = ({ location }) => {
  return (
    <Layout>
      <div className="case-study__grid">
        <div>
          <TableOfContents location={location} />
        </div>
        <div>
          <MDXProvider
            components={{
              h2: ({ children }) => {
                return <h2 id={children.replaceAll(' ', '-').toLowerCase()}>{children}</h2>
              },
              h3: ({ children }) => {
                return <h3 id={children.replaceAll(' ', '-').toLowerCase()}>{children}</h3>
              },
              img: ({ src, alt, caption }) => {
                return (
                  <figure>
                    <div className="case-study__image-background">
                      <img src={src} alt="placeholder" />
                    </div>
                    {caption && <figcaption>{caption}</figcaption>}
                  </figure>
                )
              },
            }}
            location={location}
          >
            <CaseStudy />
          </MDXProvider>
        </div>
      </div>
    </Layout>
  )
}

export default CaseStudyPage
