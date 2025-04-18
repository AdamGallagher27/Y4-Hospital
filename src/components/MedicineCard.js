import React from 'react'

const MedicineCard = ({ prescription }) => {
  const {
    name,
    prescriptionRequired,
    dosageForm,
    price,
    strength,
    manufacturer,
    quantityInStock,
    storageInstructions
  } = prescription

  return (
    <div className='card border w-64'>
      <div className='card-body'>
      <h2 className='card-title'>{name}</h2>
      <div className='space-y-2 text-gray-800 text-sm'>
        <p>Prescription Required: {prescriptionRequired ? 'Yes' : 'No'}</p>
        <p>Dosage Form: {dosageForm}</p>
        <p>Strength: {strength}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Quantity In Stock: {quantityInStock}</p>
        <p>Price: ${price}</p>
        <p>Storage Instructions: {storageInstructions}</p>
      </div>
      </div>
    </div>
  )
}

export default MedicineCard