import React from 'react'
import Image from 'next/image'

const InfoCard = ({icon, title, text}) => {
    return (
        <div className=''>
            <div className='flex flex-col'>
                <div className="bg-text-primary h-[34px] w-[58px] rounded-full flex justify-center items-center min-w-[50px] mb-6">
                    <Image src={icon} height="24" width="24" alt="" />
                </div>
                <h1 className='content-primary text-md sm:text-lg mb-4'>{title}</h1>
                <p className='content-secondary text-md sm:text-lg'>{text}</p>
            </div>
        </div>
    )
}

export default InfoCard