import React from 'react'
import './About.css'

import Education from './Education/Education'


function About() {
  return (
    <div className='about-container'>
        <div id='about-div'>
            <div id='div-title'>About</div>
            <hr id='div-line'/>
        </div>
        <div id='about-gallery-container'>
            <p id='about-description-text'>
                I'm a software engineer who enjoys developing web-pages and data structures!<br/>
                I'm currently pursuing a bachelor's degree in computer science at Boston University!<br/>
                I'm also currently Specialist "E-4" in United State Army Reserve, working part-time as wheeled vehicle mechanic with 3 years of experience.<br/>
            </p>
            <div id='title-gallery-container'>
              <div id='title-of-gallery'>Education</div>
              <Education />
            </div>
        </div>
    </div>
  )
}

export default About