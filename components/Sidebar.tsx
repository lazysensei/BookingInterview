import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEdit, FaHome, FaThLarge, FaHeart, FaTicketAlt, FaCog, FaAngleRight } from 'react-icons/fa'
const Sidebar = () => {
  return (
    <div className='sidebar bg-white fixed top-0 bottom-0 lg:left-0 left-[-328px] duration-1000p-2 w-[215px] overflow-y-auto h-screen z-10 lg:z-0 rounded-r-2xl' >
        <div className='flex flex-col  items-center py-12 px-4' >
            <div className='flex flex-col items-center' >
                <p className='font-bold text-xl text-[#2d3250] mb-[40px]'>Mima<span className='text-gray-500' >Booking</span></p>
                <div className='rounded-full h-[110px] w-[110px] bg-gray-100 flex items-center justify-center border border-[#2d3250] relative ' >
                    <Image src='/profile.png' width={100} height={100} alt='profile' className='rounded-full' />
                    <div className='absolute bg-[#2d3250] h-[30px] w-[30px] rounded-full bottom-[-15px] flex items-center justify-center' >
                        <FaEdit className='text-white text-[15px]' />
                    </div>
                </div>
                <p className='mt-[30px] font-bold text-gray-500 text-lg' >ilia ijan</p>
            </div>
            <div className='mt-[130px]' >
                <Link href="/" className='flex flex-row gap-4 items-center mb-[10px]' >
                    <FaHome className='' />
                    <p className='' >Dashboard</p>
                </Link>
                <Link href="/" className='flex flex-row gap-4 items-center mb-[10px]' >
                    <FaThLarge className='' />
                    <p className='' >Explore City</p>
                </Link>
                <Link href="/" className='flex flex-row gap-4 items-center mb-[10px]' >
                    <FaTicketAlt className='' />
                    <p className='' >Ticket</p>
                </Link>
                <Link href="/" className='flex flex-row gap-4 items-center mb-[10px]' >
                    <FaHeart className='' />
                    <p className='' >Favourite</p>
                </Link>
                <Link href="/" className='flex flex-row gap-4 items-center mb-[10px]' >
                    <FaCog className='' />
                    <p className='' >Settings</p>
                </Link>                                                              
            </div>
            <div className='mt-[200px]' >
                <Link href="/" className='flex flex-row gap-4 items-center mb-[10px]' >
                    <div className='border border-[#2d3250] h-[20px] w-[20px] rounded-full flex items-center justify-center' >
                        <FaAngleRight className='text-[#2d3250] text-[10px]' />
                    </div>
                    <p className='' >Log Out</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar