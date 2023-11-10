'use client'
import React, { useState } from 'react'
import Image from 'next/image'


const ProductCard = ({ title, image, onClick }) => {
  return (
    <>
    <button onClick={onClick} className='w-full'>
      <div className='flex flex-col'>
        <div className='bg-placeholder h-[375px] rounded-[28px] relative mb-6'>
          <div className='absolute rounded-full right-8 top-8 h-[34px] w-[58px] flex justify-center items-center bg-footer-text-hover'>
            <Image src="/assets/icons/general/plus.svg" width={24} height={24} alt="" className='brightness-[2000%]' />
          </div>
        </div>
        <h1 className='content-primary text-md sm:text-lg'>{title}</h1>
      </div>
    </button>
    </>
  )
}

export default ProductCard