// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import './App.css'

document.body.style = 'background: #0f0f0f';



function App() {


  return (
    <>
      <Navbar />
      
      <div style={{ backgroundColor: '#0f0f0f' }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

        <Footer/>
      </div>
    </>
  )
}

export default App
