import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const DefaultButton = ({ href, text, style, icon }) => {
    return (
        <Link href={href} className='whitespace-nowrap w-fit'>
            <div className={`py-4 px-7 rounded-[18px] ${style} w-fit flex flex-row flex-nowrap justify-center items-center`}>
                <h1 className=' button-default font-neue-semibold text-base lg:text-lg pr-[10px]'>
                    {text}
                </h1>
                <Image className={icon} src="/assets/icons/general/chevron.svg" width="14" height="14" alt="" />
            </div>
        </Link>
    )
}

export default DefaultButton