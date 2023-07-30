import React, {useRef} from 'react'
import './Education.css'
import Card from './Card/Card';

import bhs from '../../../Data/belmont-high.png'
import BU from '../../../Data/BU.png'
import Umass from '../../../Data/Umass.png'
import Ord from '../../../Data/ordnance.png'

import { AiFillCaretLeft } from "react-icons/ai"

import { AiFillCaretRight } from 'react-icons/ai'

function Education() {
    const ref = useRef();

    const educationCard = [
        {
            logo: BU,
            nameOfSchool: 'Boston University',
            term: '2023/09 - Current',
            gpa: '4.0',
            Major: 'Computer Science',
        },
        {
            logo: Umass,
            nameOfSchool: 'UMass Boston',
            term: '2021/09 - 2023/07',
            gpa: '3.789',
            Major: 'Computer Science',
        },
        {
            logo: Ord,
            nameOfSchool: 'US Army Ordnance',
            term: '2020/11 - 2021/04',
            gpa: 'Passed',
            Major: 'Vehicle Mechanic',
        },
        {
            logo: bhs,
            nameOfSchool: 'Belmont High School',
            term: '2016/09 - 2020/06',
            gpa: '3.28',
            Major: 'General Education',
        },
    ];

    const shiftLeft = () => {
        ref.current.scrollTo(
          {
            left: ref.current.scrollLeft - ref.current.offsetWidth,
            behavior: 'smooth',
          }
        );
      };
      const shiftRight = () => {
        ref.current.scrollTo(
          {
            left: ref.current.scrollLeft + ref.current.offsetWidth,
            behavior: 'smooth',
          }
        );
      };

  return (
    <div className='education-container'>
        <AiFillCaretLeft id='gallery-left-button' onClick={shiftLeft}/>
        <div id='gallery-container' ref={ref}>
            {educationCard.map((card) => {return (<Card card={card}/>);})}
        </div>
        <AiFillCaretRight id='gallery-right-button' onClick={shiftRight}/>
    </div>
  )
}

export default Education