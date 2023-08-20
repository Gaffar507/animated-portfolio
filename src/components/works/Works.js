import React from 'react'
import './works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { Link } from 'react-scroll';
import { useGlobalContext } from '../../Context';
import { motion } from "framer-motion"
const Works = () => {

  const {state} =useGlobalContext()
  const {darkMode}=state
  return (
    <div className='works' id='works' >
            {/* left side */}
       <div className="w-left" >
        <div className="awesome">
          {/* dark Mode */}
          <span  style={darkMode? {color:'white'}:{}}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side */}
      <div className="right-work"  style={darkMode?{zIndex:'9'}:{}}>
        <motion.div
        initial={{rotate:-360}}
        whileInView={{ rotate: 0}}
        transition={{duration:5, type:'spring'}}
        className="main-circle" >
          <div className="icon-circle">
            <img src={Upwork} alt="upwork" />
          </div>
          <div className="icon-circle">
            <img src={Fiverr} alt="fiver" />
          </div>
          <div className="icon-circle">
            <img src={Amazon} alt="amazon" />
          </div>
          <div className="icon-circle">
            <img src={Facebook} alt="Facebook" />
          </div>
          <div className="icon-circle">
            <img src={Shopify} alt="Shopify" />
          </div>
        </motion.div>
        <div className="back-circle blue-circle"></div>
        <div className="back-circle yellow-circle"></div>
      </div>
    </div>
  )
}

export default Works
