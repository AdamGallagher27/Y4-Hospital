import { Navigate } from "react-router-dom"


const Protected = ({children}) => {
  const authenticated = localStorage.getItem('authToken')

  return authenticated ? children : <Navigate to='/' />
}

export default Protected