import React from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Herosection from './components/herosection/Herosection'
import Cards from './components/herosection/Cards'

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner />
    <Herosection/>
    <Cards/>
    </>
  )
}

export default App
