import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ChevronPill = ({href}) => {
    return (
        <Link href={href} className='whitespace-nowrap w-fit'>
            <div className={`py-[8px] px-[14px] rounded-[18px] w-fit flex flex-row flex-nowrap justify-center items-center bg-text-primary`}>
                <Image className="brightness-[2000%]" src="/assets/icons/general/chevron.svg" width="14" height="14" alt="" />
            </div>
        </Link>
    )
}

export default ChevronPill