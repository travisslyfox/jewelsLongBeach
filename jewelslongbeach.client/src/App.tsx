// import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import './App.css'

document.body.style = 'background: #0f0f0f';



function App() {


  return (
    <>
      <Navbar />
      
      <div style={{ backgroundColor: '#0f0f0f', maxWidth: '100%'}}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

        <Footer/>
      </div>
    </>
  )
}

export default App
