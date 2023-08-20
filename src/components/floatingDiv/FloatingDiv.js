import React from 'react'
import './floatingDiv.css'
const FloatingDiv = ({image, text1, text2}) => {
  return (
    <div className='floatingDiv'>
      <img src={image} alt={text1+' '+text2} />
      <div className="text" style={{color:'black'}}>
              <span>{text1}</span>
            <br />
            <span>{text2}</span>
      </div>
    </div>
  )
}

export default FloatingDiv
