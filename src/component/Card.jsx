
import React from 'react'

const Card = (props) => {
  return (
    <div className='w-full'>
      <a href={props.elem.url} target='_blank' rel='noreferrer'>
        <div className='w-full aspect-square bg-white rounded-xl overflow-hidden'>
          <img
            className='h-full w-full object-cover'
            src={props.elem.url}
            alt='Gallery image'
          />
        </div>
        <h2 className='text-center font-bold text-sm sm:text-base mt-2 truncate'>
          {props.elem.author || 'Gallery Image'}
        </h2>
      </a>
    </div>
  )
}

export default Card
