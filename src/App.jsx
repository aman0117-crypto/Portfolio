import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode] = useState(true);
  useEffect(() => {
  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty(
      "--mouse-x",
      `${e.clientX}px`
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      `${e.clientY}px`
    );
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
       {/* Premium Animated Background */}
<div className="background-effects">

  {/* Ambient Aurora */}
  <div className="aurora aurora-1"></div>
  <div className="aurora aurora-2"></div>
  <div className="aurora aurora-3"></div>

  {/* Neural Network */}
  <div className="neural-network">
    <span className="node node-1"></span>
    <span className="node node-2"></span>
    <span className="node node-3"></span>
    <span className="node node-4"></span>
    <span className="node node-5"></span>
    <span className="node node-6"></span>

    <span className="connection connection-1"></span>
    <span className="connection connection-2"></span>
    <span className="connection connection-3"></span>
    <span className="connection connection-4"></span>
    <span className="connection connection-5"></span>
  </div>

  {/* Floating particles */}
  <div className="ambient-particles">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  {/* Mouse Light */}
  <div className="pointer-glow"></div>

</div>

         {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-bracket">&lt;</span>
          Aman
          <span className="logo-bracket">/&gt;</span>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#certifications">Certifications</a>

          <a href="#education">Education</a>

          <a href="#contact">Contact</a>
        </div>

        <div className="navbar-actions">
          {/* RESUME */}
          <a
            href="/Resume.pdf"
            download
            className="resume-button"
          >
            <span>↓</span>
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hello">Hi there, I'm</p>

            <h1>
              Aman <span>Gupta</span>
            </h1>

            <h2>
              Aspiring <span>Software Developer</span>
            </h2>

            <p className="hero-description">
              MCA student passionate about building modern web applications,
              solving problems with DSA, and exploring the possibilities of
              Artificial Intelligence.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work <span>→</span>
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-card">
              <div className="code-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>developer.js</span>
              </div>

              <div className="code-body">
                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  <span className="cyan">name:</span>{" "}
                  <span className="green">"Aman Gupta"</span>,
                </p>

                <p className="indent">
                  <span className="cyan">role:</span>{" "}
                  <span className="green">"Aspiring Software Developer"</span>,
                </p>

                <p className="indent">
                  <span className="cyan">education:</span>{" "}
                  <span className="green">"MCA"</span>,
                </p>

                <p className="indent">
                  <span className="cyan">currently building:</span>{" "}
                  <span className="green">"VoiceSQL AI"</span>,
                </p>

                <p className="indent">
                  <span className="cyan">coding:</span>{" "}
                  <span className="orange">Daily Leetcode practice</span>,
                </p>

                <p className="indent">
                  <span className="cyan">goal:</span>{" "}
                  <span className="orange">High-impact Software Engineer</span>
                </p>


                <p>{"};"}</p>

                <p className="cursor-line">
                  <span className="purple">developer</span>.
                  <span className="blue">build</span>();
                  <span className="cursor"></span>
                </p>
              </div>
            </div>

            {/* Java Badge */}
            <div className="floating-card card-one">
              <svg
                className="tech-icon java-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Java"
              >
                <path
                  fill="currentColor"
                  d="M8.5 17.5c-1.8.5-3.2 1.2-3.2 2.1 0 1.6 4.2 2.8 9.3 2.8s9.3-1.2 9.3-2.8c0-.9-1.4-1.7-3.2-2.1.8.5 1.3 1 1.3 1.5 0 1-3.3 1.8-7.4 1.8s-7.4-.8-7.4-1.8c0-.5.5-1 1.3-1.5z"
                />
                <path
                  fill="currentColor"
                  d="M14.4 1.2c1.5 1.8 1.7 3.1.6 4.3-1 1.1-2.4 1.7-2.2 3.2.1.9.8 1.5 1.7 2.1-2.5-.4-4.1-1.8-4.1-3.4 0-1.4 1.2-2.3 2.3-3.2 1.2-1 2.2-1.8 1.7-3z"
                />
                <path
                  fill="currentColor"
                  d="M10.2 11.2c-2 .5-3.2 1.4-3.2 2.4 0 1.6 3.1 2.9 7 2.9s7-1.3 7-2.9c0-1-1.2-1.9-3.2-2.4.5.5.8 1 .8 1.5 0 .9-2 1.7-4.6 1.7s-4.6-.8-4.6-1.7c0-.5.3-1 .8-1.5z"
                />
              </svg>

              <span>Java</span>
            </div>

            {/* React Badge */}
            <div className="floating-card card-two">
              <svg
                className="tech-icon react-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="React"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M12 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  d="M12 17.5c4.8 0 8.7-2.5 8.7-5.5S16.8 6.5 12 6.5 3.3 9 3.3 12s3.9 5.5 8.7 5.5z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  d="M7.2 14.8c2.4 4.1 6.5 6.1 9.1 4.6 2.6-1.5 2.8-6.3.4-10.4-2.4-4.1-6.5-6.1-9.1-4.6-2.6 1.5-2.8 6.3-.4 10.4z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  d="M7.2 9.2c-2.4 4.1-2.2 8.9.4 10.4 2.6 1.5 6.7-.5 9.1-4.6 2.4-4.1 2.2-8.9-.4-10.4-2.6-1.5-6.7.5-9.1 4.6z"
                />
              </svg>

              <span>React</span>
            </div>

            {/* Python Badge */}
            <div className="floating-card card-three">
              <svg
                className="tech-icon python-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Python"
              >
                <path
                  fill="#3776AB"
                  d="M11.9 2c-1.9 0-3.5.3-3.5 1.3v2.1h3.6v.6H7.1C4.8 6 3 7.7 3 10.1c0 2.4 1.8 4.1 4.1 4.1h1.2v-2.5c0-1.2 1-2.2 2.2-2.2h3.6c1.2 0 2.2-1 2.2-2.2V4.1C16.3 2.8 14.5 2 11.9 2zM9.8 3.3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
                />

                <path
                  fill="#FFD43B"
                  d="M12.1 22c1.9 0 3.5-.3 3.5-1.3v-2.1H12v-.6h4.9c2.3 0 4.1-1.7 4.1-4.1s-1.8-4.1-4.1-4.1h-1.2v2.5c0 1.2-1 2.2-2.2 2.2H9.9c-1.2 0-2.2 1-2.2 2.2v3.2c0 1.3 1.8 2.1 4.4 2.1zm2.1-1.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
                />
              </svg>

              <span>Python</span>
            </div>
          </div>
        </section>

        {/* =========================
            ABOUT ME
        ========================= */}

        <section id="about" className="section about-section">

          {/* Section Heading */}
          <div className="about-heading">

            <span className="about-heading-line"></span>

            <h2>
              <svg
                className="about-title-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M5 20C5.7 16.5 8.1 14.5 12 14.5C15.9 14.5 18.3 16.5 19 20"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

              About Me
            </h2>

            <span className="about-heading-line"></span>

          </div>


          {/* Subtitle */}
          <p className="about-subtitle">
            A little about me, my journey, and what I enjoy building.
          </p>


          {/* About Content */}
          <div className="about-container">

            {/* Left Side */}
            <div className="about-content">

              <span className="about-label">
                WHO I AM
              </span>

              <h3>
                Hi, I'm <span>Aman Gupta</span>.
              </h3>

              <p>
                I'm an MCA student and aspiring software developer with
                a strong interest in building modern, practical, and
                user-friendly applications.
              </p>

              <p>
                I enjoy working with Java, React, Spring Boot, Python,
                databases, and modern web technologies. I also have a
                growing interest in artificial intelligence and
                machine learning.
              </p>

              <p>
                Along with development, I regularly practice Data
                Structures and Algorithms to strengthen my problem-solving
                skills and write better, more efficient code.
              </p>

              <p>
                I'm continuously learning new technologies and looking
                for opportunities where I can contribute, grow, and
                turn ideas into real-world software.
              </p>

            </div>


            {/* Right Side */}
            <div className="about-highlights">

              {/* Highlight 1 */}
              <div className="about-highlight-card">

                <div className="about-highlight-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 5.5C4 4.67 4.67 4 5.5 4H18.5C19.33 4 20 4.67 20 5.5V16.5C20 17.33 19.33 18 18.5 18H5.5C4.67 18 4 17.33 4 16.5V5.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M8 21H16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M12 18V21"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <div>
                  <h4>Software Development</h4>

                  <p>
                    Building responsive and practical applications
                    using modern technologies.
                  </p>
                </div>

              </div>


              {/* Highlight 2 */}
              <div className="about-highlight-card">

                <div className="about-highlight-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8L4 12L8 16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M16 8L20 12L16 16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M14 5L10 19"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <div>
                  <h4>Problem Solving</h4>

                  <p>
                    Strengthening my DSA and algorithmic thinking
                    through regular coding practice.
                  </p>
                </div>

              </div>


              {/* Highlight 3 */}
              <div className="about-highlight-card">

                <div className="about-highlight-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3V6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M12 18V21"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M3 12H6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M18 12H21"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                  </svg>

                </div>

                <div>
                  <h4>Continuous Learning</h4>

                  <p>
                    Exploring new technologies and improving my
                    development skills every day.
                  </p>
                </div>

              </div>


              {/* Highlight 4 */}
              <div className="about-highlight-card">

                <div className="about-highlight-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3L19 7V12C19 16.5 16.2 19.5 12 21C7.8 19.5 5 16.5 5 12V7L12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

                <div>
                  <h4>Clean & Reliable Code</h4>

                  <p>
                    Focused on writing readable, maintainable, and
                    efficient code.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
                TECHNICAL SKILLS
            ========================= */}

            <section
              id="skills"
              className="section skills-section"
            >

              {/* =========================
                  HEADING
              ========================= */}

              <div className="skills-heading">

                <span className="skills-heading-line"></span>

                <h2>

                  {/* Code / Skills SVG */}
                  <svg
                    className="skills-title-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 4L7 20"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M17 4L15 20"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M4 9H20"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M3.5 15H19.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>

                  Technical Skills

                </h2>

                <span className="skills-heading-line"></span>

              </div>


              {/* Subtitle */}

              <p className="skills-subtitle">
                Technologies and tools I use to build applications and solve problems.
              </p>


              {/* =========================
                  SKILLS GRID
              ========================= */}

              <div className="skills-grid">


                {/* =========================
                    PROGRAMMING LANGUAGES
                ========================= */}

                <div className="skill-category">

                  <div className="skill-category-header">

                    <div className="skill-category-icon">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 8L4 12L8 16"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M16 8L20 12L16 16"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M14 5L10 19"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />
                      </svg>

                    </div>

                    <h3>Programming Languages</h3>

                  </div>


                  <div className="skills-list">

                    <span className="skill-item">
                      Java
                    </span>

                    <span className="skill-item">
                      Python
                    </span>

                  </div>

                </div>



                {/* =========================
                    FRONTEND
                ========================= */}

                <div className="skill-category">

                  <div className="skill-category-header">

                    <div className="skill-category-icon">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 5.5C4 4.67 4.67 4 5.5 4H18.5C19.33 4 20 4.67 20 5.5V16.5C20 17.33 19.33 18 18.5 18H5.5C4.67 18 4 17.33 4 16.5V5.5Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M8 21H16"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />

                        <path
                          d="M12 18V21"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />

                      </svg>

                    </div>

                    <h3>Frontend Development</h3>

                  </div>


                  <div className="skills-list">

                    <span className="skill-item">
                      React
                    </span>

                    <span className="skill-item">
                      HTML
                    </span>

                    <span className="skill-item">
                      CSS
                    </span>

                    <span className="skill-item">
                      JavaScript
                    </span>

                    <span className="skill-item">
                      Tailwind CSS
                    </span>

                    <span className="skill-item">
                      Vite
                    </span>

                  </div>

                </div>



                {/* =========================
                    BACKEND
                ========================= */}

                <div className="skill-category">

                  <div className="skill-category-header">

                    <div className="skill-category-icon">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                        <ellipse
                          cx="12"
                          cy="5"
                          rx="7"
                          ry="2.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M5 5V12"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M19 5V12"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M5 12C5 13.4 8.1 14.5 12 14.5C15.9 14.5 19 13.4 19 12"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M5 12V19"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M19 12V19"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M5 19C5 20.4 8.1 21.5 12 21.5C15.9 21.5 19 20.4 19 19"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                      </svg>

                    </div>

                    <h3>Backend Development</h3>

                  </div>


                  <div className="skills-list">

                    <span className="skill-item">
                      Spring
                    </span>

                    <span className="skill-item">
                      Spring Boot
                    </span>

                    <span className="skill-item">
                      Node.js
                    </span>

                    <span className="skill-item">
                      REST APIs
                    </span>

                    <span className="skill-item">
                      Flask
                    </span>

                  </div>

                </div>



                {/* =========================
                    DATABASE & TOOLS
                ========================= */}

                <div className="skill-category">

                  <div className="skill-category-header">

                    <div className="skill-category-icon">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                        <ellipse
                          cx="12"
                          cy="5"
                          rx="7"
                          ry="2.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M5 5V19"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M19 5V19"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M5 19C5 20.4 8.1 21.5 12 21.5C15.9 21.5 19 20.4 19 19"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M5 12C5 13.4 8.1 14.5 12 14.5C15.9 14.5 19 13.4 19 12"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                      </svg>

                    </div>

                    <h3>Database & Tools</h3>

                  </div>


                  <div className="skills-list">

                    <span className="skill-item">
                      PostgreSQL
                    </span>

                    <span className="skill-item">
                      Oracle SQL
                    </span>

                    <span className="skill-item">
                      Git
                    </span>

                    <span className="skill-item">
                      GitHub
                    </span>

                    <span className="skill-item">
                      VS Code
                    </span>

                  </div>

                </div>



                {/* =========================
                    AI & DATA
                ========================= */}

                <div className="skill-category">

                  <div className="skill-category-header">

                    <div className="skill-category-icon">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                        <rect
                          x="5"
                          y="6"
                          width="14"
                          height="12"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <circle
                          cx="9"
                          cy="11"
                          r="1"
                          fill="currentColor"
                        />

                        <circle
                          cx="15"
                          cy="11"
                          r="1"
                          fill="currentColor"
                        />

                        <path
                          d="M9 14C10.5 15 13.5 15 15 14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        <path
                          d="M8 3V6"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />

                        <path
                          d="M16 3V6"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />

                      </svg>

                    </div>

                    <h3>AI & Data</h3>

                  </div>


                  <div className="skills-list">

                    <span className="skill-item">
                      Machine Learning
                    </span>

                    <span className="skill-item">
                      Groq API
                    </span>

                    <span className="skill-item">
                      NumPy
                    </span>

                    <span className="skill-item">
                      Pandas
                    </span>
                  </div>

                </div>



                {/* =========================
                    CORE CONCEPTS
                ========================= */}

                <div className="skill-category">

                  <div className="skill-category-header">

                    <div className="skill-category-icon">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                        <circle
                          cx="12"
                          cy="12"
                          r="8.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M12 8V12L15 14"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                      </svg>

                    </div>

                    <h3>Core Concepts</h3>

                  </div>


                  <div className="skills-list">

                    <span className="skill-item">
                      Data Structures
                    </span>

                    <span className="skill-item">
                      Algorithms
                    </span>

                    <span className="skill-item">
                      OOP
                    </span>

                    <span className="skill-item">
                      DBMS
                    </span>

                    <span className="skill-item">
                      Operating Systems
                    </span>

                    <span className="skill-item">
                      Computer Networks
                    </span>

                  </div>

                </div>

              </div>

            </section>

              {/* =========================
                  PROJECTS
              ========================= */}

              <section id="projects" className="section projects-section">

                {/* Heading */}
                <div className="projects-heading">

                  <span className="projects-heading-line"></span>

                  <h2>

                    {/* Project / Code SVG Icon */}
                    <svg
                      className="projects-title-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 8L4 12L8 16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M16 8L20 12L16 16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M14 5L10 19"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>

                    Featured Projects

                  </h2>

                  <span className="projects-heading-line"></span>

                </div>


                {/* Subtitle */}
                <p className="projects-subtitle">
                  A selection of projects I've built while learning, experimenting,
                  and solving real-world problems.
                </p>


                {/* Projects Grid */}
                <div className="projects-grid">


                  {/* =========================
                      PROJECT 1
                  ========================= */}

                  <article className="project-card featured-project">

                    <div className="project-preview">

                      <div className="project-window">

                        <div className="project-window-header">

                          <div className="project-window-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>

                          <span>VoiceSQL AI</span>

                        </div>


                        <div className="project-code">

                          <span className="code-purple">const</span>{" "}
                          <span className="code-blue">query</span>{" "}
                          ={" "}
                          <span className="code-green">
                            "Show all students"
                          </span>;

                          <br /><br />

                          <span className="code-purple">SELECT</span>{" "}
                          <span className="code-blue">*</span>

                          <br />

                          <span className="code-purple">FROM</span>{" "}
                          <span className="code-green">
                            students
                          </span>;

                        </div>

                      </div>

                    </div>


                    <div className="project-content">

                      <span className="project-label">
                        AI • DATABASE
                      </span>

                      <h3>
                        VoiceSQL AI
                      </h3>

                      <p>
                        An AI-powered voice-to-SQL query generator that converts
                        natural-language queries into SQL and executes safe,
                        read-only database operations.
                      </p>


                      <div className="project-tags">
                        <span>React</span>
                        <span>Python</span>
                        <span>Flask</span>
                        <span>PostgreSQL</span>
                        <span>Groq API</span>
                      </div>


                      <div className="project-links">

                        <a
                          href="#"
                          className="project-link primary"
                        >
                          Live Demo
                          <span>↗</span>
                        </a>

                        <a
                          href="#"
                          className="project-link"
                        >
                          GitHub
                          <span>↗</span>
                        </a>

                      </div>

                    </div>

                  </article>



                  {/* =========================
                      PROJECT 2
                  ========================= */}

                  <article className="project-card">

                    <div className="project-preview spotify-preview">

                      <div className="mini-project-icon">

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="8.5"
                            stroke="currentColor"
                            strokeWidth="1.7"
                          />

                          <path
                            d="M7.5 10C10.5 8.8 14.5 9 17 10.2"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          />

                          <path
                            d="M8 13C10.5 12 13.5 12.2 16 13.2"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          />

                          <path
                            d="M9 16C11 15.3 13 15.5 15 16.2"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          />

                        </svg>

                      </div>

                      <span className="preview-title">
                        Music Player
                      </span>

                    </div>


                    <div className="project-content">

                      <span className="project-label">
                        WEB APPLICATION
                      </span>

                      <h3>
                        Spotify Clone
                      </h3>

                      <p>
                        A responsive music streaming interface inspired by
                        Spotify, featuring a modern UI and responsive layouts.
                      </p>


                      <div className="project-tags">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                        <span>Vite</span>
                      </div>


                      <div className="project-links">

                        <a
                          href="#"
                          className="project-link primary"
                        >
                          Live Demo
                          <span>↗</span>
                        </a>

                        <a
                          href="#"
                          className="project-link"
                        >
                          GitHub
                          <span>↗</span>
                        </a>

                      </div>

                    </div>

                  </article>



                  {/* =========================
                      PROJECT 3
                  ========================= */}

                  <article className="project-card">

                    <div className="project-preview bank-preview">

                      <div className="mini-project-icon">

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >

                          <path
                            d="M3 9L12 4L21 9"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M5 10V17"
                            stroke="currentColor"
                            strokeWidth="1.7"
                          />

                          <path
                            d="M9 10V17"
                            stroke="currentColor"
                            strokeWidth="1.7"
                          />

                          <path
                            d="M15 10V17"
                            stroke="currentColor"
                            strokeWidth="1.7"
                          />

                          <path
                            d="M19 10V17"
                            stroke="currentColor"
                            strokeWidth="1.7"
                          />

                          <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          />

                        </svg>

                      </div>

                      <span className="preview-title">
                        Banking System
                      </span>

                    </div>


                    <div className="project-content">

                      <span className="project-label">
                        JAVA APPLICATION
                      </span>

                      <h3>
                        Bank Management System
                      </h3>

                      <p>
                        A Java-based banking application for managing customer
                        accounts, transactions, deposits, withdrawals, and
                        account operations.
                      </p>


                      <div className="project-tags">
                        <span>Java</span>
                        <span>OOP</span>
                        <span>MySQL</span>
                      </div>


                      <div className="project-links">

                        <a
                          href="#"
                          className="project-link"
                        >
                          GitHub
                          <span>↗</span>
                        </a>

                      </div>

                    </div>

                  </article>

                </div>

              {/* More Projects */}
              <div className="fp-more-card">

                <div className="fp-more-icon">
                  ✨
                </div>
                <h2 className="fp-more-title">
                  More projects on the way
                </h2>

                <p className="fp-more-text">
                  Currently building new full-stack projects. Check back soon,
                  or reach out to see works-in-progress.
                </p>

              </div>


              </section>

            {/* =========================
              CERTIFICATIONS
          ========================= */}

          <section
            id="certifications"
            className="section certifications-section"
          >

            {/* Section Heading */}
            <div className="certifications-heading">

              <span className="certifications-heading-line"></span>

              <h2>

                {/* Certificate SVG Icon */}
                <svg
                  className="certifications-title-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3.5H18C19.1 3.5 20 4.4 20 5.5V17.5C20 18.6 19.1 19.5 18 19.5H6C4.9 19.5 4 18.6 4 17.5V5.5C4 4.4 4.9 3.5 6 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8 8H16"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M8 11.5H16"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M8 15H13"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M15.5 19.5L17 22L18.5 19.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Certifications

              </h2>

              <span className="certifications-heading-line"></span>

            </div>


            {/* Subtitle */}
            <p className="certifications-subtitle">
              Certifications and professional training that support my technical skills.
            </p>


            {/* =========================
                CERTIFICATION CARDS
            ========================= */}

            <div className="certifications-grid">


              {/* =========================
                  1. PYTHON
              ========================= */}

              <div className="certification-card">

                <div className="certification-card-top">

                  <div className="certification-icon-box">

                    {/* Python SVG */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2.5C8.7 2.5 8.5 4.1 8.5 4.1V6.5H12.5V7.5H6.8C3.5 7.5 3 10.2 3 10.2C3 13.5 5.8 13.4 5.8 13.4H7.5V11.8C7.5 10.2 8.7 9 10.3 9H16.2C17.8 9 19 7.8 19 6.2V5C19 5 18.6 2.5 15 2.5H12Z"
                        fill="#3776AB"
                      />

                      <path
                        d="M12 21.5C15.3 21.5 15.5 19.9 15.5 19.9V17.5H11.5V16.5H17.2C20.5 16.5 21 13.8 21 13.8C21 10.5 18.2 10.6 18.2 10.6H16.5V12.2C16.5 13.8 15.3 15 13.7 15H7.8C6.2 15 5 16.2 5 17.8V19C5 19 5.4 21.5 9 21.5H12Z"
                        fill="#FFD343"
                      />

                      <circle
                        cx="10.5"
                        cy="5"
                        r="0.8"
                        fill="white"
                      />

                      <circle
                        cx="13.5"
                        cy="19"
                        r="0.8"
                        fill="white"
                      />
                    </svg>

                  </div>

                  <span className="certification-type">
                    CERTIFICATION
                  </span>

                </div>


                <h3>
                  Essentials of Python
                </h3>


                <p className="certification-issuer">
                  DigiSaksham — Microsoft &amp; Ministry of Labour &amp; Employment
                </p>


                <p className="certification-date">
                  Academic Year 2022–23
                </p>


                <div className="certification-tags">
                  <span>Python</span>
                  <span>Programming</span>
                </div>


                {/* Add certificate URL here later */}
                <a
                  href="/public/certificates/python.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                  <span>→</span>
                </a>

              </div>



              {/* =========================
                  2. MACHINE LEARNING
              ========================= */}

              <div className="certification-card">

                <div className="certification-card-top">

                  <div className="certification-icon-box">

                    {/* Machine Learning / AI SVG */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect
                        x="5"
                        y="6"
                        width="14"
                        height="12"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M8 3V6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M12 3V6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M16 3V6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M8 18V21"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M12 18V21"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M16 18V21"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <circle
                        cx="9"
                        cy="11"
                        r="1"
                        fill="currentColor"
                      />

                      <circle
                        cx="15"
                        cy="11"
                        r="1"
                        fill="currentColor"
                      />

                      <path
                        d="M9 14C10.7 15 13.3 15 15 14"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>

                  </div>

                  <span className="certification-type">
                    CERTIFICATION
                  </span>

                </div>


                <h3>
                  Machine Learning using Python
                </h3>


                <p className="certification-issuer">
                  Infosys Springboard
                </p>


                <p className="certification-date">
                  Issued May 2026
                </p>


                <div className="certification-tags">
                  <span>Machine Learning</span>
                  <span>Python</span>
                </div>


                <a
                  href="/public/certificates/ML.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                  <span>→</span>
                </a>

              </div>



              {/* =========================
                  3. JAVA FULL STACK
              ========================= */}

              <div className="certification-card">

                <div className="certification-card-top">

                  <div className="certification-icon-box">

                    {/* Java Icon */}
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="java-cert-icon"
                    >
                      {/* Cup */}
                      <path
                        d="M6 9.5H17V13.2C17 16.2 14.8 18 11.5 18C8.2 18 6 16.2 6 13.2V9.5Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Cup handle */}
                      <path
                        d="M17 10.5H18.2C19.7 10.5 20.5 11.4 20.5 12.7C20.5 14.2 19.4 15.2 17 15.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      {/* Steam 1 */}
                      <path
                        d="M9 7.5C8 6.5 9 5.7 9.5 5C10.2 4.1 10 3.2 9.3 2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      {/* Steam 2 */}
                      <path
                        d="M12.5 7.5C11.5 6.5 12.5 5.7 13 5C13.7 4.1 13.5 3.2 12.8 2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      {/* Coffee surface */}
                      <path
                        d="M6.5 10.5H16.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />

                      {/* Saucer */}
                      <path
                        d="M4.5 19.5H18.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                    </svg>

                  </div>

                  <span className="certification-type">
                    CERTIFICATION
                  </span>

                </div>


                <h3>
                  Java Full Stack Development
                </h3>


                <p className="certification-issuer">
                  JSpiders — Java Training &amp; Development Center
                </p>


                <p className="certification-date">
                  Granted July 2025
                </p>


                <div className="certification-tags">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>SQL</span>
                  <span>Web Development</span>
                </div>


                <a
                  href="/public/certificates/JavaFSD.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                  <span>→</span>
                </a>

              </div>

            </div>

          </section>

        

        {/* =========================
            EDUCATION
        ========================= */}
        <section id="education" className="section education-section">

          <div className="education-heading">
          <span className="education-heading-line"></span>

          <h2>
            <svg
              className="education-cap-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2.5 9.5L12 4L21.5 9.5L12 15L2.5 9.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M6 12.5V16.5C6 18.2 8.7 20 12 20C15.3 20 18 18.2 18 16.5V12.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M21.5 9.5V15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <circle
                cx="21.5"
                cy="16.5"
                r="1"
                fill="currentColor"
              />
            </svg>
            Education
          </h2>

          <span className="education-heading-line"></span>
        </div>

        <p className="education-subtitle">
          My academic journey and educational background.
        </p>

          <div className="education-timeline">

          {/* 1. MCA */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
              <div className="education-card-top">
                <span className="education-year">2025 — 2027</span>

                <span className="education-status">
                  Currently Pursuing
                </span>
              </div>

              <h3>Master of Computer Applications (MCA)</h3>

              <h4>Pranveer Singh Institute of Technology (PSIT), Kanpur</h4>

              <p>
                Pursuing MCA with a focus on software development,
                data structures and algorithms, database systems,
                web technologies, and artificial intelligence.
              </p>

              <div className="education-tags">
                <span>MCA</span>
                <span>Software Development</span>
                <span>DSA</span>
              </div>
            </div>
          </div>


          {/* 2. Java Full Stack Development Training */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
              <div className="education-card-top">
                <span className="education-year">2024 — 2025</span>

                <span className="education-status training">
                  Training
                </span>
              </div>

              <h3>Java Full Stack Development</h3>

              <h4>JSpiders — Java Training & Development Center, Gurugram</h4>

              <p>
                Completed professional training in Java Full Stack Development,
                covering Java, Spring, Spring Boot, REST APIs, databases,
                HTML, CSS, JavaScript, and modern web development.
              </p>

              <div className="education-tags">
                <span>Core Java</span>
                <span>Spring Boot</span>
                <span>Frameworks</span>
                <span>SQL</span>
                <span>Web Development</span>
              </div>
            </div>
          </div>


          {/* 3. BCA */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
              <div className="education-card-top">
                <span className="education-year">2021 — 2024</span>
              </div>

              <h3>Bachelor of Computer Applications (BCA)</h3>

              <h4>Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur</h4>
                  
              <p>
                Completed BCA with a strong foundation in programming,
                computer science fundamentals, databases, software
                development, and problem solving.
              </p>

              <div className="education-tags">
                <span>BCA</span>
                <span>Programming</span>
                <span>Computer Science</span>
              </div>
            </div>
          </div>


          {/* 4. 12th */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
              <div className="education-card-top">
                <span className="education-year">2020 — 2021</span>
              </div>

              <h3>Senior Secondary (12th)</h3>

              <h4>Gyan Mandir Inter College</h4>

              <p>
                Completed senior secondary education with a focus on
                building a strong academic foundation for higher studies.
              </p>

              <div className="education-tags">
                <span>12th</span>
                <span>Senior Secondary</span>
              </div>
            </div>
          </div>


          {/* 5. 10th */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
              <div className="education-card-top">
                <span className="education-year">2018 — 2019</span>
              </div>

              <h3>Secondary School (10th)</h3>

              <h4>Gyan Mandir Inter College</h4>

              <p>
                Completed secondary school education and developed
                the academic foundation for higher education.
              </p>

              <div className="education-tags">
                <span>10th</span>
                <span>Secondary Education</span>
              </div>
            </div>
          </div>

        </div>

        </section>

            {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="contact-content">
            <span className="contact-label">What's next?</span>

            <h2>Let's Work Together</h2>

            <p>
              I'm currently looking for opportunities where I can learn, grow
              and contribute as a software developer.
            </p>

            <a
              href="mailto:amang954817@gmail.com"
              className="primary-button contact-button"
            >
              Say Hello <span>→</span>
            </a>

            <div className="contact-socials">

            {/* Gmail */}
            <a
              href="mailto:amang954817@gmail.com"
              className="social-btn gmail"
            >
              <img
              src="https://cdn.simpleicons.org/gmail/ffffff"
              alt="Gmail"/>
              <span>GMAIL</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/aman0117-crypto"
              target="_blank"
              rel="noreferrer"
              className="social-btn github"
            >
             <img
                src="https://cdn.simpleicons.org/github/ffffff"
                alt="GitHub"
              />
              <span>GITHUB</span>
            </a>

              {/* LinkedIn */}
             <a
                href="https://www.linkedin.com/in/aman-gupta-0474122b8"
                target="_blank"
                rel="noreferrer"
                className="social-btn linkedin"
              >
                <svg
                  className="linkedin-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="LinkedIn"
                >
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 1 1 0-4.126 2.06 2.06 0 0 1 0 4.126M7.119 20.452H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
                  />
                </svg>

                <span>LINKEDIN</span>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/aman_1711/"
                target="_blank"
                rel="noreferrer"
                className="social-btn leetcode"
              >
                <img
                  src="https://cdn.simpleicons.org/leetcode/ffffff"
                  alt="LeetCode"
                />
                <span>LEETCODE</span>
              </a>

            </div>
                      </div>
                    </section>
       
                  </main>

                  {/* FOOTER */}
                  <footer className="footer">

                  {/* Left */}
                  <div className="footer-left">
                    Built with React &<span className="heart">❤️</span>
                  </div>

                  {/* Center */}
                  <div className="footer-contact">

                    <a
                      href="mailto:amang954817@gmail.com"
                      className="footer-contact-item"
                    >
                      <svg
                        className="footer-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 5H21V19H3V5Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 6L12 13L21 6"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span>amang954817@gmail.com</span>
                    </a>

                    <span className="footer-separator">•</span>

                    <a
                      href="tel:+919548117037"
                      className="footer-contact-item"
                    >
                      <svg
                        className="footer-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 3.5L9.5 3L11 7L8.8 8.8C10 11.4 12.1 13.8 15.2 15.2L17 13L21 14.5L20.5 17.5C20.3 18.7 19.2 19.5 18 19.5C10.5 19.5 4.5 13.5 4.5 6C4.5 4.8 5.3 3.7 6.5 3.5Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span>+91 9548117037</span>
                    </a>

                  </div>

                  {/* Right */}
                  <div className="footer-right">
                    © 2026 Aman Gupta
                  </div>

                </footer>
                </div>
  );
}

export default App;