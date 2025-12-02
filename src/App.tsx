
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar'
import { AppRoutes } from './router';
import Footer from './components/Footer';


function AppContent() {


  
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
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
