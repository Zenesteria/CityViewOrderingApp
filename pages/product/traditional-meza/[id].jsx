import React from 'react'
import Products from '../../../data/Products'
import { useState } from 'react';
import { useRouter } from 'next/router';
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
import Link from 'next/link';
import axios from 'axios';

const [ProductInfo] = Products;

const tags = ProductInfo.productTags.split(',')

const rating = Math.floor(ProductInfo.avgRating)



const Product = ({meza}) => {
  const router = useRouter();

  const handleTempBg = (e) => {
    const targetBg = e.target.style.backgroundImage
    setCurrentDisplayBg(targetBg) 
  }

  const [currentDisplayBg, setCurrentDisplayBg] = useState(`url('${meza.imgs[0]}')`)
  const [noOfItems,setNoOfItems] = useState(1)

  return(
    <div className="flex w-full items-center justify-center min-h-[85vh] h-fit">
      <div className="flex flex-col w-[80%] min-h-[70vh] h-fit bg-white pt-10">
        <div className="flex p-2 w-full h-fit">
          <h1>{router.pathname}</h1>
        </div>
        <div className="flex w-full min-h-[80vh] justify-center h-fit ml-auto flex-wrap">
          <div className="flex flex-col h-[80vh] max-h-[1000px] min-w-[360px] p-4 flex-[0.7]">
            <div className="bg-center bg-cover min-w-[330px] bg-no-repeat w-full h-[80%] transition-all duration-500 ease-in-out" style={{backgroundImage: currentDisplayBg}}></div>
            <div className="flex w-full h-[15%] items-center justify-center">
              <DisplayButton bg={`url('${meza.imgs[0]}')`} mouseOver={handleTempBg}/>
              <DisplayButton bg={`url('${meza.imgs[1]}')`} mouseOver={handleTempBg}/>
            </div>
          </div>
          <div className="flex flex-col p-4 h-full min-w-[300px] flex-[1]">
            <h1 className='text-[2rem] font-bold mb-2'>{meza.title}</h1>
            <p className='text-[1.2rem] font-semibold italic mb-2'>Category: {meza.category}</p>
            {/* <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <BsStarFill className='min-w-[15px] z-10'/>
                </div>
                <Link href='/' passHref>
                  <a className=' underline text-gray-700'>View Ratings</a>
                </Link>
            </div> */}
            <div className="flex w-full h-fit my-4 flex-col">
                <h1>Description: </h1>
                <p className='max-w-[450px]'>
                  {meza.desc}
                </p>
            </div>
            <div className="flex items-center w-[80%] flex-wrap">
              <h1 className='text-[1.2rem] text-gray-500'>Highlights: </h1>
              {meza.tags.map((tag,i) => {
                  return(
                      <p className='m-2 border-[1px] rounded-md p-[2px] text-[0.7rem] min-w-[100px] flex items-center justify-center border-[rgb(153,43,17)] hover:bg-[rgb(153,43,17)] hover:text-white hover:scale-110 hover:font-bold transition-all duration-700' key={i}>{tag}</p>
                  )
              })}
            </div>
            <div className="flex flex-col w-fit my-4 p-2">
                <p className='font-bold text-[1.5rem]'>{`₦${meza.prices[0]}.00`}</p>
                <div className="flex h-fit w-fit my-2">
                  <input type="text" value={noOfItems} className='border-2 w-[70px]' onChange={()=>{}}/>
                  <button className='mx-2 text-white bg-[rgb(153,43,17)] p-2 hover:bg-[rgb(119,35,13)] transition-all duration-300'>Add to cart</button>
                </div>
            </div>
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

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/Products/meza/${params.id}`)
    return{
      props:{
        meza: res.data
      }
    }
}

export default Product
