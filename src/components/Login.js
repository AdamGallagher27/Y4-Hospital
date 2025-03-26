import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Logged in with:', email, password)
  }

  return (
    <>
      <h2 className='text-2xl font-bold text-center'>Login</h2>
      <form onSubmit={handleLogin} className='space-y-4'>
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
          Log In
        </button>
      </form>
    </>
  )
}

export default Login
