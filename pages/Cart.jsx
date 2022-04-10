import React, { useState } from 'react'
import Image from 'next/image'
import {FaTrash} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../redux/cartSlice'

export default function Cart() {
    const cart = useSelector(state => state.cart);
  return (
    <div className='w-full min-h-[85vh] flex flex-col items-center pt-4 lg:pt-16'>
        <h1 className='font-bold text-[2rem] sm:text-[2.5rem] mb-4'>Your <span className='text-[rgb(153,43,17)]'>Cart</span></h1>
        <hr className='w-[90%] min-w-[330px] border-[1px]'/>
        <div className="flex w-full sm:p-10 items-center sm:items-start flex-col lg:flex-row min-w-[360px]">
            <div className="flex flex-col px-4 flex-1 sm:w-full h-fit mx-auto my-10 sm:p-10 max-h-[600px] max-w-[800px] overflow-y-auto transition-all duration-500">
                {cart.products.length > 0 ?  cart.products.map((product, index) => {
                    return(
                        <div className="flex flex-col w-full" key={index}>
                            <CartItem key={product.cartIndex} cartData={product.cartInfo} cartIndex={product.cartIndex}/>
                            {cart.products.length === (index + 1) ? null : <hr className='border-[1px]' />}
                        </div>
                    )
                })
                : <EmptyCart />}
                
            </div>
            <div className="flex flex-[0.5] max-w-[400px] min-w-[330px] h-[400px] my-auto flex-col">
                <div className="flex flex-col border-[1px] border-gray-500 p-4 rounded-2xl bg-white">
                    <h1 className='text-[1.3rem] font-bold mb-4'>Cart Total</h1>
                    <div className="flex w-full justify-between">
                        <p>Subtotal</p>
                        <p>₦ {cart.total}</p>
                    </div>
                    <hr className='w-full my-2'/>
                    <div className="flex w-full justify-between">
                        <p>Total</p>
                        <p>₦ {cart.total}</p>
                    </div>
                </div>
                <button className='py-3 my-4 rounded-xl bg-[rgb(153,43,17)] text-white hover:bg-[rgb(108,29,12)] hover:scale-105 transition-all duration-500'>Proceed to Checkout</button>
            </div>
        </div>
    </div>
  )
}


const EmptyCart = () => {
    return(
        <div className="flex w-full h-[20vh] bg-gray-100 border-2 rounded-xl border-gray-200 text-gray-400 items-center justify-center text-[1.5rem] tracking-widest">
            <h1>NO ITEMS IN THE CART</h1>
        </div>
    )
}


const CartItem = ({cartData, cartIndex}) => {
    
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        const cont = e.currentTarget.parentElement;
        cont.classList.add('del-item');
        console.log(cont);

        setTimeout(() => {
            dispatch(removeProduct({...cartData, cartIndex}));
        }, 200);
    }

    return(
        <div className="flex items-center w-full h-[25vh] sm:min-h-[130px] min-h-[100px] max-h-[130px] my-4 rounded-t-3xl bg-slate-50 min-w-[330px] transition-all duration-700">
            <div className="flex flex-1 h-full items-center rounded-bl-3xl rounded-tl-3xl">
                <div className="flex items-center justify-center relative h-full flex-[0.4] min-w-[70px] max-w-[100px] bg-cover bg-center bg-no-repeat rounded-tl-3xl" style={{backgroundImage: `url('${cartData.imgs[0]}')`}}></div>
                <div className="flex max-w-[200px] flex-col h-full w-fit justify-center p-4  min-w-[80px]">
                    <h1 className='text-[0.7rem] sm:text-[1rem] lg:text-[1.2rem] font-bold'>{cartData.title}</h1>
                    {cartData.Large > 0 ? <p>{`Large: ${cartData.Large}`}</p> : null}
                    {cartData.Regular > 0 ? <p>{`Regular: ${cartData.Regular}`}</p> : null}
                </div>
                <div className="flex h-fit  mx-4 xl:mx-auto flex-[0.3] justify-around items-center rounded-md sm:rounded-2xl">
                    <h1 className='text-[0.5rem] sm:text-[0.8rem] lg:text-[1rem] font-semibold'>qty : {cartData.qty}</h1>
                </div>
                <div className='font-bold flex-[0.5] flex items-center text-center justify-center text-[0.8rem] lg:text-[1.2rem] mx-2 sm:mx-auto p-2'>
                    <h1>Total: ₦{cartData.subTotal}</h1>
                </div>
            </div>
            <div className="sm:ml-2 lg:mx-0 min-w-[30px] flex items-center justify-center flex-[0.1] h-full bg-white rounded-tr-3xl hover:bg-[rgba(0,0,0,0.01)] transition-all duration-300 group cursor-pointer" onClick={handleDelete}>
                <FaTrash className='text-[1.2rem] sm:text-[1.5rem] text-[rgb(153,43,17)] group-hover:text-red-500 transition-all duration-300'/>
            </div>
        </div>
    )
}
