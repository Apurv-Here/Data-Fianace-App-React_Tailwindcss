import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto'>
            <h1 className='text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <div><ul className=' hidden lg:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul></div>
            <div onClick={handleNav} className='block lg:hidden'>
                { !nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                
            </div>
            <div className={ !nav ? 'bg-gay-600 fixed left-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 lg:hidden lg:invisible' : 'fixed left-[-100%] lg:hidden lg:invisible'}>

                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar