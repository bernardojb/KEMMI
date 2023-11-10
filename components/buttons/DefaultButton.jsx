import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const DefaultButton = ({ href, text, style, icon }) => {
    return (
        <Link href={href} className='whitespace-nowrap w-fit group'>
            <div className={`pb-[16px] pt-[14px] px-7 rounded-[18px] ${style} w-fit flex flex-row flex-nowrap justify-center items-center]`}> 
            {/* group-hover:transition-all ease-out duration-500 group-hover:translate-x-[4px]  */}
                <h1 className='button-default font-neue-semibold text-base lg:text-lg pr-[10px]'>
                    {text}
                </h1>
                <Image className={`${icon} group-hover:transition-all ease-out duration-500 group-hover:invert`} src="/assets/icons/general/chevron.svg" width="14" height="14" alt="chevron"/>
            </div>
        </Link>
    )
}

export default DefaultButton