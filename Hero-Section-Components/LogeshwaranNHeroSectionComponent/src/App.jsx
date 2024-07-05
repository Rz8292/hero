import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Career from './components/Career'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/career' element={<Career/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
