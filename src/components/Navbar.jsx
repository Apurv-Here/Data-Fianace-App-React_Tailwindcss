import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='bg-black  flex justify-between items-center  h-20 w-full px-4 md:px-20 mx-auto sticky top-0 z-10'>
            <h1 className='text-3xl font-bold text-[#00df9a] m-4'>DATA.</h1>
            <div><ul className=' hidden lg:flex'>
                <a href="/"><li className='p-4 hover:text-gray-500 text-xl'>Home</li></a>
                <a href="/"><li className='p-4 hover:text-gray-500 text-xl'>Company</li></a>
                <a href="/"><li className='p-4 hover:text-gray-500 text-xl'>Resources</li></a>
                <a href="/"><li className='p-4 hover:text-gray-500 text-xl'>About</li></a>
                <a href="/"><li className='p-4 hover:text-gray-500 text-xl'>Contact</li></a>
            </ul></div>
            <div onClick={handleNav} className='block lg:hidden'>
                { !nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                
            </div>
            <div className={ !nav ? 'bg-gay-600 fixed left-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 lg:hidden lg:invisible' : 'fixed left-[-100%] lg:hidden lg:invisible'}>

                <ul className='uppercase p-4'>
                    <a href="/"><li className='p-4 border-b border-gray-600 text-xl'>Home</li></a>
                    <a href="/"><li className='p-4 border-b border-gray-600 text-xl'>Company</li></a>
                    <a href="/"><li className='p-4 border-b border-gray-600 text-xl'>Resources</li></a>
                    <a href="/"><li className='p-4 border-b border-gray-600 text-xl'>About</li></a>
                    <a href="/"><li className='p-4 border-b border-gray-600 text-xl'>Contact</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar