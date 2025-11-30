import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <About />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
