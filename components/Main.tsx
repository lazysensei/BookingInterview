import React from 'react'
import  Header  from './Header'
import Image from 'next/image'
import { FaMapMarkerAlt, FaAngleDown, FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import CardCarousel from './Cardcarousel';
import { placesItems, cardItems } from '@/constants';
import Card from './Card';

const Main = () => {
  return (
    <div className='lg:ms-[215px] pb-[50px]'>
        <div className='px-8' >
            <Header />
            <div className='mt-[30px]' >
                <div className='relative' >
                    <Image src="/bg1.png" width={0} height={50} sizes='100vw' alt="bg" className='w-full h-auto object-contain rounded-xl' />
                    <div className='absolute bg-white ps-8 pe-4 py-6 rounded-xl left-[155px] bottom-[-65px]' >
                        <div className='flex flex-row' >
                            <div className='flex flex-row items-center px-4 py-2' >
                                <FaMapMarkerAlt className="text-gray-300 text-[20px]" />
                                <p className='ml-4 text-gray-400' >Where are you going ?</p>
                                <FaAngleDown className="ml-16 text-[#2d3250] text-[20px]" />
                            </div>
                            <div className='flex flex-row items-center px-4 py-2 border border-x-[#2d3250] border-y-0' >
                                <FaRegCalendarAlt className="text-gray-300 text-[20px]" />
                                <p className='ml-4 text-gray-400' >Check-in-Date</p>
                                <FaAngleDown className="ml-16 text-[#2d3250] text-[20px]" />
                            </div>
                            <div className='flex flex-row items-center px-4 py-2' >
                                <FaUser className="text-[#2d3250] text-[20px]" />
                                <p className='ml-4' >3 Adults</p>
                                <FaAngleDown className="ml-16 text-[#2d3250] text-[20px]" />
                            </div>
                            <div className='ml-8 bg-[#4a4e73] px-8 py-[7px] rounded-lg' >
                                <p className="text-white text-[18px]" >Search</p>
                            </div>                                                       
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[90px]' >
                <CardCarousel cards={placesItems} />
            </div>
            <div className='mt-[90px]' >
                <div className='flex flex-row justify-between mb-[10px]' >
                    <p className='text-[20px] font-medium text-[#2d3250]' >Best Offers</p>
                    <p className='text-[16px] font-medium text-[#2d3250]' >View All</p>
                </div>
                <div className='flex flex-row gap-4' >
                    {cardItems.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Main