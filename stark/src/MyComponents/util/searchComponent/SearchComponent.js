import React , { useState } from 'react'
import './SearchComponent.css'


export default function SearchComponent() {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className='search-body-container'>
      <h4 className='heading-h4'>Search Library</h4>
       <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
        <span className="search-icon">&#128269;</span>
        <input
            type="text"
            placeholder="Search..."
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        </div>
        <div className='search-list-heading'>Home</div>
        <div className='search-list-heading'>Collections</div>
        <div className='search-list-heading'>Categories</div>
        <div className='card'>
          <h4 className='main-heading'>Contributor To Stark</h4>
          <h4 className='subheading'>Got any accessibility resources or news?</h4>
          <button className='button-btn'>Submit a resource</button>
        </div>
    </div>
  )
}
