import React from 'react'
import ContactForm from '@/components/contact-form/ContactForm'
import Image from 'next/image'
import DefaultButton from '@/components/buttons/DefaultButton'
import Link from 'next/link'
import { generalData } from '@/data/general-data'

const page = () => {
    return (
        <>
            <section className='bg-bg-color-0 pt-64 pb-40'>
                <div className='container'>
                    <div className='grid grid-cols-16'>
                        <div className='col-span-5'>
                            <p className=' text-sm content-subtitle pb-6'>CONTATO</p>
                            <h1 className=' content-primary text-2xl pb-6'>Fale com a Kemmi.</h1>
                            <p className='content-secondary text-lg pb-7'>Nossos especialistas estão prontos para te ajudar.</p>
                            <div className='flex flex-row'>
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
                        <div className='col-span-full col-start-7'>
                            <div className='p-8 flex flex-row bg-white h-[277px] rounded-[28px]'>
                                <div className='flex flex-col justify-between'>
                                    <p className='font-neue text-lg text-text-primary '>@kemmi.farma</p>
                                    <div>
                                        <a href='tel:+5511996978150'>
                                            <p className='font-neue text-xl text-text-primary '>(11) 9 9697 8150</p>
                                        </a>
                                        <a href='mailto:contato@kemmifarma.com'>
                                            <p className='font-neue text-xl text-text-primary '>contato@kemmifarma.com</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='mt-auto ml-auto'>
                                    <Image src="/assets/main/kemmi-type.svg" height="57" width="213" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-bg-color-0 py-40'>
                <div className='container'>
                    <div className='grid grid-cols-16'>

                        <div className='col-span-5'>
                            <p className=' text-sm content-subtitle pb-6'>ORÇAMENTO</p>
                            <h1 className=' content-primary text-2xl pb-6'>Solicite uma cotação.</h1>
                            <p className='content-secondary text-lg pb-14'>Preencha o formulário para receber uma cotação  personalizada sobre seu pedido.</p>
                            <p className='font-neue text-lg mb-3'>Se preferir, entre em contato por:</p>
                            <a href='tel:+5511996978150'>
                                <p className='font-neue underline text-lg mb-1 text-text-accent'>(11) 9 9697 8150</p>
                            </a>
                            <a href='mailto:contato@kemmifarma.com' >
                                <p className='font-neue underline text-lg mb-1 text-text-accent'>contato@kemmifarma.com</p>
                            </a>
                        </div>

                        <div className='col-start-7 col-span-full rounded-[28px] bg-white px-12 py-16'>
                            <h1 className=' font-monument text-xl text-text-secondary mb-9'>Informações pessoais</h1>

                            <div className='flex flex-row items-center mb-6'>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] whitespace-nowrap text-lg font-neue text-primary'>Nome</p>
                                </div>
                                <input
                                    className={` p-[18px] bg-gray-light rounded-[14px] w-full text-lg font-neue text-primary`}
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

                            <div className='flex flex-row items-center mb-6'>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] text-lg font-neue text-primary'>Email</p>
                                </div>
                                <input
                                    className={` p-[18px] bg-gray-light rounded-[14px] w-full text-lg font-neue text-primary`}
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

                            <div className='flex flex-row items-center mb-9'>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] text-lg font-neue text-primary'>Telefone</p>
                                </div>
                                <input
                                    className={` p-[18px] bg-gray-light rounded-[14px] w-full text-lg font-neue text-primary`}
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

                            <div className='flex flex-row mb-6'>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] text-lg font-neue text-primary'>Qual medicamento você está buscando?</p>
                                </div>
                                <textarea
                                    rows={3}
                                    className={` p-[18px] bg-gray-light rounded-[14px] w-full text-lg font-neue text-primary`}
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

                            <div className='flex flex-row items-center mb-16 '>
                                <div className='w-[214px] mr-7'>
                                    <p className='w-[214px] text-lg font-neue text-primary'>Receita médica</p>
                                </div>
                                <DefaultButton href="" text="Anexar receita" style="btn-gray" />
                            </div>

                            <div className='flex flex-row items-center mb-16'>
                                <div className='max-w-[480px] mr-7'>
                                    <p className='content-secondary max-w-[480px] w-full'>Ao enviar este formulário, você concorda com a nossa <Link href="/" className='underline text-text-accent'>Política de Privacidade</Link>.</p>
                                </div>
                                <DefaultButton href="" text="Enviar" style="btn-black" icon="brightness-[2000%]" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page