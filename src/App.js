import React , {useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Herosection from './components/herosection/Herosection'
import Cards from './components/herosection/Cards'
import Footer from './components/footer/Footer'
import Login from './components/pages/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Loader from './components/Loader'




const App = () => {

  const [isMobile, setIsMobile] = useState(true);

  // Effect to handle window resize
  useEffect(() => {
    // Media query list
    setTimeout(() => {
      setIsMobile(false)
    }, 4000);
  },[])

  return (
    <>
    {
      isMobile ?
    <Loader/> : <BrowserRouter>
    <Routes>
      <Route path='/' element={ <div className='m-0 p-0 w-full'>
   <Navbar  />
    
    <Banner />
    <Herosection/>
    <Cards/>
    <Footer/>
    </div>} />

    <Route path='/login' element={<Login/>} />
    </Routes>

   </BrowserRouter>
    }

   
   </>
  )
}

export default App
