import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveToken } from '../utils'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(null)

  const register = async (body) => {
    try {
      const response = await fetch('/api/userAuth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        body: JSON.stringify(body)
      })

      const responseData = await response.json()
      return responseData
    }
    catch (error) {
      console.error('Error registering', error)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    const body = {email, password}
    const response = await register(body)

    if(response.ok) {
      navigate('/home')
      saveToken(response.token)
      setError(null)
    }
    else if(!response.ok) {
      setError(response.message)
    }
  }

  return (
    <>
      <h2 className='text-2xl font-bold text-center'>Register</h2>
      <p className='text-red-700'>{error}</p>
      <form onSubmit={handleRegister} className='space-y-4'>
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Register
        </button>
      </form>
    </>

  )
}

export default Register
