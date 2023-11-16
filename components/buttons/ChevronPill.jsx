import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ChevronPill = ({ href }) => {
    return (
        <Link href={href} className='whitespace-nowrap w-fit group'>
            <div className={`py-[8px] px-[14px] rounded-[18px] w-fit flex flex-row flex-nowrap justify-center items-center bg-text-primary 
            border border-gray-lighter            
            group-hover:drop-shadow-[0_5px_15px_rgba(121,128,151,0.35)] group-hover:border-white group-hover:transition-all group-hover:ease-out group-hover:duration-500 group-hover:bg-gradient-radial group-hover:drop-shadow-[0_5px_15px_rgba(121,128,151,0.35) transition-all ease-out duration-500`}>
                <Image className="brightness-[2000%] group-hover:invert group-hover:transition-all group-hover:ease-out group-hover:duration-500 transition-all ease-out duration-500" src="/assets/icons/general/chevron.svg" width="14" height="14" alt="Chevron icon" />
            </div>
        </Link>
    )
}

export default ChevronPill