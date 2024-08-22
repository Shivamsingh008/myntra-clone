
import React from 'react'
import logo from '../images/logo.png'

function Footer() {
  return (
    <div className='md:h-[400px] h-[380px] aspect-auto  bg-gray-800 text-white items-center md:flex flex-row justify-evenly m-auto p-4 text-sm '>
       <div className='flex items-center justify-center font-bold md:text-rose-500 text-yellow-400 text-xs md:text-lg md:ml-20  '>
       <img className='h-14 w-22' src={logo} alt="" />
        MYNTRA CLONE
       </div>
       <div className='flex gap-10 items-center justify-center text-xs md:gap-36 m-4'>
       
        <ul className='flex-row text-gray-400 font-normal'><h1 className='font-bold'>CUSTOMER POKICIES</h1>
        <li className='text-white text-sm mt-6'>Contact Us</li>
        <li className='text-white text-sm mt-6'>FAQ</li>
        <li className='text-white text-sm mt-6'>T&C</li>
        <li className='text-white text-sm mt-6'>Shipping</li>
        <li className='text-white text-sm mt-6'>Terms Of Use</li>
        </ul>

        
        <ul className='flex-row text-gray-400 font-normal'><h1 className='font-bold'>USEFUL LINKS</h1>
        <li className='text-white text-sm mt-6'>Blog</li>
        <li className='text-white text-sm mt-6'>Careers</li>
        <li className='text-white text-sm mt-6'>Site Map</li>
        <li className='text-white text-sm mt-6'>Whitehat</li>
        <li className='text-white text-sm mt-6'>Cleartrip</li>
        </ul>

        
        <ul className='flex-row text-gray-400 font-normal'><h1 className='font-bold '>ONLINE SHOPPING</h1>
        <li className='text-white text-sm mt-6'>Men</li>
        <li className='text-white text-sm mt-6'>Kids</li>
        <li className='text-white text-sm mt-6'>Gift Cards</li>
        <li className='text-white text-sm mt-6'>Beauty</li>
        <li className='text-white text-sm mt-6'>Myntra Insider</li>
        </ul>
</div>
    </div>
  )
}

export default Footer
