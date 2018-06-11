import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import rpLogo from '../../assets/images/experience/rp.jpg'


class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="">
        <div className="row">
          <ExperienceUnit
            logo={rpLogo}
            colour="#352146"
            title="Recipe Manager"
            link="https://recipemanager7.herokuapp.com/"
            timeperiod="Mar 2018 - Mar 2018"
            subtitle="This webapp is used to add and view the recipes along with login flow of users"
          />
       
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
