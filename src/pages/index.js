import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I am <span className="bold">Siddhartha Narayanadasu</span>
        </h5>

       
          <h3 className="bold">MERN stack developer. I am looking out for opportunities. Technologies i have used</h3>  
          <h4 className="bold"> | C | Java | HTML5 | CSS | node.js | Express.js | MongoDB | Postgres | Mysql | React.js | Docker | Heroku | </h4>
        

        <ExperienceSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
