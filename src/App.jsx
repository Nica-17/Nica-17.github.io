import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    name: 'Mosalinx',
    category: 'Full-Stack Development & Project Coordination',
    description:
      'A collaborative workspace for creative teams, combining project management, communication, resource organization, and AI-assisted brainstorming.',
    technologies: ['React', 'Node.js', 'MySQL', 'Firebase', 'OpenAI'],
    screenshots: [
      {
        src: '/projects/mosalinx/landing-page.png',
        alt: 'Mosalinx landing page introducing the collaborative creative workspace',
        caption: 'Landing Page',
      },
      {
        src: '/projects/mosalinx/bulletin-board.png',
        alt: 'Mosalinx bulletin board with welcome note, analytics, and project updates',
        caption: 'Creative Bulletin Board',
      },
      {
        src: '/projects/mosalinx/workspace-editor.png',
        alt: 'Mosalinx workspace showing the document editor and project file organization',
        caption: 'Workspace & Document Editor',
      },
    ],
  },
  {
    name: 'Pawthenticate',
    category: 'AI & Veterinary Healthcare Technology',
    description:
      'An AI-assisted veterinary record review platform designed to transform complex patient histories into organized, readable summaries.',
    technologies: ['React', 'Express', 'Firebase', 'OpenAI'],
    video: '/videos/pawthenticate/Pawthenticate-Application-Demo.mp4',
  },
  {
    name: 'FeelScape',
    category: 'Android Application Development',
    description:
      'An Android emotional wellness application featuring mood tracking, journaling, and personalized user experiences.',

    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    screenshots: [
      {
        src: '/projects/feelscape/home.jpg',
        alt: 'FeelScape home screen',
        caption: 'Home',
      },
      {
        src: '/projects/feelscape/sign-in.jpg',
        alt: 'FeelScape sign-in screen',
        caption: 'Sign In',
      },
      {
        src: '/projects/feelscape/check-in.jpg',
        alt: 'FeelScape daily mood check-in',
        caption: 'Daily Check-In',
      },
      {
        src: '/projects/feelscape/journal.jpg',
        alt: 'FeelScape journal interface',
        caption: 'Journal',
      },
      {
        src: '/projects/feelscape/mood-history.jpg',
        alt: 'FeelScape mood history and trends',
        caption: 'Mood History',
      },
      {
        src: '/projects/feelscape/advice.jpg',
        alt: 'FeelScape coping strategies and advice',
        caption: 'Advice',
      },
      {
        src: '/projects/feelscape/check-in-dm.jpg',
        alt: 'FeelScape daily check-in in dark mode',
        caption: 'Dark Mode Check-In',
      },
      {
        src: '/projects/feelscape/settings-dm.jpg',
        alt: 'FeelScape dark mode settings',
        caption: 'Dark Mode Settings',
      },
    ],

  },
]

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedScreenshot, setSelectedScreenshot] = useState(0)
  const [enlargedImage, setEnlargedImage] = useState(null)
  const [enlargedVideo, setEnlargedVideo] = useState(null)

  useEffect(() => {
    if (!enlargedImage) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setEnlargedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [enlargedImage])

  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="site-logo" href="#home">
          Nica<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M VERONICA JOHNSON</p>

            <h1>
              Where creativity
              <br />
              meets <span>technology.</span>
            </h1>

            <p className="hero-subtitle">
              Software Development | Technical Project Coordination |
              AI & Systems Integration
            </p>

            <p className="hero-description">
              I'm a Computer Science graduate candidate passionate about
              building thoughtful technology, solving real-world problems,
              and connecting people, systems, and ideas.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work
              </a>
              <a className="button button-secondary" href="#about">
                Get to Know Me
              </a>
            </div>
          </div>

          <div className="hero-decoration" aria-hidden="true">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="orb orb-three"></div>
          </div>
        </section>

        <section className="content-section" id="about">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>A little about me.</h2>

          <p className="about-intro">
            I'm Veronica, but you can call me Nica.
          </p>

          <p>
            My journey into technology began with a career in veterinary
            healthcare, where I developed a passion for improving workflows,
            solving complex problems, and helping teams succeed.
          </p>

          <p>
            Today, I'm bringing that experience into software development,
            technical project coordination, and AI-driven solutions.
            I enjoy combining technical problem-solving with thoughtful
            planning to create tools that make people's lives easier.
          </p>
        </section>

        <section className="content-section" id="projects">
          <p className="section-label">02 / FEATURED WORK</p>
          <h2>Ideas brought to life.</h2>

          <div className="project-grid">
            {projects.map((project, index) => (

              <article
                className={`project-card ${selectedProject === index ? 'project-card-selected' : ''}`}
                key={project.name}
                role="button"
                tabIndex={0}
                aria-expanded={selectedProject === index}
                aria-label={`${project.name} project details`}
                onClick={() => {
                  setSelectedProject(selectedProject === index ? null : index)
                  setSelectedScreenshot(0)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedProject(selectedProject === index ? null : index)
                    setSelectedScreenshot(0)
                  }
                }}
              >

                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span className="technology-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {selectedProject !== null && (
            <div className="project-spotlight" key={selectedProject}>
              <div className="spotlight-header">
                <p className="section-label">PROJECT SPOTLIGHT</p>
                <h3>{projects[selectedProject].name}</h3>
              </div>

              <div className="spotlight-content">
                <div className="spotlight-gallery">

                  <div className="spotlight-preview">
                    {projects[selectedProject].video ? (

                      <video
                        className="spotlight-image"
                        preload="metadata"
                        onClick={() => setEnlargedVideo(projects[selectedProject].video)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            setEnlargedVideo(projects[selectedProject].video)
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        style={{ cursor: 'zoom-in' }}
                        aria-label="Expand Pawthenticate application demo"
                      >

                        <source
                          src={projects[selectedProject].video}
                          type="video/mp4"
                        />
                        Your browser does not support video playback.
                      </video>
                    ) : projects[selectedProject].screenshots?.length > 0 ? (
                      <img
                        src={projects[selectedProject].screenshots[selectedScreenshot].src}
                        alt={projects[selectedProject].screenshots[selectedScreenshot].alt}
                        className="spotlight-image"
                        onClick={() => setEnlargedImage(
                          projects[selectedProject].screenshots[selectedScreenshot]
                        )}
                        title="Click to enlarge"
                      />
                    ) : (
                      <span>Project preview coming soon</span>
                    )}
                  </div>

                  {projects[selectedProject].screenshots?.length > 1 && (
                    <div className="gallery-navigation">
                      {projects[selectedProject].screenshots.map((screenshot, index) => (
                        <button
                          type="button"
                          key={screenshot.src}
                          className={`gallery-button ${selectedScreenshot === index ? 'gallery-button-active' : ''}`}
                          onClick={() => setSelectedScreenshot(index)}
                        >
                          {screenshot.caption}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="spotlight-details">
                  {projects[selectedProject].name === 'Mosalinx' ? (
                    <>
                      <h4>My Role & Contributions</h4>

                      <ul className="contribution-list">
                        <li>
                          <strong>Project Coordination:</strong> Organized Jira workflows,
                          sprint planning, development priorities, and team deliverables.
                        </li>

                        <li>
                          <strong>System & Database Design:</strong> Developed technical
                          documentation, relational database structures, and system workflows.
                        </li>

                        <li>
                          <strong>Full-Stack Development:</strong> Contributed to backend
                          APIs, database integration, and workspace functionality.
                        </li>

                        <li>
                          <strong>Quality Assurance:</strong> Reviewed pull requests,
                          verified functionality, and coordinated usability testing.
                        </li>

                        <li>
                          <strong>Team Collaboration:</strong> Helped guide development
                          decisions, coordinate milestones, and support project delivery.
                        </li>
                      </ul>

                      <div className="project-links">
                        <a
                          href="https://github.com/mr-wes7694/mosalinx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link-secondary"
                        >
                          View on GitHub ↗
                        </a>

                        <a
                          href="https://mosalinx.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link-primary"
                        >
                          Live Application ↗
                        </a>
                      </div>


                    </>
                  ) : projects[selectedProject].name === 'Pawthenticate' ? (
                    <>
                      <h4>My Role & Contributions</h4>

                      <ul className="contribution-list">
                        <li>
                          <strong>Independent Development:</strong> Designed and built
                          the application independently, from initial concept
                          through functional prototype.
                        </li>

                        <li>
                          <strong>AI Integration:</strong> Integrated OpenAI to process
                          veterinary medical records and generate structured,
                          readable patient summaries.
                        </li>

                        <li>
                          <strong>Full-Stack Development:</strong> Developed the React
                          frontend, Express backend, and Firebase database integration.
                        </li>

                        <li>
                          <strong>Veterinary Workflow Design:</strong> Applied
                          professional veterinary experience to streamline
                          patient history reviews and referral documentation.
                        </li>

                        <li>
                          <strong>Testing & Iteration:</strong> Gathered feedback
                          from veterinary professionals and refined the
                          application to improve usability and functionality.
                        </li>
                      </ul>


                      <div className="project-links">
                        <a
                          href="https://github.com/Nica-17/Pawthenticate"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link-secondary"
                        >
                          View on GitHub ↗
                        </a>
                      </div>


                    </>
                  ) : projects[selectedProject].name === 'FeelScape' ? (
                    <>
                      <h4>My Role & Contributions</h4>

                      <ul className="contribution-list">
                        <li>
                          <strong>UI/UX Design:</strong> Designed and refined
                          the application's interface using Material Design 3,
                          including visual styling and usability improvements.
                        </li>

                        <li>
                          <strong>Android Development:</strong> Implemented
                          application screens and navigation flows using
                          Kotlin and Jetpack Compose.
                        </li>

                        <li>
                          <strong>Core Features:</strong> Developed and improved
                          daily mood check-ins, journaling interfaces,
                          and mood history screens.
                        </li>

                        <li>
                          <strong>Authentication & Personalization:</strong>
                          {' '}Integrated Firebase Authentication and implemented
                          dark mode support for a customizable experience.
                        </li>

                        <li>
                          <strong>Testing & Refinement:</strong> Improved
                          existing functionality, resolved implementation
                          issues, and maintained the application throughout
                          development.
                        </li>
                      </ul>

                      <div className="project-links">
                        <a
                          href="https://github.com/Nica-17/FeelScape"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link-secondary"
                        >
                          View on GitHub ↗
                        </a>
                      </div>
                    </>
                  ) : (
                    <p>{projects[selectedProject].description}</p>
                  )}

                </div>
              </div>
            </div>
          )}

        </section>


        <section className="content-section" id="skills">
          <p className="section-label">03 / TECHNICAL SKILLS</p>
          <h2>My technical toolkit.</h2>

          <div className="skills-grid">
            <div>
              <h3>Software Development</h3>
              <p>JavaScript, Python, C++, Kotlin, React, Node.js, Express</p>
            </div>

            <div>
              <h3>Data, Cloud & AI</h3>
              <p>MySQL, SQL, Firebase, REST APIs, OpenAI API Integration</p>
            </div>

            <div>
              <h3>Project Coordination & Delivery</h3>
              <p>Agile/Scrum, Jira, Sprint Planning, Backlog Management, Requirements, Team Coordination</p>
            </div>

            <div>
              <h3>Systems, QA & Collaboration</h3>
              <p>System Design, Technical Documentation, Git, GitHub, Pull Request Reviews, Usability Testing, Figma, VS Code</p>
            </div>
          </div>
        </section>


        <section className="content-section" id="experience">
          <p className="section-label">04 / EXPERIENCE</p>
          <h2>Experience beyond the code.</h2>

          <p>
            My career has taken me from veterinary healthcare and operational
            leadership into software development and technical project
            coordination. Along the way, I've developed a passion for improving
            workflows, solving complex problems, and helping teams work more
            effectively. Today, I'm combining that experience with my technical
            education to pursue opportunities where people, processes, and
            technology come together.
          </p>

          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-details">
                <h3>Shuttle Driver</h3>
                <p className="experience-meta">
                  Sound Generations | Sep 2025 - Present
                </p>
                <p>
                  Provide community transportation services while coordinating
                  schedules, communicating with riders, and adapting to daily
                  operational needs.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-details">
                <h3>Oncology APCA II / Emergency Referral Coordinator</h3>
                <p className="experience-meta">
                  BluePearl Pet Hospital | Nov 2019 - Sep 2025
                </p>
                <p>
                  Served as an Emergency Referral Coordinator from November
                  2019 to November 2020 before transitioning into Oncology.
                  Supported specialty patient care, coordinated referrals,
                  maintained medical documentation, and collaborated with
                  veterinary teams to support efficient clinical workflows.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-details">
                <h3>Lead Veterinary Technician / Assistant Hospital Manager</h3>
                <p className="experience-meta">
                  Juanita Hills Animal Hospital | Jan 2017 - Nov 2019
                </p>
                <p>
                  Supported daily hospital operations, coordinated clinical
                  workflows, supervised veterinary teams, and contributed
                  to staff development, client communication, and process
                  improvements.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-details">
                <h3>Software Development & Project Coordination</h3>
                <p className="experience-meta">
                  Full Sail University | Academic Projects
                </p>
                <p>
                  Led Agile planning and project coordination while contributing
                  to full-stack development, database design, technical
                  documentation, and software testing.
                </p>
              </div>
            </div>
          </div>

        </section>


        <section className="content-section contact-section" id="contact">
          <p className="section-label">05 / GET IN TOUCH</p>
          <h2>Let's build something meaningful.</h2>

          <p>
            I'm interested in opportunities involving technical project
            coordination, software development, implementation, and
            healthcare technology. Whether it's building something new
            or helping a team bring an idea to life, I'd love to connect.
          </p>

          <div className="contact-links">
            <a
              href="mailto:vj.nica17@gmail.com"
              className="contact-email"
            >
              Email Me ✉
            </a>

            <a
              href="https://github.com/Nica-17"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vj-nica"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <p>© 2026 Veronica Johnson. Built with React & a little creativity.</p>
      </footer>

      {enlargedImage && (
        <div
          className="image-lightbox"
          role="presentation"
          onClick={() => setEnlargedImage(null)}
        >
          <div
            className="lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label={enlargedImage.alt}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setEnlargedImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>

            <img
              src={enlargedImage.src}
              alt={enlargedImage.alt}
              className="lightbox-image"
            />

            <p className="lightbox-caption">{enlargedImage.caption}</p>
          </div>
        </div>
      )}


      {enlargedVideo && (
        <div
          className="image-lightbox"
          role="presentation"
          onClick={() => setEnlargedVideo(null)}
        >
          <div
            className="lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label="Pawthenticate application demo"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setEnlargedVideo(null)}
              aria-label="Close video preview"
            >
              ×
            </button>

            <video
              className="lightbox-image"
              controls
              autoPlay
              playsInline
            >
              <source src={enlargedVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>

            <p className="lightbox-caption">
              Pawthenticate | Application Demo
            </p>
          </div>
        </div>
      )}


    </div>
  )
}

export default App
