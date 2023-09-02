import React from 'react'
import './Header.css'
import brand from '../../assets/brand.png'


export default function Header() {
  return (
    <div className='navbar'>
        <img className="image-brand" src={brand}/>
        <h4 className='item-heading'>Products</h4>
        <h4 className='item-heading'>Pricing</h4>
        <h4 className='item-heading'>Blog</h4>
        <h4 className='item-heading'>Library</h4>
        <h4 className='item-heading'>Support</h4>
        <h4 className='item-heading'>Login</h4>
        <button className='button'>30-Day Free Team Trial</button>
    </div>
  )
}
