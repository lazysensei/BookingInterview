import React from 'react'
import { FaSearch, FaBell } from 'react-icons/fa';
const Header = () => {
  return (
        <div className='py-[20px] px-[20px] bg-white rounded-lg flex flex-row justify-between items-center' >
            <div className='relative'>
                <input type='text' placeholder='Search any thing,...' className='w-[300px] border border-gray-200 py-[6px] rounded-xl ps-[40px] text-base' />
                <FaSearch className='absolute top-[13px] left-[17px]' />
            </div>
            <div className='flex flex-row gap-12 items-center' >
                <p className='text-lg' >Saturday, may 3, 2023</p>
                <div className='relative' >
                    <div className='border border-gray-200 w-[30px] h-[30px] rounded-lg flex items-center justify-center' >
                        <FaBell className='text-gray-500' />
                    </div>
                    <div className='absolute bg-red-500 h-[20px] w-[20px] rounded-full top-[-5px] left-[-25px]  flex items-center justify-center' >
                        <p className='text-white text-sm' >3</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header