import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCardContent = (props) => {
    console.log(props.color);
  return (
   <div className='absolute shrink-0 top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='text-2xl text-black font-semibold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadwon-2xs text-lg leading-relaxed text-white mb-12'>{props.intro}</p>
            <div className='flex justify-between items-center gap-3 mt-4'>
                <button  className={`${props.color} text-white font-medium px-8 py-2 rounded-full`}>{props.tag}</button>
                <button className='size-12 text-white font-medium px-3 py-2 rounded-full' ><MoveRight className='w-5 h-5'/></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent