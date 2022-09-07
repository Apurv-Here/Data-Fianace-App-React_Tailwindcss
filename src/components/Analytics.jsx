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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ipsum officia doloribus quibusdam unde inventore iste fugit, repudiandae, vero velit quod facilis aliquid ipsa. Eaque nemo eum laborum itaque architecto!</p>
                <button className='bg-black w-[160px] rounded-md font-semibold mx-auto md:mx-0  my-6 py-3  text-[#00df9a] hover:bg-gray-900'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics