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
        <section className='bg-bg-color-0 py-40'>
            <div className='container'>
                <div className='grid grid-cols-16'>

                    <div className='col-span-16 lg:col-span-5 mb-9 lg:mb-0'>
                        <p className=' text-xs sm:text-sm content-subtitle pb-6'>ORÇAMENTO</p>
                        <h1 className=' content-primary text-xl lg:text-2xl pb-6'>Solicite uma cotação.</h1>
                        <p className='content-secondary text-base sm:text-lg pb-14'>Preencha o formulário para receber uma cotação  personalizada sobre seu pedido.</p>
                        <p className='font-neue text-base sm:text-lg mb-3'>Se preferir, entre em contato por:</p>
                        <div className='w-fit'>
                            <a href='tel:+5511996978150' >
                                <p className='font-neue underline text-base sm:text-lg mb-1 text-text-accent'>(11) 9 9697 8150</p>
                            </a>
                        </div>
                        <div className='w-fit'>
                            <a href='mailto:contato@kemmifarma.com' >
                                <p className='font-neue underline text-base sm:text-lg mb-1 text-text-accent'>contato@kemmifarma.com</p>
                            </a>
                        </div>
                    </div>

                    <div className='col-span-16 lg:col-start-7 lg:col-span-full rounded-[28px] bg-white px-6 py-10 lg:px-12 lg:py-16'>
                        <h1 className=' font-monument text-xl text-text-secondary mb-9'>Informações pessoais</h1>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center mb-6'>
                            <div className='w-[214px] mr-7'>
                                <p className='w-[214px] whitespace-nowrap text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Nome</p>
                            </div>
                            <input
                                className={` p-[18px] bg-gray-light rounded-[14px] w-full text-base sm:text-lg font-neue text-primary`}
                                type='text'
                                name='name'
                                id='name'
                                // value={values.name}
                                // onChange={handleChange}
                                placeholder='Digite seu nome'
                            >
                            </input>
                            {/* {errors.name && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/warning.svg" width={16} height={16} alt='Error' /> </div>} */}
                        </div>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center mb-6'>
                            <div className='w-[214px] mr-7'>
                                <p className='w-[214px] text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Email</p>
                            </div>
                            <input
                                className={` p-[18px] bg-gray-light rounded-[14px] w-full text-base sm:text-lg font-neue text-primary`}
                                type='text'
                                name='name'
                                id='name'
                                // value={values.name}
                                // onChange={handleChange}
                                placeholder='Digite seu email'
                            >
                            </input>
                            {/* {errors.name && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/warning.svg" width={16} height={16} alt='Error' /> </div>} */}
                        </div>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center mb-9'>
                            <div className='w-[214px] mr-7'>
                                <p className='w-[214px] text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Telefone</p>
                            </div>
                            <input
                                className={` p-[18px] bg-gray-light rounded-[14px] w-full text-base sm:text-lg font-neue text-primary`}
                                type='text'
                                name='name'
                                id='name'
                                // value={values.name}
                                // onChange={handleChange}
                                placeholder='Digite seu telefone'
                            >
                            </input>
                            {/* {errors.name && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/warning.svg" width={16} height={16} alt='Error' /> </div>} */}
                        </div>

                        <div className='w-full h-[1px] bg-gray-light'></div>

                        <h1 className=' font-monument text-xl text-text-secondary mb-9 mt-9'>Solicitação</h1>

                        <div className='flex flex-col sm:flex-row items-start sm:items-start mb-6'>
                            <div className='w-[214px] mr-7'>
                                <p className='w-[214px] text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Qual medicamento você está buscando?</p>
                            </div>
                            <textarea
                                rows={3}
                                className={` p-[18px] bg-gray-light rounded-[14px] w-full text-base sm:text-lg font-neue text-primary`}
                                type='text'
                                name='name'
                                id='name'
                                // value={values.name}
                                // onChange={handleChange}
                                placeholder='Descreva sua solicitação'
                            >
                            </textarea>
                            {/* {errors.name && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/general/warning.svg" width={16} height={16} alt='Error' /> </div>} */}
                        </div>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center mb-16 '>
                            <div className='w-[214px] mr-7'>
                                <p className='w-[214px] text-base sm:text-lg font-neue text-primary mb-3 lg:mb-0'>Receita médica</p>
                            </div>
                            <DefaultButton href="" text="Anexar receita" style="btn-gray" />
                        </div>

                        <div className='flex flex-col lg:flex-row lg:items-center'>
                            <div className='max-w-[480px] lg:mr-7 mb-6 lg:mb-0'>
                                <p className='content-secondary max-w-[480px] w-full'>Ao enviar este formulário, você concorda com a nossa <Link href="/politica-de-privacidade" className='underline text-text-accent'>Política de Privacidade</Link>.</p>
                            </div>
                            <DefaultButton href="" text="Enviar" style="btn-black" icon="brightness-[2000%]" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm



