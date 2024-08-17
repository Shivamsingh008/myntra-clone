import React from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Herosection from './components/herosection/Herosection'
import Cards from './components/herosection/Cards'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div className='m-0 p-0 w-full'>
    <Navbar  />
    <Banner />
    <Herosection/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App
