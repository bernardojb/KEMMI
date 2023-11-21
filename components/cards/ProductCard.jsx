'use client'
import React, { useState } from 'react'
import Image from 'next/image'


const ProductCard = ({ title, image, onClick }) => {
  return (
    <button onClick={onClick} className='w-full group'>
      <div className='flex flex-col'>
        <div className='bg-medicine-image bg-center bg-cover bg-no-repeat h-[375px] w-auto rounded-[28px] relative mb-6 group-hover:rounded-lg group-hover:-translate-y-1.5 transition-all duration-600 ease-out'>
          <div className='absolute rounded-full right-8 top-8 h-[34px] w-[58px] flex justify-center items-center bg-footer-text-hover group-hover:bg-white transition-all duration-200 ease-out'>
            <Image src="/assets/icons/general/plus.svg" width={24} height={24} alt="Open Card Icon" className='brightness-[2000%] group-hover:brightness-[0%] transition-all duration-200 ease-out' />
          </div>
        </div>
        <h1 className='content-primary text-md sm:text-lg group-hover:brightness-[280%] transition-all duration-200 ease-out'>{title}</h1>
      </div>
    </button>
  )
}

export default ProductCard