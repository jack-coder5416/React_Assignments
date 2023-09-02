import React from 'react'
import './Body.css'
import SearchComponent from '../util/searchComponent/SearchComponent'
import GridList from '../util/gridList/GridList'


export default function Body() {
  return (
    <div className='body-container'>
        <SearchComponent />
        <GridList/>
    </div>
  )
}



