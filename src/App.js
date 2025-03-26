import { BrowserRouter as Router, Routes, Route, } from 'react-router'
import Home from './pages/Home'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
