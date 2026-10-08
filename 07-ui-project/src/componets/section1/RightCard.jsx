import React from 'react'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
    console.log(props.color);
  return (
    <div className='h-full overflow-hidden relative w-80 shrink-0 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt=""/>
      <RightCardContent color={props.color} id={props.id} tag={props.tag} intro={props.intro} />
    </div>
  )
}

export default RightCard
