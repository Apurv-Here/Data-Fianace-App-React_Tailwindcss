import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithub,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className='mx-4 lg:mx-0 lg:px-2'>
            <h1 className='text-3xl font-bold text-[#00df9a] '>DATA.</h1>
            <p className='py-4 '>With the proliferation of data in organizations, added emphasis has been placed on ensuring data quality by reducing duplication and guaranteeing the most accurate, current records are used.</p>
            <div className='flex md:w-[75%] my-6 justify-between '>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithub size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between flex-col lg:flex-row mt-6 pl-4 pr-14 '>
            <div className='my-6 mt-0 lg:mx-0 lg:my-0'>
                <h6 className='font-medium text-gray-400 underline'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm '>Analytics</li>
                    <li className='py-2 text-sm '>Marketing</li>
                    <li className='py-2 text-sm '>Commerce</li>
                    <li className='py-2 text-sm '>Insights</li>
                </ul>
            </div>
            <div className='my-6  lg:mx-0 lg:my-0'>
                <h6 className='font-medium text-gray-400 underline'>Support</h6>
                <ul>
                    <li className='py-2 text-sm '>Pricing</li>
                    <li className='py-2 text-sm '>Documentation</li>
                    <li className='py-2 text-sm '>Guides</li>
                    <li className='py-2 text-sm '>API Status</li>
                </ul>
            </div>
            <div className='my-6 lg:mx-0 lg:my-0'>
                <h6 className='font-medium text-gray-400 underline'>Company</h6>
                <ul>
                    <li className='py-2 text-sm '>About</li>
                    <li className='py-2 text-sm '>Blogs</li>
                    <li className='py-2 text-sm '>Jobs</li>
                    <li className='py-2 text-sm '>Press</li>
                    <li className='py-2 text-sm '>Careers</li>
                </ul>
            </div>
            <div className='my-6 lg:mx-0 lg:my-0'>
                <h6 className='font-medium text-gray-400 underline'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm '>Claims</li>
                    <li className='py-2 text-sm '>Policy</li>
                    <li className='py-2 text-sm '>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer