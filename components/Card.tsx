import React from 'react'
import Image from 'next/image'
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa'
import { Card } from '@/types'

const Card:React.FC<Card> = ({img, title, location, price}) => {
  return (
    <div className='w-[220px] bg-white px-[10px] py-[10px] rounded-lg'>
        <Image src={`${img}`} alt='card image' width={0} height={0} className="object-fill rounded-lg w-[200px] h-[130px] mb-[10px]" />
        <p className='text-[#2d3250] text-[16px] mb-[5px]' >{title}</p>
        <div className='flex flex-row items-center mb-[5px]' >
            <FaMapMarkerAlt className="text-gray-300 text-[12px]" />
            <p className='ml-2 text-[12px] text-gray-400' >{location}</p>
        </div>
        <div className='flex flex-row items-center justify-between mb-[5px]' >
            <p className='text-[12px] text-gray-400' >${price} / night</p>
            <div className='border border-gray-200 w-[20px] h-[20px] rounded-lg flex items-center justify-center' >
                <FaHeart className='text-gray-500 text-[12px]' />
            </div>            
        </div>        
    </div>
  )
}

export default Card