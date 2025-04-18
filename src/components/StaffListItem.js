import React from 'react'

const StaffListItem = ({staff}) => {
  const { name, job, age, pay } = staff

  return (
    <div className='card bg-zinc-50 border-zinc-200 w-96 shadow-sm border'>
      <div className='card-body'>
        <h2 className='card-title'>{job} {name}</h2>
        <p>Age: {age}</p>
        <p>Salary: {pay}</p>
      </div>
    </div>
  )
}

export default StaffListItem