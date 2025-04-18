import React from 'react'

const StaffParagraph = (richText) => {
  return (
    <div className=''>
      <div dangerouslySetInnerHTML={{ __html: richText }}></div>
    </div>
  )
}

export default StaffParagraph