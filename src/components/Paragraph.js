import React from 'react'

const Paragraph = ({ richText }) => {

  return (
    <div className='card bg-base-100 shadow-md my-4'>
      <div className='card-body'>
        <div
          className='prose text-gray-800 leading-relaxed max-w-none'
          dangerouslySetInnerHTML={{ __html: richText }}
        ></div>
      </div>
    </div>
  )
}

export default Paragraph
