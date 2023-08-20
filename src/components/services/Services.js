import React from 'react'
import glasses from '../../img/glasses.png'
import heart from '../../img/heartemoji.png'
import humble from '../../img/humble.png'
import Skill from '../skill/Skill'
import './services.css'
import Resume from './resume.pdf'
import {useGlobalContext} from '../../Context'
import {motion} from 'framer-motion'
const Services = () => {
const transition={duration:2, type:'spring'}
  const {state}=useGlobalContext()
  const{darkMode}=state
  return (
    <div className='services-container' id='services'>
      <div className="services-left">
            <div className="services-title">
                <span   style={darkMode?{color:'white'}:{}}>My Awesome</span> <br />
                <span >Services</span>
                <p  style={darkMode?{color:'white'}:{}}>Here's my preserved iconogical skills, you can check it out to take advantage of better services.</p>
            </div>
            <a href={Resume} download><button className='button d-btn'> Download CV</button></a>
      </div>
      <div className="services-right">
        <motion.div
                        initial={{top:'-10rem'}}
                        whileInView={{top:'-7rem'}}
                        transition={transition}
        className="skill-1">
            <Skill image={heart} title={'Design'} desc={'Figma, PhotoShop, Sketch, Adobe Illustrator, Adobe Xd'}/>
        </motion.div>
        <motion.div
                                initial={{left:'-5rem'}}
                                whileInView={{left:'0rem'}}
                                transition={transition}
        className="skill-2">
            <Skill image={glasses} title={'Developer'} desc={"Html, Css, JavaScript, React, Nodejs, Express"}/>
        </motion.div>
        <motion.div 
                                initial={{right:'-5rem'}}
                                whileInView={{right:'0rem'}}
                                transition={transition}
        className="skill-3">
            <Skill image={humble} title={'UI/UX'} desc={'React dashboard, Restaurants, Business web, education web, tourest web etc.'}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
