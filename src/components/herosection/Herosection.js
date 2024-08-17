import React from 'react'
import { 
  imgbanner ,
  imgbanner2 ,
  imgbanner3 ,
  imgbanner4

} from '../assets'

function Herosection() {
  return (
    <div className='mt-8 md:p-2 p-1  aspect-auto'>
      <img src={imgbanner2} alt="imgbanner2" />
    
    <img className='m-auto items-center' src={imgbanner3} alt="imgbanner3" />
    <img className='mt-8' src={imgbanner4} alt="imgbanner4" />
    
    
    <img className='mt-8 ' src={imgbanner} alt="imgbanner" />
    </div>
  )
}

export default Herosection
