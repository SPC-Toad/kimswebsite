import React from 'react'
import './Card.css'

export const Card = ({card}) => {
  return (
    <div className='card-container'>
        <img src={card.logo} alt='err' id='logo-item'/>
        <div id='school-name-text'>{card.nameOfSchool}</div>
        <div id='major-text'>{card.Major}</div>
        <div id='term-text'>{card.term}</div>
        <div id='gpa-text'>GPA: {card.gpa}</div>
    </div>
  )
}

export default Card