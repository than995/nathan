import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import './Styles/App.css'
import Menu from './pages/Menu' 
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return <div className="App">
    <Router>
      <Navbar />

      <Routes>
          <Route path="/" exact Component={Home} ></Route>
          <Route path="/menu" exact Component={Menu} ></Route>
          <Route path="/About" exact Component={About} ></Route>
          <Route path="/Contact" exact Component={Contact} ></Route>
      </Routes>
      <Footer/>
    </Router>
  </div>
}

export default App
