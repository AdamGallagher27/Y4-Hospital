import { BrowserRouter as Router, Routes, Route, } from 'react-router'
import Home from './pages/Home'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'
import Protected from './middleware/Protected'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/about' element={
          <Protected>
            <About />
          </Protected>
        } />
        <Route path='/home' element={
          <Protected>
            <Home />
          </Protected>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
