import React from 'react'
import Image from 'next/image'
import {FaTrash} from 'react-icons/fa'

export default function Cart() {
  return (
    <div className='w-full min-h-[85vh] flex flex-col items-center pt-4 lg:pt-16'>
        <h1 className='font-bold text-[2rem] sm:text-[2.5rem] mb-4'>Your <span className='text-[rgb(153,43,17)]'>Cart</span></h1>
        <hr className='w-[90%] min-w-[330px] border-[1px]'/>
        <div className="flex w-full sm:p-10 items-center sm:items-start flex-col lg:flex-row min-w-[360px]">
            <div className="flex flex-col flex-1 sm:w-full h-fit mx-auto my-10 sm:p-10 max-h-[600px] max-w-[800px] overflow-y-auto">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <div className="flex flex-[0.5] max-w-[400px] min-w-[330px] h-[400px] my-auto flex-col">
                <div className="flex flex-col shadow-[0_20px_30px_rgba(0,0,0,0.1)] p-4 rounded-2xl bg-white">
                    <h1 className='text-[1.3rem] font-bold mb-4'>Cart Total</h1>
                    <div className="flex w-full justify-between">
                        <p>Subtotal</p>
                        <p>$0.00</p>
                    </div>
                    <hr className='w-full my-2'/>
                    <div className="flex w-full justify-between">
                        <p>Total</p>
                        <p>$0.00</p>
                    </div>
                </div>
                <button className='py-3 my-4 rounded-xl bg-[rgb(153,43,17)] text-white hover:bg-[rgb(108,29,12)] hover:scale-105 transition-all duration-500'>Proceed to Checkout</button>
            </div>
        </div>
    </div>
  )
}


const CartItem = (props) => {
    return(
        <div className="flex items-center w-full h-[25vh] sm:min-h-[130px] min-h-[150px] max-h-[130px] my-2 sm:max-h-[180px] rounded-3xl bg-gradient-to-r from-white to-[rgba(255,237,233,0.1)] lg:shadow-[0_10px_40px_rgba(0,0,0,0.1)] min-w-[330px]">
            <div className="flex flex-1 h-full items-center rounded-bl-3xl rounded-tl-3xl">
                <div className="flex items-center justify-center relative h-full w-[60px] sm:w-[100px] lg:mx-auto xl:w-[120px]  drop-shadow-2xl">
                    <Image src='/images/cartimgonenobg.png' layout='fill' objectFit='contain' alt=''/>
                </div>
                <div className="flex flex-col h-full w-fit items-center justify-center p-2 text-center min-w-[80px]">
                    <h1 className='text-[0.8rem] sm:text-[1.2rem] lg:text-[1.5rem] font-bold'>Item Name</h1>
                    <p className='text-gray-600 text-[0.7rem] sm:text-[0.8rem] lg:text-[1.1rem]'>Item Highlight</p>
                </div>
                <h1 className='font-bold flex-[0.5] flex items-center justify-center text-[0.8rem] lg:text-[1.2rem] mx-2 sm:mx-auto p-2 min-w-[60px]'>$0.00</h1>
                <div className="flex  bg-[rgb(153,43,17)] h-fit mx-2 xl:mx-auto text-white justify-around items-center rounded-md sm:rounded-2xl lg:shadow-[0_15px_20px_rgba(153,43,17,0.2)]">
                    <button className='font-bold text-[1.2rem] sm:text-[1.8rem] lg:text-[2.2rem] mb-1 px-2  h-fit lg:px-4'>-</button>
                    <input className='px-[6px] text-[0.8rem] sm:text-[1rem] sm:px-[11px] sm:mx-4 sm:py-[2px] font-bold w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-[rgba(255,255,255,0.2)] rounded-full focus:outline-none' type="text" value='1' onChange={()=>{}} />
                    <button className='font-bold text-[1.2rem] sm:text-[1.6rem] lg:text-[2rem] h-full px-2 lg:px-4'>+</button>
                </div>
            </div>
            <div className="sm:ml-2 lg:mx-0 min-w-[30px] flex items-center justify-center flex-[0.1] h-full bg-white rounded-br-3xl rounded-tr-3xl hover:bg-[rgba(0,0,0,0.01)] transition-all duration-300 group cursor-pointer">
                <FaTrash className='text-[1.2rem] sm:text-[1.5rem] text-[rgb(153,43,17)] group-hover:text-red-500 transition-all duration-300'/>
            </div>
        </div>
    )
}
