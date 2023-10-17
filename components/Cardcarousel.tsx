"use client"
import { useState } from "react";
import Image from "next/image";
import {FaStar} from 'react-icons/fa'
import { CardCarouselProps } from "@/types";



const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerPage = 2.5;
  const totalSlides = Math.ceil(cards.length / cardsPerPage);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const translateValue = `-${currentIndex * (100 / cardsPerPage)}%`;

  return (
    <div>
        <div className="flex justify-between mb-[20px]" >
            <p className='text-[20px] font-medium text-[#2d3250]' >Trending destinations</p>
            <div className="flex flex-row gap-4" >
                <button
                className={`${
                    currentIndex === 0 ? "text-gray-600" : "bg-[#2d3250] text-white"
                } transform -translate-y-1/2 text-xl  border border-gray-200 w-[30px] h-[30px] rounded-lg flex items-center justify-center`}
                onClick={prevSlide}
                >
                &lt;
                </button>
                <button
                className={`${
                    currentIndex === totalSlides - 1 ? "text-gray-600" : "bg-[#2d3250] text-white"
                } top-1/2 transform -translate-y-1/2 text-xl text-gray-600 border border-gray-200 w-[30px] h-[30px] rounded-lg flex items-center justify-center`}
                onClick={nextSlide}
                >
                &gt;
                </button>                 
            </div>
            
        </div>
        <div className="relative w-full overflow-hidden">
        <div
            className="w-full flex transition-transform duration-300"
            style={{ transform: `translateX(${translateValue})` }}
        >
            {cards.map((card, index) => (
            <div key={index} className="p-4">
                <div className="bg-white p-4 border rounded-lg w-[450px]">
                    <div className="flex flex-row gap-6" >
                        <Image src={`${card.img}`} alt="Card Image" width={0} height={0} className="object-fill rounded-lg w-[160px]" />
                        <div className="w-full" >
                            <div className="flex flex-row justify-between" >
                                <h2 className="text-lg font-semibold">{card.title}</h2>
                                <div className="flex flex-row items-center gap-1" >
                                    <FaStar className="text-yellow-300 text-[14px]" />
                                    <p className="text-[14px]" >{card.rating}</p>
                                </div>
                            </div>
                            <p className="text-gray-400">{card.description}</p>
                            <p className="text-[18px] font-bold mt-[20px]" >${card.price}</p>                      
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
            <button
                key={index}
                className={`${
                currentIndex === index
                    ? "bg-[#2d3250] text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                } h-[10px] w-[10px] rounded-full`}
                onClick={() => setCurrentIndex(index)}
            >
            </button>
            ))}
        </div>      
        </div>        
    </div>
  );
};

export default CardCarousel;
