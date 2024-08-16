import React from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Herosection from './components/herosection/Herosection'
import Cards from './components/herosection/Cards'


const App = () => {
  return (
    <div className='md:w-full w-[382px]'>
    <Navbar  />
    <Banner />
    <Herosection/>
    <Cards/>
    </div>
  )
}

export default App
