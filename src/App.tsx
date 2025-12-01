import { useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar'
import { AppRoutes } from './router';


function AppContent() {

  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <AppRoutes />
    
    </>
  )
}



function App() {


  return (
    <BrowserRouter basename='/'>
      <AppContent />
    
    </BrowserRouter>
  )
}

export default App
