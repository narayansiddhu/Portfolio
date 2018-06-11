import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import weatherLogo from '../../assets/images/experience/weather.jpg'
import imguruLogo from '../../assets/images/experience/imguru.jpg'
import Logo from '../../assets/images/experience/game.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={weatherLogo}
            colour='#139c92'
            title='Weather App'
            link='https://reactweather7.herokuapp.com/'
            timeperiod='May 2018 - May 2018'
            subtitle='A React Web App that utilizes the OpenWeatherMap API and google map api to
             return current and 5 day forecasted weather for a given location.'
          />
          <ExperienceUnit
            logo={imguruLogo}
            colour='#222222'
            title='Imgur'
            link='https://imgur7.herokuapp.com/'
            timeperiod='Feb2018 - Feb2018'
            subtitle='Imgur is an online image sharing community and image host'
          />
          <ExperienceUnit
            logo={Logo}
            colour='#ffcd3a'
            title='2048 Game'
            link='https://github.com/narayansiddhu/2048Game'
            timeperiod='Jan 2018 -  Jan 2018'
            subtitle='JS Implementation of the infamous 2048 game'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
