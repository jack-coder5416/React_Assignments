import React from 'react'
import './GridList.css'
import ImageCard from '../imageCard/ImageCard'
import card1 from '../../../assets/card1.png'
import card2 from '../../../assets/card2.png'
import card3 from '../../../assets/card3.png'


export default function GridList() {
  return (
    <div className='grid-body-container'>
      <h4 className='grid-body-heading'>Featured Collections</h4>
      <h4 className='grid-body-subheading'>Handpicked and curated collections around accessibility.</h4>
      <div className='card-grid'>
        <ImageCard image={card1} title="Disability Employment" color="#fcfceb"/>
        <ImageCard image={card2} title="Making Accessible Color Combos" color="#f3f3fc"/>
        <ImageCard image={card3} title="Tips and Tricks for inclusive social medial" color="#fcfceb"/>
      </div>
      <h4 className='grid-body-heading'>Browse All Collections</h4>
      <div className='card-grid'>
        <ImageCard image={card1} title="Disability Employment" color="#fcfceb"/>
        <ImageCard image={card2} title="Making Accessible Color Combos" color="#f3f3fc"/>
        <ImageCard image={card3} title="Tips and Tricks for inclusive social medial" color="#fcfceb"/>
      </div>
    </div>
  )
}
