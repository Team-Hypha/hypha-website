import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import TableOfContents from '../components/tableOfContents'
import { MDXProvider } from '@mdx-js/react'
import CaseStudy from '../components/caseStudy.mdx'
import './case-study.css'

const CaseStudyPage = ({ location }) => {
  return (
    <Layout>
      <Seo title="Hypha Case Study" />
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
              img: ({ src, alt, caption, noBackground, small, big }) => {
                return (
                  <figure className={big && 'big'}>
                    {!noBackground ? (
                      <div className="case-study__image-background">
                        <img src={src} alt="placeholder" />
                      </div>
                    ) : (
                      <img src={src} alt="placeholder" className={small ? 'no-background small' : 'no-background'} />
                    )}
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
