import React from 'react'
import Image from 'next/image'
import {FaTrash} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
  return (
    <div className='w-full min-h-[85vh] flex flex-col items-center pt-4 lg:pt-16'>
        <h1 className='font-bold text-[2rem] sm:text-[2.5rem] mb-4'>Your <span className='text-[rgb(153,43,17)]'>Cart</span></h1>
        <hr className='w-[90%] min-w-[330px] border-[1px]'/>
        <div className="flex w-full sm:p-10 items-center sm:items-start flex-col lg:flex-row min-w-[360px]">
            <div className="flex flex-col px-4 flex-1 sm:w-full h-fit mx-auto my-10 sm:p-10 max-h-[600px] max-w-[800px] overflow-y-auto">
                {cart.products.map((product) => {
                    return(
                        <CartItem key={product._id} productData={product}/>
                    )
                })}
                
            </div>
            <div className="flex flex-[0.5] max-w-[400px] min-w-[330px] h-[400px] my-auto flex-col">
                <div className="flex flex-col shadow-[0_20px_30px_rgba(0,0,0,0.1)] p-4 rounded-2xl bg-white">
                    <h1 className='text-[1.3rem] font-bold mb-4'>Cart Total</h1>
                    <div className="flex w-full justify-between">
                        <p>Subtotal</p>
                        <p>${cart.total}</p>
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


const CartItem = ({productData}) => {
    return(
        <div className="flex items-center w-full h-[25vh] sm:min-h-[130px] min-h-[100px] max-h-[130px] my-4 rounded-3xl bg-gradient-to-r from-white to-[rgba(255,237,233,0.44)] lg:shadow-[0_10px_40px_rgba(0,0,0,0.1)] min-w-[330px]">
            <div className="flex flex-1 h-full items-center rounded-bl-3xl rounded-tl-3xl">
                <div className="flex items-center justify-center relative h-full flex-[0.4] min-w-[70px] bg-cover bg-center bg-no-repeat rounded-bl-3xl rounded-tl-3xl  drop-shadow-2xl" style={{backgroundImage: `url('${productData.imgs[0]}')`}}>
                    {/* <Image src={productData.imgs[0]} layout='fill' objectFit='contain' alt=''/> */}
                </div>
                <div className="flex max-w-[300px] flex-col h-full flex-[1] items-center justify-center p-2 text-center min-w-[80px]">
                    <h1 className='text-[0.7rem] sm:text-[1.2rem] lg:text-[1.5rem] font-bold'>{productData.title}</h1>
                    <p className='text-gray-600 text-[0.6rem] sm:text-[0.8rem] lg:text-[1.1rem]'>{productData.desc}</p>
                </div>
                <div className="flex h-fit mx-2 xl:mx-auto flex-[0.2] justify-around items-center rounded-md sm:rounded-2xl">
                    <h1 className='text-[0.5rem] font-semibold'>qty : {productData.quantity}</h1>
                </div>
                <h1 className='font-bold flex-[0.5] flex items-center justify-center text-[0.8rem] lg:text-[1.2rem] mx-2 sm:mx-auto p-2'>Total: ₦{productData.price * productData.quantity}</h1>
            </div>
            <div className="sm:ml-2 lg:mx-0 min-w-[30px] flex items-center justify-center flex-[0.1] h-full bg-white rounded-br-3xl rounded-tr-3xl hover:bg-[rgba(0,0,0,0.01)] transition-all duration-300 group cursor-pointer">
                <FaTrash className='text-[1.2rem] sm:text-[1.5rem] text-[rgb(153,43,17)] group-hover:text-red-500 transition-all duration-300'/>
            </div>
        </div>
    )
}
