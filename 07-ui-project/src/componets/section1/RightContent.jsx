import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
  console.log(props.user.color);
  return (
    <div
     id='right'
     className='h-full flex rounded -4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {props.user.map(function(elem,idx){
         
        return <RightCard key={idx}  color={elem.color}  id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
      })}
    </div>
  )
}

export default RightContent
