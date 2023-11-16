import React from 'react'
import Image from 'next/image'

const ContactCard = () => {
    return (
        <div className='px-[18px] py-8 sm:p-8 flex flex-col lg:flex-row bg-gradient-contact min-h-[277px] rounded-[28px]'>
            <div className='flex flex-col justify-between pb-20 lg:pb-0'>
                <p className='font-neue text-md sm:text-lg text-text-primary mb-14 sm:mb-3'>@kemmi.farma</p>
                <div>
                    <div className='w-fit group mb-[18px] sm:mb-0'>
                        <a href='tel:+5511996978150'>
                            <p className='font-neue text-lg sm:text-xl text-text-primary group-hover:text-gray group-hover:transition-all ease-in duration-300'>(11) 9 9697 8150</p>
                        </a>
                    </div>
                    <div className='group'>
                        <a href='mailto:contato@kemmifarma.com' className=''>
                            <p className='font-neue text-lg sm:text-xl text-text-primary group-hover:text-gray group-hover:transition-all ease-in duration-300 break-words'>contato@kemmifarma.com</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='mt-auto ml-auto'>
                <Image src="/assets/main/kemmi-type.svg" height="57" width="213" alt='Kemmi Logo'/>
            </div>
        </div>
    )
}

export default ContactCard