import React from 'react'
import './css_js/futuristic.css'
// import './css_js/futuristic'

const FuturistCard = ({name, addres}) => {
  return (
    <div className='bodyfuture'>
        <div className="screen">  
  <div className="screen-image"
  style={{ 
  // backgroundImage: url(),
  }}
  ></div>  
  <div className="screen-overlay"></div>  
  <div className="screen-content">
    {/* <i className="screen-icon fa-brands fa-codepen"></i> */}
    <div className="screen-user">
      <span className="name" data-value={name}>{name}</span>
      <a className="link" href={addres} target="_blank">Ver más</a> 
    </div>
  </div>
</div>
    </div>
  )
}

export default FuturistCard