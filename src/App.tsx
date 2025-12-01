
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar'
import { AppRoutes } from './router';


function AppContent() {


  
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
