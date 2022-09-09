import React from 'react';
import Laptop from '../assets/laptop.jpg';

function Analytics() {
  return (
    <div className='w-full  py-16 px-4 bg-white'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />

            <div className=' text-black flex flex-col justify-center mx-4 p-1 md:p-4'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>As companies recognize the predictive power of advanced analytics, many are hoping to use AA to drive their business decisions and strategies. While most companies understand the importance of analytics and have adopted common best practices, fewer than 20 percent, have maximized the potential and achieved AA at scale.</p>
                <button className='bg-black w-[160px] rounded-md font-semibold mx-auto md:mx-0  my-6 py-3  text-[#00df9a] hover:bg-gray-900'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics