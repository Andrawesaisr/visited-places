import React from 'react'
import './navigationBar.css'
import { FaGlobeAfrica } from "react-icons/fa";
function NavigationBar() {
  return (
    <div className='navigation'>
        <h2 className='header'>Visisted Places</h2>
        <FaGlobeAfrica className='earth-image' />
    </div>
  )
}

export default NavigationBar