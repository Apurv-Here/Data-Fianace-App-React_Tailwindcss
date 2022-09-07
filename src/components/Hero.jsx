import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
    <div>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 pb-0 '>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold py-1 md:py-4'>Grow with data.</h1>
            <div className='flex justify-center items-center '>
                <p className='text-xl sm:text-3xl md:text-4xl font-bold  py-4 mb-2'>Fast, flexible financing for </p>
                <Typed className='text-xl sm:text-3xl md:text-4xl font-bold pl-2 md:pl-4 text-gray-500' strings={['B2B', 'B2C', 'SaaS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='text-xl md:text-2xl font-bold text-gray-500'>Monitor your data analytics to increase your revenue for B2B, B2C &#38; Saas platforms.</p>
            <button className='bg-[#00df9a] w-[160px] rounded-md font-bold mx-auto my-8 py-3  text-black hover:bg-green-200'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero