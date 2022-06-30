/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';

import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
const Navbar = () => {

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const ref = useRef()

  return (

    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
      <div className="logo mx-5">
        <Link href={'/'}>
          <a><Image width={220} height={40} src="/logo.webp" alt="" /></a>
        </Link>

      </div>
      <div className="nav">
        <ul className='flex items-center space-x-6 font-bold md:text-md'>
          <Link href={'/tshirts'}><a href="#"><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a href="#"><li>Hoodies</li></a></Link>
          <Link href={'/mugs'}><a href="#"><li>Mugs</li></a></Link>
          <Link href={'/stickers'}><a href="#"><li>Stickers</li></a></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="absolute cursor-pointer cart right-0 top-4 mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-2xl' />
      </div>

      {/* SideBar */}
      <div ref={ref} className="z-10 w-72 h-full sideCart absolute top-0 right-0 px-8 py-10 bg-pink-100 transform transition-transform translate-x-full">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center justify-center w-1/3 text-sm'>
                <AiFillMinusCircle className={'cursor-pointer text-pink-500'} /><span className='mx-2'>1</span><AiFillPlusCircle className={'cursor-pointer text-pink-500'} />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center justify-center w-1/3 text-sm'>
                <AiFillMinusCircle className={'cursor-pointer text-pink-500'} /><span className='mx-2'>1</span><AiFillPlusCircle className={'cursor-pointer text-pink-500'} />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center justify-center w-1/3 text-sm'>
                <AiFillMinusCircle className={'cursor-pointer text-pink-500'} /><span className='mx-2'>1</span><AiFillPlusCircle className={'cursor-pointer text-pink-500'} />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center justify-center w-1/3 text-sm'>
                <AiFillMinusCircle className={'cursor-pointer text-pink-500'} /><span className='mx-2'>1</span><AiFillPlusCircle className={'cursor-pointer text-pink-500'} />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
              <div className='flex items-center justify-center w-1/3 text-sm'>
                <AiFillMinusCircle className={'cursor-pointer text-pink-500'} /><span className='mx-2'>1</span><AiFillPlusCircle className={'cursor-pointer text-pink-500'} />
              </div>
            </div>
          </li>
        </ol>

        {/* Buttons */}
        <div className="flex">
          <button className='flex text-white bg-pink-500 mr-2 border-0 py-2 px-2 focus:outline-none
        hover:bg-pink-600 rounded text-sm'><BsFillBagCheckFill className='m-1' /> Checkout</button>
          <button className='flex text-white bg-pink-500 mr-2 border-0 py-2 px-2 focus:outline-none
        hover:bg-pink-600 rounded text-sm'>Clear Cart</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar



