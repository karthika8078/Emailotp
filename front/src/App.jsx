import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from './components/Login';
//import Home from './components/Home';
import Welcome from './components/Welcome';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <Router>
      <Routes>
      <Route path="/welcome" element={<Welcome />} /> {/* Welcome Page */}
      </Routes>
    </Router>
    </>
  )
}

export default App
