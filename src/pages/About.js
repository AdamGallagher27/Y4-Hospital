import React, { useEffect, useState } from 'react'
import { parseRichText } from '../utils'
import Paragraph from '../components/Paragraph'
import { useNavigate } from 'react-router-dom'

const getAbout = async () => {
  try {
    const response = await fetch('/api/collections/about-007124', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      },
    })

    const responseData = await response.json()

    if (responseData.ok) {
      return parseRichText(responseData.body[0])
    }
  }
  catch (error) {
    console.error('Error registering', error)
  }
}

const About = () => {
  const [richTexts, setRichTexts] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const handleGetAbout = async () => {
      setRichTexts(await getAbout())
    }

    handleGetAbout()
  }, [])

  return (
    <div className='w-[60%] p-6'>
      {!richTexts && <span className='loading loading-spinner loading-xl'></span>}

      {richTexts.firstParagraph?.body?.innerHTML && <Paragraph richText={richTexts.firstParagraph.body.innerHTML} />}
      {richTexts.secondParagraph?.body?.innerHTML && <Paragraph richText={richTexts.secondParagraph.body.innerHTML} />}
      {richTexts.thirdParagraph?.body?.innerHTML && <Paragraph richText={richTexts.thirdParagraph.body.innerHTML} />}
      {richTexts.fourthParagraph?.body?.innerHTML && <Paragraph richText={richTexts.fourthParagraph.body.innerHTML} />}
      <button onClick={() => navigate('/home')} className='btn m-4'>Back To Home</button>
    </div>
  )
}

export default About
