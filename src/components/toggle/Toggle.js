import React from 'react'
import './toggle.css'
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import { useGlobalContext } from '../../Context'
const Toggle = () => {
    const { state, dispatch}=useGlobalContext()
    const {darkMode}=state
    const handleClick =()=>{
        dispatch({type: 'toggle'})
    }
  return (
    <div className='toggle' onClick={handleClick}>
        <UilSun/>
        <UilMoon/>
        <div 
            style={darkMode?{right:'5px'}:{left:'5px'}}
        ></div>
    </div>
  )
}

export default Toggle
