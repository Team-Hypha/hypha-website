import React, { useState, useEffect, useRef } from 'react'
import './tableOfContents.css'

export default function TableOfContents({ location, type }) {
  const [activeId, setActiveId] = useState()
  const { nestedHeadings } = useHeadingsData()
  useIntersectionObserver(setActiveId, location)
  const isScroll = useScrollHandler()

  const tocType = type === 'inline' ? 'table-of-contents--inline' : 'table-of-contents'
  const inlineType = type === 'inline'

  return (
    <nav
      aria-label="Table of contents"
      className={`${tocType} ${inlineType ? '' : isScroll ? 'show' : 'hide'} ${inlineType ? 'show-tablet' : ''}`}
    >
      <Headings headings={nestedHeadings} setActiveId={setActiveId} activeId={activeId} />
    </nav>
  )
}

const Headings = ({ headings, setActiveId, activeId }) => (
  <ul>
    {headings.map(heading => (
      <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
        <a href={`#${heading.id}`} onClick={() => setActiveId(heading.id)}>
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul
            className={`table-of-contents__nested-list ${
              heading.items.some(child => child.id === activeId) ? 'active' : ''
            }`}
          >
            {heading.items.map(child => (
              <li key={child.id} className={child.id === activeId ? 'active' : ''}>
                <a href={`#${child.id}`} onClick={() => setActiveId(heading.id)}>
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([])

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'))
    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])

  return { nestedHeadings }
}

const getNestedHeadings = headingElements => {
  const nestedHeadings = []

  headingElements.forEach(heading => {
    const { innerText: title, id } = heading
    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      })
    }
  })

  return nestedHeadings
}

const useIntersectionObserver = (setActiveId, location) => {
  const headingElementsRef = useRef({})
  useEffect(() => {
    const callback = headings => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings = []
      Object.keys(headingElementsRef.current).forEach(key => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = id => headingElements.findIndex(heading => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        )
        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback)

    const headingElements = Array.from(document.querySelectorAll('h2, h3'))

    headingElements.forEach(element => observer.observe(element))

    return () => {
      observer.disconnect()
      headingElementsRef.current = {}
    }
  }, [setActiveId, location])
}

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 120
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [scroll, setScroll])

  return scroll
}
