'use client'
import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contact-form/ContactForm';
import DefaultButton from '@/components/buttons/DefaultButton';
import Accordion from '@/components/accordion/Accordion';
import CTA from '@/components/buttons/CTA';
import InfoCard from '@/components/cards/InfoCard';
import ChevronPill from '@/components/buttons/ChevronPill';
import ContactCard from '@/components/cards/ContactCard';
import { generalData } from '@/data/general-data';
import Animation from '@/components/animations/Animation';

const Sobre = () => {
    return (
        <Animation>
            {/* INTRO */}
            <section className='relative min-h-screen w-full bg-bg-color-0 pt-[106px]'>
                <div className='container flex justify-center items-center min-h-[100vh]'>
                    <div className='grid grid-cols-16 gap-3'>
                        <div className='col-span-full lg:col-span-8 flex flex-col h-full justify-end lg:pb-[200px]'>
                            <p className=' text-xs sm:text-sm content-subtitle pb-6'>SOBRE</p>
                            <h1 className=' content-primary text-xl sm:text-2xl pb-14'>Somos um portal de importação de medicamentos não registrados no Brasil.</h1>
                            <DefaultButton href="/sobre#como-importamos" text="Como importamos" style="btn-gray" />
                        </div>
                        <div className='col-span-full lg:col-span-8'>
                            <div className="grid grid-cols-8 gap-3">
                                <div className='w-full rounded-[28px] bg-gradient-radial col-span-full sm:col-span-6 sm:col-start-3 py-9 px-12'>
                                    <div className='flex flex-row items-center justify-center h-full w-full'>
                                        <Image src="/assets/images/anvisa.svg" width={60} height={60} alt="Anvisa Logo" className='mr-3' />
                                        <p className='max-w-[350px] content-secondary text-base'>Seguimos todas regulamentações e exigências da ANVISA.</p>
                                    </div>
                                </div>
                                <div className='h-[373px] w-full rounded-[28px] bg-cover bg-left-bottom bg-no-repeat bg-about-k col-span-5'></div>
                                <div className='h-[605px] w-full rounded-[28px] bg-cover bg-left-bottom bg-no-repeat bg-about-image-3 col-span-3'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-bg-color-0 pb-24'>
                <div className='container'>
                    <div className='grid grid-cols-16 gap-3 pb-3'>
                        <Link href="/sobre#quem-somos" className='col-span-full lg:col-span-8 group' >
                            <div className='h-[400px] lg:h-[340px] bg-gradient-radial rounded-[28px] p-8 relative group-hover:shadow-lg transition-all ease-out duration-500group-hover:transition-all group-hover:ease-out group-hover:duration-500 border border-white'>
                                <h1 className='content-primary text-md sm:text-lg pb-3'>Importação global</h1>
                                <p className='content-secondary text-md sm:text-lg max-w-[537px] pb-8'>Ecossistema completo para adquirir medicamentos especiais com agilidade e segurança do EUA, Europa ou qualquer local do mundo.</p>
                                <div className='absolute right-8 bottom-8'>
                                    <div className={`py-[8px] px-[14px] rounded-[18px] w-fit flex flex-row flex-nowrap justify-center items-center bg-text-primary border border-gray-lighter group-hover:drop-shadow-[0_5px_15px_rgba(121,128,151,0.35)] group-hover:border-white group-hover:transition-all group-hover:ease-out group-hover:duration-500 group-hover:bg-gradient-radial group-hover:drop-shadow-[0_5px_15px_rgba(121,128,151,0.35) transition-all ease-out duration-500`}>
                                        <Image className="brightness-[2000%] group-hover:invert group-hover:transition-all group-hover:ease-out group-hover:duration-500 transition-all ease-out duration-500" src="/assets/icons/general/chevron.svg" width="14" height="14" alt="Chevron icon" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/sobre#regulamentacao" className='col-span-full lg:col-span-8 group' >
                            <div className='col-span-full lg:col-span-8 h-[400px] lg:h-[340px] bg-gradient-radial rounded-[28px] p-8 relative group-hover:shadow-lg transition-all ease-out duration-500group-hover:transition-all group-hover:ease-out group-hover:duration-500 border border-white'>
                                <h1 className='content-primary text-md sm:text-lg pb-3'>Regulamentação</h1>
                                <p className='content-secondary text-md sm:text-lg max-w-[537px] pb-8'>Seguimos com todas as regulamentações e exigências impostas pela Anvisa e legislação vigente (RDC 488/2021)</p>
                                <div className='absolute right-8 bottom-8'>
                                    <div className={`py-[8px] px-[14px] rounded-[18px] w-fit flex flex-row flex-nowrap justify-center items-center bg-text-primary border border-gray-lighter group-hover:drop-shadow-[0_5px_15px_rgba(121,128,151,0.35)] group-hover:border-white group-hover:transition-all group-hover:ease-out group-hover:duration-500 group-hover:bg-gradient-radial group-hover:drop-shadow-[0_5px_15px_rgba(121,128,151,0.35) transition-all ease-out duration-500`}>
                                        <Image className="brightness-[2000%] group-hover:invert group-hover:transition-all group-hover:ease-out group-hover:duration-500 transition-all ease-out duration-500" src="/assets/icons/general/chevron.svg" width="14" height="14" alt="Chevron icon" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className='lg:col-start-3 col-span-full'>
                            <CTA />
                        </div>
                    </div>
                </div>
            </section>



            <section className='bg-bg-color-0'>
                <div className='rounded-[28px] sm:rounded-[60px] bg-white mx-3'>
                    <div className='grid grid-cols-16'>
                        <div className='col-span-16 sm:col-start-2'>

                            <div className='container pt-40' id="quem-somos">
                                <div className='grid grid-cols-16 pb-20 '>
                                    <div className='col-span-full lg:col-span-9'>
                                        <p className=' text-xs sm:text-sm content-subtitle pb-6'>QUEM SOMOS</p>
                                        <h1 className=' content-primary text-xl sm:text-2xl pb-6'>Departamento especializado em importação.</h1>
                                        <p className='content-secondary text-md sm:text-lg pb-5'>A Kemmi é uma empresa farmacêutica brasileira voltada ao mercado de importação de medicamentos especiais.</p>
                                        <p className='content-secondary text-md sm:text-lg pb-14'>Com mais de 20 anos de existência, nosso foco é comercializar e importar medicamentos e produtos para saúde com segurança e eficácia comprovadas, aprovados por órgãos regulatórios competentes.</p>
                                        <div className='w-fit'>
                                            <DefaultButton href="/contato" text="Entrar em contato" style="btn-gray" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row items-end lg:justify-end lg:items-center'>
                                    <div className='flex flex-col mb-6'>
                                        <Image src="/assets/main/20.svg" width={374} height={135} alt="20 anos de experiência" className='mb-6 lg:mb-0 lg:mr-10' />
                                        <p className='content-secondary text-lg text-center'>Anos de experiência</p>
                                    </div>
                                    <div className='bg-about-kemmi-logo bg-cover bg-no-repeat bg-center h-[176px] w-full max-w-[506px] rounded-[28px]'></div>
                                </div>
                            </div>

                            <div className='container pt-32' id='regulamentacao'>
                                <div className='grid grid-cols-16 gap-3 pb-24'>
                                    <div className='col-span-full lg:col-span-9'>
                                        <h1 className=' content-primary text-xl sm:text-2xl pb-6'>Eficiência em importação <br></br> de medicamentos e produtos para saúde.</h1>
                                    </div>
                                    <div className='col-span-full lg:col-span-6'>
                                        <p className='content-secondary text-md sm:text-lg pb-5'>Com expertise e agilidade, garantimos a entrega pontual de produtos de alta qualidade.</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-16'>
                                    <div className='col-span-full'>
                                        <div className='grid gap-x-3 gap-y-[96px] grid-cols-1 lg:grid-cols-3'>
                                            <InfoCard icon="/assets/icons/general/fast-forward.svg" title="Agilidade" text="O serviço inclui todo o trâmite legal, que vai desde a assessoria na documentação necessária e solicitação ao órgão regulador, passando pelas questões de tributação e desembaraço aduaneiro, até a entrega." />
                                            <InfoCard icon="/assets/icons/general/shield.svg" title="Segurança" text="A Kemmi possui todas as autorizações e documentações exigidas pela Anvisa e legislação vigente (RDC 81/2008), estando apta à realização de atividade de importação de fármacos." />
                                            <InfoCard icon="/assets/icons/general/user.svg" title="Dedicação" text="Assessoramos pacientes, familiares e cuidadores na importação de medicamentos de referência ou genéricos, que não possuem registro no mercado brasileiro." />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='container pt-32' id="como-importamos">
                                <div className='pb-14'>
                                    <div className='grid grid-cols-16'>
                                        <div className='col-span-full lg:col-span-9'>
                                            <p className='content-subtitle text-xs sm:text-sm pb-6'>ETAPAS DA IMPORTAÇÃO</p>
                                            <h1 className='content-primary text-xl sm:text-2xl pb-6'>Seu medicamento em apenas 3 etapas.</h1>
                                            <p className='content-secondary text-md sm:text-lg pb-6'>Entenda na prática todas as etapas para aquisição e recebimento dos medicamentos através da nossa logística simplificada.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-16'>
                                    <div className='col-span-full lg:col-span-11 lg:col-start-6 pb-40'>
                                        <div className='px-[18px] md:px-[76px] md:py-20 py-[46px] bg-gradient-radial-inverted rounded-[28px] border border-[#e9ecee]'>
                                            <Accordion />
                                        </div>
                                    </div>
                                    {/* <div className='lg:col-start-3 w-full col-span-full '>
                                        <CTA />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-bg-color-0 py-40'>
                <div className='container'>
                    <div className='grid grid-cols-16'>
                        <div className='col-span-full lg:col-span-5'>
                            <p className=' text-xs sm:text-sm content-subtitle pb-6'>CONTATO</p>
                            <h1 className=' content-primary text-xl sm:text-2xl pb-6'>Fale com a Kemmi.</h1>
                            <p className='content-secondary text-md sm:text-lg pb-7'>Nossos especialistas estão prontos para te ajudar.</p>
                            <div className='flex flex-row mb-10'>
                                {generalData.darkLinks.map((i) => (
                                    <a key={i.id} target='_blank' href={i.href} className='mr-4 hover:brightness-[300%] ease-out duration-500 group-hover:transition-all group-hover:ease-out group-hover:duration-500'>
                                        <Image
                                            src={i.image}
                                            alt={`${i.name} Social Media Icon`}
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
        </Animation>
    )
}

export default Sobre
