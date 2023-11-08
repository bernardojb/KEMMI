'use client'
import React from 'react'
import validate from '@/app/contato/validateInfo';
import useForm from '@/app/contato/useForm';
import Image from 'next/image';
import Animation from '../animations/Animation';
import Link from 'next/link';
// import Title from '../texts/Title';
// import Content from '../texts/Content';
import { generalData } from '@/data/general-data';
import ContactAnimation from '../animations/ContactAnimation';

const ContactForm = () => {

    const { isSubmitting, handleChange, values, handlePress, errors, setValues, isLoading, setSubmitting } =
        useForm(validate);

    return (
        <section className='bg-black w-full'>
            <section className='py-40 w-full bot-bg-gradient'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        {/* <div className='col-span-12 lg:col-span-4 items-center flex flex-col mb-20 lg:mb-0 order-2 lg:order-1 min-h-[500px]'>
                            <div className='min-h-[490px] max-w-[360px] border border-green-border w-full h-full rounded-3xl flex flex-col justify-between p-16 bg-center bg-cover bg-[url("/assets/images/contato/bg-card-contact.png")]'>
                                <div className='flex flex-col items-center justify-center'>
                                    <Image src="/assets/icons/m3d-icon.svg" width={70} height={75} alt='M3D Icon' className='mb-8' />
                                    <a href={`mailto:${generalData.email}`}>
                                        <p className='text-lg text-almost-white hover:text-green font-manrope font-regular mb-4 md:max-w-[352px] text-center hover:transition transition ease-out duration-500 hover:ease-out hover:duration-500'>{generalData.email}</p>
                                    </a>
                                    <a href={`tel:${generalData.phone}`}>
                                        <p className='text-lg text-almost-white hover:text-green font-manrope font-regular md:max-w-[352px] text-center hover:transition transition ease-out duration-500 hover:ease-out hover:duration-500'>{generalData.phone}</p>
                                    </a>
                                </div>
                                <div>
                                    <div className='flex flex-row justify-center items-center mb-4'>
                                        <a href={generalData.links.linkedin} target='_blank' className='w-fit mr-4 hover:brightness-150 hover:ease-out hover:transition hover:duration-200 ease-out transition duration-200'>
                                            <Image src="/assets/icons/linkedin.svg" width={18} height={18} alt='Linkedin page' />
                                        </a>
                                        <a href={generalData.links.instagram} target='_blank' className='w-fit hover:brightness-150 hover:ease-out hover:transition hover:duration-200 ease-out transition duration-200'>
                                            <Image src="/assets/icons/instagram.svg" width={18} height={18} alt='Linkedin page' />
                                        </a>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <p className='text-gray font-manrope font-regular text-center w-full'>© {new Date().getFullYear()} {generalData.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className='col-span-12 lg:col-span-7 lg:col-start-7 order-1 lg:order-2 lg:mb-0 mb-20'>
                            {isSubmitting ? (
                                <ContactAnimation>
                                    <div className='z-[9999]'>
                                        <div className='flex flex-col h-full justify-center items-center'>
                                            <Image src="/assets/main/main-logo-icon.svg" width={50} height={50} alt='M3D Icon' className='mb-8' />
                                            <h1 className='font-cairo font-semibold text-xl text-white mb-4 text-center'>Obrigado!</h1>
                                            <h1 className='font-cairo font-semibold text-base text-white mb-20 text-center'>Entraremos em contato em breve!!</h1>
                                            {/* <Content className="max-w-[536px] text-center mb-20" text="Bienvenidos a M3D, ¡pronto nos comunicaremos!" /> */}
                                            <a onClick={() => setSubmitting(false)} className='cursor-pointer flex flex-row justify-center items-center pointer-events-auto w-fit hover:brightness-[1000%] hover:transition transition ease-out duration-500 hover:ease-out hover:duration-500'>
                                                {/* <Content text="Cerrar" className="tracking-[4px] uppercase text-green hover:transition transition ease-out duration-500 hover:ease-out hover:duration-500 mr-2 text-sm" /> */}
                                                <p className='mr-4'>Fechar</p>
                                                <Image src="/assets/icons/general/arrow.svg" width={20} height={20} alt='Arrow Icon' />
                                            </a>
                                        </div>
                                    </div>
                                </ContactAnimation>
                            ) : (
                                <Animation>
                                    <form className='flex flex-col'>
                                        <div className='mb-10'>
                                            <div className='mb-5'>
                                                {/* <Title text="Habla con M3D" className="text-3xl" /> */}
                                            </div>
                                            {/* <Content className="max-w-[536px]" text="Descubra el potencial de nuestras soluciones 3D para elevar los estándares de la atención quirúrgica personalizada." /> */}
                                        </div>
                                        <div className='w-full rounded-xl px-3 py-3 border border-green-border no-underline mb-4'>
                                            <span className="relative no-underline my-2">
                                                <input
                                                    className={`no-underline uppercase bg-[transparent] text-base ps-2 w-full outline-0 font-manrope font-regular ${values.name ? ('text-white') : ('text-gray')}`}
                                                    type='text'
                                                    name='name'
                                                    id='name'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    placeholder='Nome'
                                                >
                                                </input>
                                                {errors.name && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                            </span>
                                        </div>
                                        <div className='flex flex-row '>
                                            <div className='w-full rounded-xl px-3 py-3 border border-green-border no-underline mb-4 mr-2'>
                                                <span className="relative no-underline my-2 ">
                                                    <input
                                                        className={`no-underline uppercase bg-[transparent] text-base ps-2 w-full outline-0 font-manrope font-regular ${values.email ? ('text-white') : ('text-gray')}`}
                                                        type='text'
                                                        name='email'
                                                        id='email'
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        placeholder='Email'
                                                    >
                                                    </input>
                                                    {errors.email && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                                </span>
                                            </div>
                                            <div className='w-full rounded-xl px-3 py-3 border border-green-border no-underline mb-4 ml-2'>
                                                <span className="relative no-underline my-2">
                                                    <input
                                                        className={`no-underline uppercase bg-[transparent] text-base ps-2 w-full outline-0 font-manrope font-regular ${values.phone ? ('text-white') : ('text-gray')}`}
                                                        type='text'
                                                        name='phone'
                                                        id='phone'
                                                        value={values.phone}
                                                        onChange={handleChange}
                                                        placeholder='Telefone'
                                                    >
                                                    </input>
                                                    {errors.phone && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                                </span>
                                            </div>
                                        </div>
                                        {/* <div className='flex flex-row '>
                                            <div className='w-full rounded-xl px-3 py-3 border border-green-border no-underline mb-4 mr-2'>
                                                <span className="relative no-underline my-2">
                                                    <input
                                                        className={`no-underline uppercase bg-[transparent] text-base ps-2 w-full outline-0 font-manrope font-regular ${values.office ? ('text-white') : ('text-gray')}`}
                                                        type='text'
                                                        name='office'
                                                        id='office'
                                                        value={values.office}
                                                        onChange={handleChange}
                                                        placeholder='Actuación'
                                                    >
                                                    </input>
                                                    {errors.office && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                                </span>
                                            </div>
                                            <div className='w-full rounded-xl px-3 py-3 border border-green-border no-underline mb-4 ml-2'>
                                                <span className="relative no-underline my-2">
                                                    <input
                                                        className={`no-underline uppercase bg-[transparent] text-base ps-2 w-full outline-0 font-manrope font-regular ${values.institution ? ('text-white') : ('text-gray')}`}
                                                        type='text'
                                                        name='institution'
                                                        id='institution'
                                                        value={values.institution}
                                                        onChange={handleChange}
                                                        placeholder='Institución'
                                                    >
                                                    </input>
                                                    {errors.institution && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                                </span>
                                            </div>
                                        </div> */}
                                        <div className='w-full rounded-xl px-3 py-3 border border-green-border no-underline mb-10'>
                                            <span className="relative no-underline my-2">
                                                <input
                                                    className={`no-underline uppercase bg-[transparent] text-base ps-2 w-full outline-0 font-manrope font-regular ${values.message ? ('text-white') : ('text-gray')}`}
                                                    type='text'
                                                    name='message'
                                                    id='message'
                                                    value={values.message}
                                                    onChange={handleChange}
                                                    placeholder='MENSAGEM'
                                                >
                                                </input>
                                                {errors.message && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                            </span>
                                        </div>
                                        <div className='flex flex-col sm:flex-row justify-between'>
                                            <div className='flex flex-row items-center order-2 sm:order-1'>
                                                <div className='mr-4'>
                                                    <Image src='/assets/main/main-logo-icon.svg' className='brightness-[800%] grayscale' width={24} height={24} alt="" />
                                                </div>
                                                <p className='font-raleway font-medium text-xs text-gray w-full sm:max-w-[248px] group'>Ao enviar esse formulário, você concorda com a nossa <Link href="/politica-de-privacidade" className='font-bold hover:ease-out hover:transition hover:duration-200 ease-out transition duration-200 hover:text-accent'>Política de Privacidade.</Link></p>
                                            </div>
                                            <button
                                                disabled={isLoading ? true : false}
                                                onClick={handlePress}
                                                className='order-1 sm:order-2 sm:mb-0 mb-4 ml-auto md:ml-0'
                                            >
                                                <div className='flex flex-row items-center'>

                                                    {isLoading ? (
                                                        <div className='flex flex-row pointer-events-auto w-fit hover:brightness-[1000%] hover:transition transition ease-out duration-500 hover:ease-out hover:duration-500'>
                                                            {/* <Content text="ENVIAR MENSAJE" className="tracking-[4px] text-green mr-2 text-sm " /> */}
                                                            <p className='text-white mr-4'>Enviar</p>
                                                            <Image src="/assets/icons/general/arrow.svg" width={20} height={20} alt='Arrow Icon' />
                                                        </div>
                                                    ) : (
                                                        <div className='flex flex-row pointer-events-auto w-fit hover:brightness-[1000%] hover:transition transition ease-out duration-500 hover:ease-out hover:duration-500'>
                                                            {/* <Content text="ENVIAR MENSAJE" className="tracking-[4px] text-green mr-2 text-sm " /> */}
                                                            <p className='text-white mr-4'>Enviar</p>
                                                            <Image src="/assets/icons/general/arrow.svg" width={20} height={20} alt='Arrow Icon' />
                                                        </div>
                                                    )}
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                </Animation>
                            )}
                        </div>
                    </div >
                </div >
            </section>
        </section >
    )
}

export default ContactForm



