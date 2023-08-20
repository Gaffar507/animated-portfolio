import React from 'react'
import './skill.css'
import { useGlobalContext } from '../../Context'
const Skill = ({image, title, desc}) => {
  const {state}=useGlobalContext()
  const{darkMode}=state

  return (
    <div className='skill-container'>
      <img src={image} alt={title} />
      <span>{title}</span> <br />
      <span>{desc}</span>
      <button className='skill-btn' style={darkMode?{color:'white'}:{}}>Learn more..</button>
    </div>
  )
}

export default Skill
