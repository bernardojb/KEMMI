'use client'
import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contact-form/ContactForm';
import DefaultButton from '@/components/buttons/DefaultButton';
import Accordion from '@/components/accordion/Accordion';
import CTA from '@/components/buttons/CTA';
import ProductCard from '@/components/cards/ProductCard';
import Experience from '@/components/canvas/Experience';
import { generalData } from '@/data/general-data';
import ChevronPill from '@/components/buttons/ChevronPill';
import Carrousel from '@/components/carrousel/Carrousel';

const Home = () => {
  return (
    <>
      {/* INTRO */}
      <section className='relative min-h-screen w-full bg-bg-color-0 '>
        <div className='container pt-[20px]'>
          <div className='grid grid-cols-16 min-h-[768px] h-[100vh] gap-3'>
            <div className=' col-span-full lg:col-span-10 flex flex-col h-full justify-center'>
              <p className=' text-xs sm:text-sm content-subtitle pb-6'>@KEMMI.FARMA</p>
              <h1 className=' content-primary text-xl sm:text-2xl pb-6'>Simplificamos a importação de medicamentos especiais.</h1>
              <p className='content-secondary text-base sm:text-lg pb-14'>Somos uma empresa especializada que ajuda você a importar medicamentos especiais dos Estados Unidos e Europa.</p>
              <div className='flex flex-row flex-wrap items-center'>
                <div className='mb-3'>
                  <DefaultButton href="/" text="Solicitar cotação" style="btn-black mr-3" icon="brightness-[2000%]" />
                </div>
                <div className='mb-3'>
                  <DefaultButton href="/" text="Como importamos" style="btn-gray" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='absolute h-[180vh] w-screen top-0 left-0 z-10'>
          <Experience />
        </div> */}
      </section>

      <section className='bg-bg-color-0 pb-24'>
        <div className='container'>
          <div className='grid grid-cols-16'>
            <div className='col-span-full lg:col-span-8 h-full bg-gradient-radial rounded-[28px] p-8 relative max-w-[610px]'>
              <h1 className='content-primary text-base sm:text-lg pb-3'>Acesso global.</h1>
              <p className='content-secondary text-base sm:text-lg max-w-[537px] pb-8'>Oferecemos fácil acesso  aos melhores medicamentos e laboratórios do mundo.</p>
              <div className='grid grid-cols-8 gap-3 pb-12 sm:pb-0'>
                <div className='col-span-4 sm:col-span-3'>
                  <Image src="/assets/main/client-01.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-4 sm:col-span-3'>
                  <Image src="/assets/main/client-02.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-4 sm:col-span-3 sm:col-start-3'>
                  <Image src="/assets/main/client-03.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-4 sm:col-span-3'>
                  <Image src="/assets/main/client-04.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-4 sm:col-span-3'>
                  <Image src="/assets/main/client-05.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-4 sm:col-span-3'>
                  <Image src="/assets/main/client-06.svg" height={42} width={154} alt='' />
                </div>
              </div>
              <div className='absolute right-8 bottom-8'>
                <ChevronPill href="/" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-color-0 pb-40'>
        <div className='container'>
          <div className='pb-14 w-full lg:w-13/16 '>
            <p className='content-subtitle text-xs sm:text-sm pb-6'>ETAPAS DA IMPORTAÇÃO</p>
            <h1 className='content-primary text-xl lg:text-2xl'>Oferecemos um processo simplificado para importação dos medicamentos.</h1>
          </div>
          <div className='grid grid-cols-16'>
            <div className='col-span-full lg:col-span-11 lg:col-start-6 pb-6'>
              <div className='p-10 lg:p-20 bg-gradient-radial rounded-[28px]'>
                <Accordion />
              </div>
            </div>
            <div className='lg:col-start-3 w-full col-span-full '>
              <CTA />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-color-0'>
        <div className='rounded-[60px] bg-white mx-3'>

          <div className='container pb-32'>
            <div className='pt-40 grid grid-cols-16 relative sm:h-[1160px]'>

              <div className='col-span-full sm:col-span-12 rounded-[48px] bg-placeholder p-10 lg:p-20 h-fit sm:mt-[90px] z-10 mb-3 sm:mb-0'>
                <p className=' text-xs sm:text-sm content-subtitle pb-6'>QUEM SOMOS</p>
                <h1 className=' content-primary text-lg lg:text-2xl pb-6 break-words'>Somos uma empresa que ajuda você a importar medicamentos especiais.</h1>
                <p className='content-secondary text-base lg:text-lg pb-14'>Oferecemos um atendimento ágil e cuidamos da sua saúde através da importação inteligente.</p>
                <div className=' pb-[90px] '>
                  <DefaultButton href="/" text="Sobre a Kemmi" style="btn-black" icon="brightness-[2000%]" />
                </div>
                <div className='flex flex-row items-center'>
                  <Image src="/assets/images/anvisa.svg" width={39} height={34} alt="" className='mr-3' />
                  <p className='max-w-[350px] content-secondary text-base sm:text-lg'>Seguimos todas regulamentações e exigências da ANVISA.</p>
                </div>
              </div>

              <div className='ml-auto col-span-full lg:col-span-7 flex sm:absolute right-0 top-[160px] h-[650px] sm:h-[1000px] w-[60vw] sm:w-[40vw] max-w-[520px] rounded-[48px] z-0 bg-placeholder'>
                <Image src="" height="" width="" alt='' />
              </div>
            </div>
          </div>

          <div className='container pb-32'>
            <p className=' text-xs sm:text-sm content-subtitle pb-6'>PRODUTOS</p>
            <h1 className=' content-primary text-xl lg:text-2xl pb-12'>Medicamentos mais solicitados</h1>
            <div className='overflow-x-hidden'>
              <Carrousel />
            </div>
          </div>

          <div className='container pb-32'>
            <div className='grid grid-cols-16 '>
              <div className='col-span-full lg:col-span-9 mb-9 lg:mb-3'>
                <h1 className=' content-primary text-xl lg:text-2xl pb-6'>Portal de importação de medicamentos não registrados no Brasil.</h1>
                <p className='content-secondary text-base sm:text-lg pb-14'>Contamos com mais de 20 anos de experiência no mercado hospitalar e no segmento de alta complexidade.</p>
                <DefaultButton href="/" text="Nossa história" style="btn-black" icon="brightness-[2000%]" />
              </div>

              <div className='mb-3 col-span-full md:col-start-10 lg:col-span-5 lg:col-start-12 bg-placeholder rounded-[28px] p-8 flex justify-center items-center flex-col h-[343px]'>
                <h1 className='content-primary text-[120px]' >20</h1>
                <p className='content-secondary text-lg text-center'>Anos de experiência no mercado farmacêutico.</p>
              </div>

              <div className='mb-3 col-span-full lg:col-span-5 flex justify-center flex-col order-2 lg:order-1'>
                <p className='content-secondary text-base sm:text-lg mb-[14px]'>Acompanhe a Kemmi</p>
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

              <div className='mb-3 col-span-full lg:col-start-7 order-1 lg:order-2'>
                <div className='h-[146px] rounded-[28px] bg-placeholder '>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-color-0 py-40'>
        <div className='container'>
          <div className='grid grid-cols-16'>

            <div className='col-span-16 lg:col-span-5 mb-9 lg:mb-0'>
              <p className=' text-xs sm:text-sm content-subtitle pb-6'>ORÇAMENTO</p>
              <h1 className=' content-primary text-xl lg:text-2xl pb-6'>Solicite uma cotação.</h1>
              <p className='content-secondary text-base sm:text-lg pb-14'>Preencha o formulário para receber uma cotação  personalizada sobre seu pedido.</p>
              <p className='font-neue text-base sm:text-lg mb-3'>Se preferir, entre em contato por:</p>
              <a href='tel:+5511996978150'>
                <p className='font-neue underline text-base sm:text-lg mb-1 text-text-accent'>(11) 9 9697 8150</p>
              </a>
              <a href='mailto:contato@kemmifarma.com' >
                <p className='font-neue underline text-base sm:text-lg mb-1 text-text-accent'>contato@kemmifarma.com</p>
              </a>
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

              <div className='flex flex-col lg:flex-row lg:items-center mb-16'>
                <div className='max-w-[480px] lg:mr-7 mb-6 lg:mb-0'>
                  <p className='content-secondary max-w-[480px] w-full'>Ao enviar este formulário, você concorda com a nossa <Link href="/politica-de-privacidade" className='underline text-text-accent'>Política de Privacidade</Link>.</p>
                </div>
                <DefaultButton href="" text="Enviar" style="btn-black" icon="brightness-[2000%]" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default Home
