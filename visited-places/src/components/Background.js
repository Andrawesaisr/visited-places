import React from 'react'
import background from '../images/egypt.avif'
import './background.css'
function Background() {
  return (
    <div className='background-container'>
           <img src={background} alt='background' className='background-image'/>
           <p className='background-text'>Welcome, <br/> Share the most beautiful places <br/> that you have visited in egypt</p>
    </div>
  )
}

export default Background