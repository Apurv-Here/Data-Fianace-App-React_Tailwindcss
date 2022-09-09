import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

function CardSection() {
  return (
    <div className='w-full py-40 px-4 bg-white '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* Card-1 starts here */}
        <div className='w-full text-black shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="single" />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <p className='text-center text-4xl font-bold'>$299</p>
          <div className='text-center font-medium '>
            <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
            <p className='py-2 border-b mx-8 '>2 Granted USer</p>
            <p className='py-2 border-b mx-8 '>Send up to 4 GB</p>
          </div>
          <button className=' bg-[#00df9a] w-[160px] rounded-md font-bold mx-auto my-6 py-3  text-black hover:bg-green-200  '>Start Trail</button>
        </div>
        {/* Card-1 ends here */}

        {/* Card-2 starts here */}
        <div className='w-full text-black shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent  ' src={Single} alt="single" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium '>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8 '>1 Granted USer</p>
            <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
          </div>
          <button className=' bg-black w-[160px] rounded-md font-bold mx-auto my-6 py-3  text-[#00df9a] hover:bg-green-200  '>Start Trail</button>
        </div>
        {/* Card-2 ends here */}

        {/* Card-3 starts here */}
        <div className='w-full text-black shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="single" />
          <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
          <p className='text-center text-4xl font-bold'>$399</p>
          <div className='text-center font-medium '>
            <p className='py-2 border-b mx-8 mt-8'>2000 GB Storage</p>
            <p className='py-2 border-b mx-8 '>3 Granted USer</p>
            <p className='py-2 border-b mx-8 '>Send up to 8 GB</p>
          </div>
          <button className=' bg-[#00df9a] w-[160px] rounded-md font-bold mx-auto my-6 py-3  text-black hover:bg-green-200  '>Start Trail</button>
        </div>
        {/* Card-3 ends here */}

      </div>
    </div>
  )
}

export default CardSection