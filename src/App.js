import React from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Herosection from './components/herosection/Herosection'
import Cards from './components/herosection/Cards'
import Footer from './components/footer/Footer'
import Login from './components/pages/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'



const App = () => {
  return (
   <BrowserRouter>
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
  )
}

export default App
