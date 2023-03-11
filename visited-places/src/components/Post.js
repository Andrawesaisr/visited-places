import React from 'react'
import {FiMapPin} from 'react-icons/fi'
import './post.css'

function Post(props) {
    
  return (
    <div className='all-container'>
    { props.arr.map((e,idx)=>{
        return(
        <div key={idx} className='post-container'>
        <div className='img-container'>
            <img src={e.imgLink} alt='pyramids' className='img'/>
        </div>
        <div className='info-container'>
            <h3 className='name'>
            {e.placeName}
            </h3>
            <div className='link-container'>
                <a href={e.mapLink} target="_blank" rel="noreferrer">
                  Link
                </a>
                <FiMapPin/>
            </div>
            <p className='description'>
                {e.dsc}
            </p>
        </div>
    </div>
        )    
})   
    
}
    </div>
  )
}

export default Post