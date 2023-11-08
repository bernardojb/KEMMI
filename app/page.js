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

const Home = () => {
  return (
    <>
      {/* INTRO */}
      <section className='relative min-h-screen w-full bg-bg-color-0 '>
        <div className='container'>
          <div className='grid grid-cols-16 min-h-[100vh] gap-3'>
            <div className='col-span-10 flex flex-col h-full justify-center'>
              <p className=' text-sm content-subtitle pb-6'>@KEMMI.FARMA</p>
              <h1 className=' content-primary text-2xl pb-6'>Simplificamos a importação de medicamentos especiais.</h1>
              <p className='content-secondary text-lg pb-14'>Somos uma empresa especializada que ajuda você a importar medicamentos especiais dos Estados Unidos e Europa.</p>
              <div className='flex flex-row flex-wrap items-center'>
                <DefaultButton href="/" text="Solicitar cotação" style="btn-black mr-3" icon="brightness-[2000%]" />
                <DefaultButton href="/" text="Como importamos" style="btn-gray" />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute h-[180vh] w-screen top-0 left-0 z-10'>
          <Experience />
        </div>
      </section>

      <section className='bg-bg-color-0 pb-24'>
        <div className='container'>
          <div className='grid grid-cols-16'>
            <div className='col-span-8 h-[340px] bg-gradient-radial rounded-[28px] p-8 relative'>
              <h1 className='content-primary text-lg pb-3'>Acesso global.</h1>
              <p className='content-secondary text-lg max-w-[537px] pb-8'>Oferecemos fácil acesso  aos melhores medicamentos e laboratórios do mundo.</p>
              <div className='grid grid-cols-8'>
                <div className='col-span-3 gap-3'>
                  <Image src="/assets/main/client-01.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-3'>
                  <Image src="/assets/main/client-02.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-3 col-start-3'>
                  <Image src="/assets/main/client-03.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-3'>
                  <Image src="/assets/main/client-04.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-3'>
                  <Image src="/assets/main/client-05.svg" height={42} width={154} alt='' />
                </div>
                <div className='col-span-3'>
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
          <div className='pb-14'>
            <p className='content-subtitle text-sm pb-6'>ETAPAS DA IMPORTAÇÃO</p>
            <h1 className='content-primary text-2xl'>Oferecemos um processo simplificado para importação dos medicamentos.</h1>
          </div>
          <div className='grid grid-cols-16'>
            <div className='col-span-11 col-start-6 pb-6'>
              <div className='p-20 bg-gradient-radial rounded-[28px]'>
                <Accordion />
              </div>
            </div>
            <div className='col-start-3 w-full col-span-full '>
              <CTA />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-color-0'>
        <div className='rounded-[60px] bg-white mx-3'>
          <div className='container pb-32'>
            <div className='pt-40 grid grid-cols-16'>
              <div className='col-span-12 rounded-[48px] bg-placeholder p-20'>
                <p className=' text-sm content-subtitle pb-6'>QUEM SOMOS</p>
                <h1 className=' content-primary text-2xl pb-6'>Somos uma empresa que ajuda você a importar medicamentos especiais.</h1>
                <p className='content-secondary text-lg pb-14'>Oferecemos um atendimento ágil e cuidamos da sua saúde através da importação inteligente.</p>
                <div className=' pb-[90px] '>
                  <DefaultButton href="/" text="Sobre a Kemmi" style="btn-black" icon="brightness-[2000%]" />
                </div>
                <div className='flex flex-row items-center'>
                  <Image src="/assets/images/anvisa.svg" width={39} height={34} alt="" className='mr-3' />
                  <p className='max-w-[350px] content-secondary text-lg'>Seguimos todas regulamentações e exigências da ANVISA.</p>
                </div>
              </div>
              <div className='col-span-7'>
              </div>
            </div>
          </div>

          <div className='container pb-32'>
            <p className=' text-sm content-subtitle pb-6'>PRODUTOS</p>
            <h1 className=' content-primary text-2xl pb-12'>Medicamentos mais solicitados</h1>
            <div className=' grid grid-cols-4 gap-3'>
              <ProductCard title="Lonsurf 4mg/ml" />
              <ProductCard title="Lonsurf 4mg/ml" />
              <ProductCard title="Lonsurf 4mg/ml" />
              <ProductCard title="Lonsurf 4mg/ml" />
            </div>
          </div>

          <div className='container pb-32'>
            <div className='grid grid-cols-16 '>
              <div className='col-span-9 mb-3'>
                <h1 className=' content-primary text-2xl pb-6'>Portal de importação de medicamentos não registrados no Brasil.</h1>
                <p className='content-secondary text-lg pb-14'>Contamos com mais de 20 anos de experiência no mercado hospitalar e no segmento de alta complexidade.</p>
                <DefaultButton href="/" text="Nossa história" style="btn-black" icon="brightness-[2000%]" />
              </div>

              <div className='mb-3 col-span-5 col-start-12 bg-placeholder rounded-[28px] p-8 flex justify-center items-center flex-col h-[343px]'>
                <h1 className='content-primary text-[120px]' >20</h1>
                <p className='content-secondary text-lg text-center'>Anos de experiência no mercado farmacêutico.</p>
              </div>

              <div className='mb-3 col-span-5 flex justify-center flex-col'>
                <p className='content-secondary text-lg mb-[14px]'>Acompanhe a Kemmi</p>
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

              <div className='mb-3 col-span-full col-start-7'>
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

export default Home
