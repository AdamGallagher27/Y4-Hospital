import React from 'react'
import { useNavigate } from 'react-router-dom'

const IntroductionBanner = ({ richText }) => {

  const navigate = useNavigate()

  return (
    <div className='bg-blue-600 text-white py-30 text-center flex justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <div className='w-[50%]' dangerouslySetInnerHTML={{ __html: richText }}></div>
        <button className='btn' onClick={() => navigate('/about')}>Read More About Us</button>
      </div>
    </div>
  )
}

export default IntroductionBanner
