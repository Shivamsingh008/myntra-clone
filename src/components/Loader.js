import React from 'react'
import Loaders from './assets/Loader.gif'


function Loader() {
  return (
    <div>
      <img controls autoplay loop className='h-[100vh] w-[100vw]  justify-center aspect-auto items-center' src={Loaders} alt="" />
    </div>
  )
}

export default Loader
