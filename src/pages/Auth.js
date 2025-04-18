import { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'


const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(true)
  const handleButtonPress = () => {
    setIsRegistering(prev => !prev)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg'>
        {isRegistering ? <Register /> : <Login />}
        <button className='underline' onClick={handleButtonPress}>{isRegistering ? 'Login' : 'Register'}</button>
      </div>
    </div>
  )
}

export default Auth