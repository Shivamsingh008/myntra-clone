import React from 'react'
// import { prod5 } from '../assets'
import { 
  prod1,
  prod2,
  prod3,
  prod4,
  prod5,
  prod6,
  prod7,
  prod8 
    } from '../assets'

function Cards() {
  return (
    // <div className='md:p-4  pt-8 pl-2  md:gap-20 sm:gap-40 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-10 p-2 pr-8  items-center grid md:w-full w-[382px] h-[90%] bg-slate-900'>
    <div className=' flex flex-wrap flex-row bg-red-700 items-center justify-around '>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px]'>
  
    <img className='aspect-auto h-[230px] ' src={prod5} alt="" />
    
    <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-1  text-sm ' >
      <h1 className='text-lg'> Shoes</h1>
      <h1 className='text-xl'>40%-50% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod1} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center   text-sm ' >
    <h1 className='text-lg'> 
    Shirts</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>

<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
    <img className='aspect-auto w-full h-[230px] ' src={prod2} alt="" />
    
    <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
      <h1 className='text-lg'> Jeans</h1>
      <h1 className='text-xl'>40%-50% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod3} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Kurta</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod4} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Suit</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod6} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Chairs</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod7} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Plants</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod8} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Decorations</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>


<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
    <img className='aspect-auto h-[230px] ' src={prod5} alt="" />
    
    <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
      <h1 className='text-lg'> Shoes</h1>
      <h1 className='text-xl'>40%-50% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod1} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> 
    Shirts</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>

<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
    <img className='aspect-auto w-full h-[230px] ' src={prod2} alt="" />
    
    <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
      <h1 className='text-lg'> Jeans</h1>
      <h1 className='text-xl'>40%-50% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod3} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Kurta</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod4} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Suit</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod6} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Chairs</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod7} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Plants</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>
</div>
<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod8} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Decorations</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>

</div>

<div className='grid border border-gray-700 md:h-80 md:w-[175px] w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod8} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Decorations</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>

</div>

<div className='grid border border-gray-700 md:h-80 md:w-48 w-[175px]  m-[20px] '>
  
  <img className='aspect-auto h-[230px] ' src={prod8} alt="" />
  
  <div className='bg-pink-800 text-orange-100 flex flex-col items-center justify-center p-2s  text-sm ' >
    <h1 className='text-lg'> Decorations</h1>
    <h1 className='text-xl'>40%-50% OFF</h1>
    <h1 className='text-lg'>Shop Now</h1>
  </div>

</div>

</div>
  )
}

export default Cards
