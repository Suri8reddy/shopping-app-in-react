import React from 'react'

const Ladiescollections = (props) => {
    const {title,image1, image2, image3, image4, image5, image6, image7} = props.ladies;
  return (
   <div>
        <h1>{title}</h1>
         <div className="bannersection">
            <img src="../assets/LadiesBanner.gif" alt="" />
        </div>
        
        <div className='image'>
            <img src={image1} alt="ladiescollection" />
            <img src={image2} alt="ladiescollection" />
            <img src={image3} alt="ladiescollection" />
            <img src={image4} alt="ladiescollection" />
            <img src={image5} alt="ladiescollection" />
            <img src={image6} alt="ladiescollection" />
        </div>
   </div>
  )
}

export default Ladiescollections
