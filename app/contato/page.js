import React from 'react'
import ContactForm from '@/components/contact-form/ContactForm'
import Image from 'next/image'
import DefaultButton from '@/components/buttons/DefaultButton'
import Link from 'next/link'
import { generalData } from '@/data/general-data'
import ContactCard from '@/components/cards/ContactCard'

const page = () => {
    return (
        <>
            <section className='bg-bg-color-0 pt-64'>
                <div className='container'>
                    <div className='grid grid-cols-16'>
                        <div className='col-span-full lg:col-span-5'>
                            <p className='text-xs sm:text-sm content-subtitle pb-6'>CONTATO</p>
                            <h1 className='content-primary text-xl sm:text-2xl pb-6'>Fale com a Kemmi.</h1>
                            <p className='content-secondary text-md sm:text-lg pb-7'>Nossos especialistas estão prontos para te ajudar.</p>
                            <div className='flex flex-row mb-10 lg:mb-0'>
                                {generalData.links.map((i) => (
                                    <a target='_blank' href={i.href} className='mr-4'>
                                        <Image
                                            src={i.image}
                                            alt={`asd ${i.name}`}
                                            width={24}
                                            height={24}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='col-span-full lg:col-start-7'>
                            <ContactCard />
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
        </>
    )
}

export default page