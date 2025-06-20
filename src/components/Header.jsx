import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
        <div className='headerlogo'>
            <img src='../assets/amazon.jpg' alt='Logo' />
            <h2>Amazon</h2>
        </div>
        <div className='headermenu'>
            <ul>
            <li>Mens</li>
            <li>Womens</li>
            <li>Kids</li></ul>
        </div>
        <div className='headersearch'>
            <input type='text' placeholder='Search for products' />
        </div>
        <div className="singin">
            <p>singin/singup</p>
        </div>
        <div className="cart">
            <p>cart</p>
        </div>
      
    </div>
  )
}

export default Header
