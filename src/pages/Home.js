import React, { useEffect, useState } from 'react'
import MedicineCard from '../components/MedicineCard'
import IntroductionBanner from '../components/IntroductionBanner'
import Paragraph from '../components/Paragraph'
import { parseRichText } from '../utils'

const getAllMedicine = async () => {
  try {
    const response = await fetch('/api/collections/prescription-603291', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      },
    })

    const responseData = await response.json()

    if (responseData.ok) {
      return responseData.body
    }
  }
  catch (error) {
    console.error('Error registering', error)
  }
}


const getRichTexts = async () => {
  try {
    const response = await fetch('/api/collections/homepage-569000/6a3d516a-3672-4e93-a991-0143e9baf9df', {
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

const Home = () => {
  const [prescriptions, setPrescriptions] = useState([])
  const [richTexts, setRichTexts] = useState({})

  useEffect(() => {
    const handleGetAllMedicine = async () => {
      setPrescriptions(await getAllMedicine())
    }

    const handleGetRichText = async () => {
      setRichTexts(await getRichTexts())
    }

    handleGetAllMedicine()
    handleGetRichText()
  }, [])


  return (
    <div>
      {richTexts.introductionParagraph?.body?.innerHTML && (
        <IntroductionBanner richText={richTexts.introductionParagraph.body.innerHTML} />
      )}
      <div className='py-8 px-30'>
          {richTexts.prescriptionParagraph?.body?.innerHTML && (
            <Paragraph richText={richTexts.prescriptionParagraph.body.innerHTML} />
          )}
        <div className='my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center'>
          {prescriptions.map((prescription, index) => (
            <MedicineCard key={index} prescription={prescription} />
          ))}
        </div>
        <div className='mb-8'>

          {richTexts.staffParagraph?.body?.innerHTML && (
            <Paragraph richText={richTexts.staffParagraph.body.innerHTML} />
          )}

        </div>
      </div>

    </div>

  )
}

export default Home