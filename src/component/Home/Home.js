import React from 'react'
import './Home.css'
import Navbar from './Navbar/Navbar'
import About from '../About/About'

//images and other data
import resume from '../../Data/resume.pdf'
import ness from '../../Data/ness.png'

function Home() {
  return (
    <div className='main-container'>
        <Navbar />
        <div className='home-container'>
            <div id='left-container'>
                <p id='intro-text'>
                    Hi, I am Sangyun Kim<br/>
                    Software Engineer<br />
                </p>
                <a id='intro-button' href={resume}>Resume / CV</a>
            </div>
            <div id='right-container'>
                <img id='profile-img' src={ness} alt={ness}/>
                <div id='intro-tag'>Currently studying at Boston University</div>
            </div>
        </div>
        <About />
    </div>
  )
}

export default Home