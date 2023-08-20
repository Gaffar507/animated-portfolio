import React , {useRef, useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useGlobalContext } from '../../Context';
import { motion } from 'framer-motion';
const Contact = () => {
    const {state} =useGlobalContext()
    const {darkMode}=state

    const form=useRef()
    const[ done , setDone] =useState(false)
    const handleSubmit =(e)=>{
        e.preventDefault()
            emailjs.sendForm('service_suxyid8', 'template_rsmjsoq', form.current,'UyoDD-USBmHyvlcQL')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setDone(true)
    }, function(error) {
       console.log('FAILED...', error);
    });
    }
  return (
    <div className='contact-container' id='contact'>
           <div className="left-container">
                <motion.div
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                
                transition={{duration:1.8, type:'spring'}}
                className="awesome">
                {/* darkMode */}
                    <span style={darkMode? {color:'white'}:{}}>Get in Touch</span>
                    <span>Contact me</span>
                    {/* <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div> */}
                </motion.div>
            </div>
            <div className="right-container">
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" name='user_name' className='user' id='user_name' placeholder='User Name'/>
                    <input type="text" name='user_email' className='user' id='user_email' placeholder='User Email'/>
                    <textarea type="text" name='message' className='user' id='message' placeholder='Message'/>
                    <button type='submit' value='send' className='button contact-btn'>Send</button>
                    <span style={{color:'white'}}>{done? 'Thanks for sending Info.!':''}</span>
                </form>
            </div>
    </div>
  )
}

export default Contact
