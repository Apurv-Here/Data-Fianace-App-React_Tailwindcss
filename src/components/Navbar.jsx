import React from 'react';
import { AiOutlineCLose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    return (
        <div className='flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto'>
            <ul className=' hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div>
                <AiOutlineMenu size={30} />
            </div>
            <div className='bg-gay-600 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900'>
            <h1 className='text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

                <ul className='pt-24 uppercase'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Company</li>
                    <li className='p-4'>Resources</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar