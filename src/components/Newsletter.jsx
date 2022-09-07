import React from 'react';

function Newsletter() {
  return (
    <div className='w-full py-16 '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 lg:flex flex-col justify-center '>
                <h1 className='ml-6 p-2 text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tricks &#38; tips to optimize your flow?</h1>
                <p className='ml-6 p-2'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4 lg:flex flex-col justify-center'>
                <div className='p-2 '>
                    <input className='mx-6 mr-10 lg:mx-0 p-3 flex w-[70vw] lg:w-full rounded-md text-black ' type="email" placeholder='Enter Email' />
                    <button className=' bg-[#00df9a] w-[160px] rounded-md font-bold mx-auto my-6 py-3  text-black hover:bg-green-200 ml-6 lg:mx-0'>Notify Me</button>
                </div>
                <p className='my-2 mt-0 mx-6 p-2 lg:mx-0 lg:pr-10'>We care about the protection of your data.<p>Read our <a href="/"><span className='text-[#00df9a] underline' > Privacy Policy</span></a></p>  </p>
            </div>
        </div>

    </div>
  )
}

export default Newsletter