import React from 'react'
import './footer.css'
import wave from '../../img/wave.png'
import { UilInstagramAlt } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={wave} alt="footer image" />
      <div className="f-content">
        <span>abdulgaffarefti66@gmail.com</span>
        <div className="f-icons">
          <UilInstagramAlt />
          <UilFacebookF />
          <UilGithub />
        </div>
      </div>
    </div>
  )
}

export default Footer
