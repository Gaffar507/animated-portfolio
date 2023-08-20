import React from 'react';
import { Vector1,Vector2,glassesemoji,boy,thumpup,crown,Github,LinkedIn,instagram} from './index'
import {Link } from 'react-scroll'
import './intro.css';
import FloatingDiv from '../floatingDiv/FloatingDiv';
import { useGlobalContext } from '../../Context';
import Navbar from '../navbar/Navbar';
import { motion } from "framer-motion"
const Intro = () => {
const transition = { type:'string', duration:.7}
  const{ state}=useGlobalContext()
  const { darkMode }=state
  return (
    <div className='intro' id='home'>
      <Navbar/>
      <div className="intro-container">
      <div className="left-intro">
        <div className="intro-name">
            <span  style={darkMode?{color:'white'}:{}}>Hy! I Am</span>
            <span>Andrew Thomas</span>
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>
          <Link to='contact' spy={true} smooth={true}>
            <button className='intro-btn button'>Hire me</button>
          </Link>
        {/* social icons */}
        <div className="intro-icons">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkIn" />
          <img src={instagram} alt="Instagram" />
        </div>
      </div>
      <div className="right-intro"  style={darkMode?{zIndex:'9'}:{}} >
        <img src={Vector1} alt="shadow image" />
        <img src={Vector2} alt="shadow image"/>
        <img src={boy} alt="boy" />
        <motion.img
        // initial={{left:'-5rem'}}
        // whileInView={{left:'1rem'}}
        // transition={transition}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        src={glassesemoji} alt="emoji" />
        <motion.div
                        initial={{right:'5rem'}}
                        whileInView={{right:'-3rem'}}
                        transition={transition}
        className='float-1'>
          <FloatingDiv image={crown} text1={'Web'} text2={'Developer'}/>
        </motion.div>
        <motion.div
                        initial={{left:'6rem'}}
                        whileInView={{left:'0rem'}}
                        transition={transition}
        className='float-2'>
          <FloatingDiv image={thumpup} text1={'Best Design'} text2={'Award'}/>
        </motion.div>
        <div className="blur"></div>
        {/* <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
      </div>
    </div>
  )
}

export default Intro
