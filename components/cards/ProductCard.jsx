import React from 'react'
import Image from 'next/image'

const ProductCard = ({title, image}) => {
  return (
    <div className='flex flex-col'>
        <div className='bg-placeholder h-[375px] rounded-[28px] relative mb-6'>
            <div className='absolute rounded-full right-8 top-8 h-[34px] w-[58px] flex justify-center items-center bg-footer-text-hover'>
                <Image src="/assets/icons/general/plus.svg" width={24} height={24} alt="" className='brightness-[2000%]'/>
            </div>
        </div>
        <h1 className='content-primary text-lg'>{title}</h1>
    </div>
  )
}

export default ProductCard