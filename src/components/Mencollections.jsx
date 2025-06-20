import React from 'react'

const Mencollections = (props) => {
    const {title,image1,image2,image3,image4,image5,image6} = props.gents;
  return (
    <div className='mencollections'>
      <h1>{title}</h1>
       <div className="bannersection">
      <img src="../assets/GentsBanner.gif" alt="" />
    </div>
      <div className='image'>
          <img src={image1} alt="Gentscollection" />
          <img src={image2} alt="Gentscollection" />
          <img src={image3} alt="Gentscollection" />
          <img src={image4} alt="Gentscollection" />
          <img src={image5} alt="Gentscollection" />
          <img src={image6} alt="Gentscollection" />
      </div>
     
    </div>
  )
}

export default Mencollections
