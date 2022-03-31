import React from 'react'
import Products from '../../../data/Products'
import { useState } from 'react';

const [ProductInfo] = Products;



const removeTempBg = (e) => {

}

const Product = () => {
  const handleTempBg = (e) => {
    const targetBg = e.target.style.backgroundImage
    setCurrentDisplayBg(targetBg) 
  }
  const [activeBtn, setActiveBtn] = useState(true)
  const [currentDisplayBg, setCurrentDisplayBg] = useState(`url('${ProductInfo.productImages[0]}')`)
  return(
    <div className="flex w-full items-center justify-center h-[85vh] bg-blue-300">
      <div className="flex flex-col w-[80%] h-full bg-white pt-10">
        <div className="flex p-2 w-full h-fit">
          <h1>home/soups/chicken-soup</h1>
        </div>
        <div className="flex w-[90%] h-full ml-auto flex-wrap">
          <div className="flex flex-col h-full min-w-[300px] p-4 flex-[0.7]">
            <div className="bg-center bg-cover bg-no-repeat w-full h-[80%] transition-all duration-500 ease-in-out" style={{backgroundImage: currentDisplayBg}}></div>
            <div className="flex w-full h-[15%] items-center justify-center">
              <DisplayButton bg={`url('${ProductInfo.productImages[0]}')`} mouseOver={handleTempBg} cbg={currentDisplayBg}/>
              <DisplayButton bg={`url('${ProductInfo.productImages[1]}')`} mouseOver={handleTempBg} cbg={currentDisplayBg}/>
            </div>
          </div>
          <div className="flex flex-col bg-purple-700 h-full min-w-[300px] flex-[1]">

          </div>
        </div>
      </div>
    </div>
  )
}

const DisplayButton = (props) => {
  return(
    <div className="bg-center mx-2 bg-cover bg-no-repeat h-[30px] w-[30px] border-[0.5px] border-transparent transition-all duration-500 ease-in-out hover:border-gray-500 hover:opacity-100 hover:scale-125 group" style={{backgroundImage: props.bg}} onMouseOver={props.mouseOver}></div>
  )
}

export default Product
