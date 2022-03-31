import React from 'react'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import Image from 'next/image'
import { useState} from 'react'

export default function Featured() {
    const [slideNumber, setSlideNumber] = useState(0)
    const handleArrow = (direction) => {
        if(direction === 'left'){
            setSlideNumber(slideNumber != 0 ? slideNumber-1 : 2)  
        }
        if(direction === 'right'){
            setSlideNumber(slideNumber != 2 ? slideNumber+1 : 0)   
        }
    }
    const images = [
        '/images/bannerslide1.jpg',
        '/images/bannerslide2.jpg',
        '/images/mainbackdrop.jpg'
    ]

  return (
    <div className="w-full h-[85vh] overflow-hidden text-white relative">
        <FaAngleLeft className='text-[4rem] absolute z-30 top-[45%] left-[1%] cursor-pointer' onClick={()=>handleArrow('left')}/>
        <div className="flex relative w-[300vw] h-full bg-red-400">
            {images.map((img, index) => {
                return(
                    <div key={index} className="flex w-screen relative h-full transition-all duration-[1.5s] ease-in-out" style={{transform: `translateX(${-100*slideNumber}vw)`}}>
                        <div className="flex w-full h-full absolute top-0 right-0 bg-cover bg-center bg-no-repeat darken" style={{backgroundImage: `url('${img}')`}}></div>
                    </div>
                )
            })}
            <div className="flex items-center justify-center w-screen absolute bottom-0 left-0 h-[50px]">
                {images.map((img, i) => {
                    return <div key={i} id={i} className="h-[5px] w-[5px] rounded-full mx-2" style={{backgroundColor: slideNumber === i ? 'white' : 'rgba(255,255,255,0.5)'}}></div>
                })}
            </div>
        </div>
        <FaAngleRight className='text-[4rem] z-30 absolute top-[45%] right-[1%] cursor-pointer' onClick={()=>handleArrow('right')}/>
    </div>
  )
}
