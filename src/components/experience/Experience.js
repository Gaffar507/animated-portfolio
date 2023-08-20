import React from "react";
import "./experience.css";
import { useGlobalContext } from '../../Context';
const Experience = () => {
  const {state} =useGlobalContext()
  const {darkMode}=state
  return (
    <div className="experience" id='experience' >
      <h2  style={darkMode? {color:'white'}:{}}>Experience</h2>
      <div className="achievements"  style={darkMode?{color:'black',zIndex:'9'}:{}}>
        <div className="achievement">
            <div className="circle" >8+</div>
            <span  style={darkMode? {color:'white'}:{}}>Years </span>
            <span>Experience</span>
        </div>
        <div className="achievement">
          <div className="circle" >20+</div>
          <span  style={darkMode? {color:'white'}:{}} >Completed </span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <div className="circle" >5+</div>
          <span  style={darkMode? {color:'white'}:{}}>Companies </span>
          <span>Work</span>
        </div>
      </div>

    </div>
  );
};

export default Experience;