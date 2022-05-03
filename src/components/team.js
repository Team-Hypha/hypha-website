import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './team.css'

export default function Team() {
  return (
    <div className="team-page">
      <div className="section team-section">
        <div className="container">
          <div className="tabs w-tabs">
            <div className="tabs-content w-tab-content">
              <div>
                <div className="team-grid">
                  <div className="team-member-wrap">
                    <StaticImage
                      src="../images/team/stephen.jpg"
                      alt="Portrait picture of Stephen Gontzes"
                      placeholder="blurred"
                      className="image-container"
                      loading="eager"
                      imgClassName="team-member-image"
                    />
                    <div className="team-member-info">
                      <div className="team-member-name">Stephen Gontzes</div>
                      <div className="team-member-location">Philadelphia, PA</div>
                    </div>
                    <ul className="team-member-icons">
                      <li>
                        <a href="mailto:gontzess@gmail.com" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://stephengontzes.dev/" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            >
                              <path
                                fill="currentColor"
                                d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/stephengontzes/" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-member-wrap">
                    <StaticImage
                      src="../images/team/isaak.jpg"
                      alt="Portrait picture of Isaak Krautwurst"
                      placeholder="blurred"
                      className="image-container"
                      loading="eager"
                      imgClassName="team-member-image"
                    />
                    <div className="team-member-info">
                      <div className="team-member-name">Isaak Krautwurst</div>
                      <div className="team-member-location">Chicago, IL</div>
                    </div>
                    <ul className="team-member-icons">
                      <li>
                        <a href="mailto:isaakkraut@gmail.com" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://idkraut.dev" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            >
                              <path
                                fill="currentColor"
                                d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/isaak-krautwurst-49a38014a/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="team-member-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-member-wrap">
                    <StaticImage
                      src="../images/team/josh.jpg"
                      alt="Portrait picture of Joshua Keller"
                      placeholder="blurred"
                      className="image-container"
                      loading="eager"
                      imgClassName="team-member-image"
                      width={800}
                      height={800}
                    />
                    <div className="team-member-info">
                      <div className="team-member-name">Joshua Keller</div>
                      <div className="team-member-location">Kalamazoo, MI</div>
                    </div>
                    <ul className="team-member-icons">
                      <li>
                        <a href="mailto:jrkeller@gmail.com" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://joshkeller.dev" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            >
                              <path
                                fill="currentColor"
                                d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/josh-keller-dev/" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-member-wrap">
                    <StaticImage
                      src="../images/team/iuliu.jpg"
                      alt="Portrait picture of Iuliu Pop"
                      placeholder="blurred"
                      className="image-container"
                      loading="eager"
                      imgClassName="team-member-image"
                    />
                    <div className="team-member-info">
                      <div className="team-member-name">Iuliu Pop</div>
                      <div className="team-member-location">Montreal, Canada</div>
                    </div>
                    <ul className="team-member-icons">
                      <li>
                        <a href="mailto:iuliu.laurentiu.pop@protonmail.com" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://iulspop.dev" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            >
                              <path
                                fill="currentColor"
                                d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/iulspop/" target="_blank" rel="noreferrer">
                          <span className="team-member-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
                              />
                            </svg>
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
    </div>
  )
}
