import React from 'react'
import flowerImage from '../flower.avif';

const Card = (props) => {

  return (
    <div className="card">
      <img src={props.img} alt=""/>
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
