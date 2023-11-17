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
import DefaultButton from '../buttons/DefaultButton';


const ContactForm = () => {

    const { isSubmitting, handleChange, values, handlePress, errors, setValues, isLoading, setSubmitting } =
        useForm(validate);

    return (
        <section className='bg-bg-color-0 py-40' id="contact-form">
            <div className='container'>
                <div className='grid grid-cols-16'>

                    <div className='col-span-16 lg:col-span-5 mb-9 lg:mb-0'>
                        <p className=' text-xs sm:text-sm content-subtitle pb-6'>ORÇAMENTO</p>
                        <h1 className=' content-primary text-xl lg:text-2xl pb-6'>Solicite uma cotação.</h1>
                        <p className='content-secondary text-base sm:text-lg pb-14'>Preencha o formulário para receber uma cotação  personalizada sobre seu pedido.</p>
                        <p className='font-neue text-base sm:text-lg mb-3'>Se preferir, entre em contato por:</p>
                        <div className='w-fit'>
                            <a href='tel:+5511996978150' >
                                <p className='font-neue underline text-base sm:text-lg mb-1 text-text-accent hover:text-text-accent-hover ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500'>(11) 9 9697 8150</p>
                            </a>
                        </div>
                        <div className='w-fit'>
                            <a href='mailto:contato@kemmifarma.com' >
                                <p className='font-neue underline text-base sm:text-lg mb-1 text-text-accent hover:text-text-accent-hover ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500'>contato@kemmifarma.com</p>
                            </a>
                        </div>
                    </div>

                    <div className='col-span-16 lg:col-start-7 lg:col-span-full rounded-[28px] bg-gradient-radial px-6 py-10 lg:px-12 lg:py-16 border border-white shadow-sm'>
                        {/* <>
                            <h1 className=' font-monument text-xl text-text-secondary mb-9'>Informações pessoais</h1>

                            <div className='flex flex-col sm:flex-row items-start sm:items-center mb-6 relative'>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] whitespace-nowrap text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Nome</p>
                                </div>
                                <input
                                    className={`p-[18px] bg-gray-light rounded-[14px] w-full text-base sm:text-lg font-neue text-primary focus:outline-navbar-text focus:outline-[1px] ${errors.name && "border border-warning"}`}
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder='Digite seu nome'
                                >
                                </input>
                                {errors.name && <div className='absolute right-[18px] top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/alert-triangle.svg" width={24} height={24} alt='Error' /> </div>}
                            </div>

                            <div className='flex flex-col sm:flex-row items-start sm:items-center mb-6 relative'>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Email</p>
                                </div>
                                <input
                                    className={` p-[18px] bg-gray-light rounded-[14px] w-full text-base sm:text-lg font-neue text-primary focus:outline-navbar-text focus:outline-[1px] ${errors.email && "border border-warning"}`}
                                    type='text'
                                    name='email'
                                    id='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder='Digite seu email'
                                >
                                </input>
                                {errors.email && <div className='absolute right-[18px] top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/alert-triangle.svg" width={24} height={24} alt='Error' /> </div>}
                            </div>

                            <div className='flex flex-col sm:flex-row items-start sm:items-center mb-9 relative'>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Telefone</p>
                                </div>
                                <input
                                    className={` p-[18px] bg-gray-light rounded-[14px] w-full text-base sm:text-lg font-neue text-primary focus:outline-navbar-text focus:outline-[1px] ${errors.phone && "border border-warning"}`}
                                    type='text'
                                    name='phone'
                                    id='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder='Digite seu telefone'
                                >
                                </input>
                                {errors.phone && <div className='absolute right-[18px] top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/alert-triangle.svg" width={24} height={24} alt='Error' /> </div>}
                            </div>

                            <div className='w-full h-[1px] bg-gray-light'></div>

                            <h1 className=' font-monument text-xl text-text-secondary mb-9 mt-9'>Solicitação</h1>

                            <div className='flex flex-col sm:flex-row items-start sm:items-start mb-6 relative'>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Qual medicamento você está buscando?</p>
                                </div>
                                <textarea
                                    rows={4}
                                    className={` p-[18px] bg-gray-light rounded-[14px] w-full text-base sm:text-lg font-neue text-primary focus:outline-navbar-text focus:outline-[1px] ${errors.message && "border border-warning"}`}
                                    type='text'
                                    name='message'
                                    id='message'
                                    value={values.message}
                                    onChange={handleChange}
                                    placeholder='Descreva sua solicitação'
                                >
                                </textarea>
                                {errors.message && <div className='absolute right-[18px] top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/alert-triangle.svg" width={24} height={24} alt='Error' /> </div>}
                            </div>

                            <div className='flex flex-col sm:flex-row items-start sm:items-center mb-16 '>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Receita médica</p>
                                </div>
                                <div className='group'>
                                    <label className={`pb-[16px] pt-[14px] px-7 rounded-[18px] btn-gray w-fit flex flex-row flex-nowrap justify-center items-center cursor-pointer`}>
                                        <input type='file' placeholder='teste' className='hidden' />
                                        <h1 className='button-default font-neue-semibold text-base lg:text-lg pr-[10px]'>
                                            Anexar receita
                                        </h1>
                                        <Image className={`group-hover:transition-all ease-out duration-500 group-hover:invert`} src="/assets/icons/general/chevron.svg" width="14" height="14" alt="Chevron Icon" />
                                    </label>
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row lg:items-center'>
                                <div className='max-w-[480px] lg:mr-7 mb-6 lg:mb-0'>
                                    <p className='content-secondary max-w-[480px] w-full'>Ao enviar este formulário, você concorda com a nossa <Link href="/politica-de-privacidade" className='underline text-text-accent hover:text-text-accent-hover ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500'>Política de Privacidade</Link>.</p>
                                </div>
                                <button className='whitespace-nowrap w-fit group' onClick={handlePress}>
                                    <div className={`pb-[16px] pt-[14px] px-7 rounded-[18px] btn-black w-fit flex flex-row flex-nowrap justify-center items-center`}>
                                        <h1 className='button-default font-neue-semibold text-base lg:text-lg pr-[10px]'>
                                            Enviar
                                        </h1>
                                        <Image className={`brightness-[2000%] group-hover:transition-all ease-out duration-500 group-hover:invert`} src="/assets/icons/general/chevron.svg" width="14" height="14" alt="Chevron Icon" />
                                    </div>
                                </button>
                            </div>
                        </> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm



