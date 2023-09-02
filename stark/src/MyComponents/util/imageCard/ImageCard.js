import React from 'react'
import './ImageCard.css'


export default function ImageCard(props) {
  return (
    <div className='image-container' style={{backgroundColor:props.color}}>
        <h4 className='image-title'>{props.title}</h4>
        <img  className ="image" src={props.image}/>
    </div>
  )
}
